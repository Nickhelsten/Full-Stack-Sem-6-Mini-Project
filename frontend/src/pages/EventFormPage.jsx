import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEvent, getApiErrorMessage, getEventById, updateEvent } from "../api/eventApi";
import EventForm from "../components/EventForm";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageAlert from "../components/MessageAlert";

function EventFormPage({ mode }) {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(mode === "edit");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (mode !== "edit") {
      return;
    }

    const loadEvent = async () => {
      try {
        const data = await getEventById(eventId);
        setInitialValues(data);
      } catch (error) {
        setErrorMessage(getApiErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [eventId, mode]);

  const handleSubmit = async (formData) => {
    try {
      setSubmitting(true);
      setErrorMessage("");

      if (mode === "edit") {
        await updateEvent(eventId, formData);
      } else {
        await createEvent(formData);
      }

      navigate("/admin");
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading event form..." />;
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Admin Panel</p>
          <h1>{mode === "edit" ? "Edit Event" : "Create Event"}</h1>
          <p>Fill in the event information carefully before saving.</p>
        </div>
      </div>

      <MessageAlert message={errorMessage} type="error" />
      <EventForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={submitting}
        submitLabel={mode === "edit" ? "Update Event" : "Create Event"}
      />
    </section>
  );
}

export default EventFormPage;
