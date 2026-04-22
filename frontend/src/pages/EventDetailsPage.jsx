import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApiErrorMessage, getEventById } from "../api/eventApi";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageAlert from "../components/MessageAlert";

function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const data = await getEventById(eventId);
        setEvent(data);
      } catch (error) {
        setErrorMessage(getApiErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [eventId]);

  if (loading) {
    return <LoadingSpinner label="Loading event details..." />;
  }

  if (!event) {
    return <MessageAlert message={errorMessage || "Event not found."} type="error" />;
  }

  return (
    <section className="page-section">
      <div className="hero-card">
        <p className="eyebrow">Event Details</p>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <div className="details-grid">
          <div className="detail-item">
            <strong>Date</strong>
            <span>{event.date}</span>
          </div>
          <div className="detail-item">
            <strong>Time</strong>
            <span>{event.time}</span>
          </div>
          <div className="detail-item">
            <strong>Venue</strong>
            <span>{event.venue}</span>
          </div>
          <div className="detail-item">
            <strong>Organizer</strong>
            <span>{event.organizer}</span>
          </div>
          <div className="detail-item">
            <strong>Available Seats</strong>
            <span>{event.availableSeats}</span>
          </div>
          <div className="detail-item">
            <strong>Total Registrations</strong>
            <span>{event.registrationCount}</span>
          </div>
        </div>
        <Link className="button" to={`/events/${event.id}/register`}>
          Register for This Event
        </Link>
      </div>
    </section>
  );
}

export default EventDetailsPage;
