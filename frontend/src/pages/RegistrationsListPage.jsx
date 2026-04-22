import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApiErrorMessage, getEventById, getRegistrationsByEvent } from "../api/eventApi";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageAlert from "../components/MessageAlert";
import RegistrationTable from "../components/RegistrationTable";

function RegistrationsListPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [eventData, registrationData] = await Promise.all([
          getEventById(eventId),
          getRegistrationsByEvent(eventId),
        ]);
        setEvent(eventData);
        setRegistrations(registrationData);
      } catch (error) {
        setErrorMessage(getApiErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [eventId]);

  if (loading) {
    return <LoadingSpinner label="Loading registrations..." />;
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Admin Panel</p>
          <h1>Registrations</h1>
          <p>{event ? `Viewing registrations for ${event.title}` : "Event information unavailable."}</p>
        </div>
        <Link className="button button-secondary" to="/admin">
          Back to Dashboard
        </Link>
      </div>

      <MessageAlert message={errorMessage} type="error" />
      <RegistrationTable registrations={registrations} />
    </section>
  );
}

export default RegistrationsListPage;
