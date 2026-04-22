import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteEvent, getAdminEvents, getApiErrorMessage } from "../api/eventApi";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageAlert from "../components/MessageAlert";

function AdminDashboardPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadEvents = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const data = await getAdminEvents();
      setEvents(data);
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (eventId) => {
    if (!window.confirm("Do you want to delete this event?")) {
      return;
    }

    try {
      await deleteEvent(eventId);
      setMessage("Event deleted successfully.");
      loadEvents();
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error));
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading admin dashboard..." />;
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Admin Panel</p>
          <h1>Manage Events</h1>
          <p>Create, edit, delete events, and check event registrations.</p>
        </div>
        <Link className="button" to="/admin/events/new">
          Create Event
        </Link>
      </div>

      <MessageAlert message={message} type="success" />
      <MessageAlert message={errorMessage} type="error" />

      {!events.length ? (
        <div className="card empty-state">No events available. Create your first event.</div>
      ) : (
        <div className="card table-card">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Venue</th>
                  <th>Seats</th>
                  <th>Registrations</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.venue}</td>
                    <td>{event.availableSeats}</td>
                    <td>{event.registrationCount}</td>
                    <td className="action-group">
                      <Link className="button button-secondary button-small" to={`/admin/events/${event.id}/edit`}>
                        Edit
                      </Link>
                      <Link
                        className="button button-secondary button-small"
                        to={`/admin/events/${event.id}/registrations`}
                      >
                        Registrations
                      </Link>
                      <button className="button button-danger button-small" type="button" onClick={() => handleDelete(event.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminDashboardPage;
