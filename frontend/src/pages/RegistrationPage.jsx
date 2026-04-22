import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApiErrorMessage, getEventById, registerForEvent } from "../api/eventApi";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageAlert from "../components/MessageAlert";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
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

  const handleRegistration = async (formData) => {
    try {
      setSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");

      await registerForEvent(eventId, formData);
      setSuccessMessage("Registration submitted successfully.");
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading registration page..." />;
  }

  if (!event) {
    return <MessageAlert message={errorMessage || "Event not found."} type="error" />;
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Registration Form</p>
          <h1>{event.title}</h1>
          <p>
            {event.date} at {event.time} | {event.venue}
          </p>
        </div>
        <Link className="button button-secondary" to={`/events/${event.id}`}>
          Back to Details
        </Link>
      </div>

      <MessageAlert message={successMessage} type="success" />
      <MessageAlert message={errorMessage} type="error" />

      <RegistrationForm loading={submitting} onSubmit={handleRegistration} />
    </section>
  );
}

export default RegistrationPage;
