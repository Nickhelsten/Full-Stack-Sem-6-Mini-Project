import { useEffect, useState } from "react";
import { getApiErrorMessage, getUpcomingEvents } from "../api/eventApi";
import EventCard from "../components/EventCard";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageAlert from "../components/MessageAlert";

function HomePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getUpcomingEvents();
        setEvents(data);
      } catch (error) {
        setErrorMessage(getApiErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return <LoadingSpinner label="Loading upcoming events..." />;
  }

  return (
    <section className="page-section">
      <div className="hero-card hero-card--home">
        <p className="eyebrow">Online Event Registration Platform</p>
        <h1>Find and register for upcoming events with ease.</h1>
        <p>
          This project is built for colleges and small businesses to manage events and track
          registrations on localhost.
        </p>
      </div>

      <div className="section-header">
        <div>
          <p className="eyebrow">Upcoming Events</p>
          <h2>Available Events</h2>
        </div>
      </div>

      <MessageAlert message={errorMessage} type="error" />

      {!events.length ? (
        <div className="card empty-state">No upcoming events found.</div>
      ) : (
        <div className="event-grid">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
