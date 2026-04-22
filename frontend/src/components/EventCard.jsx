import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <article className="card event-card">
      <div className="event-card__header">
        <span className="badge">{event.organizer}</span>
        <span className="seat-text">{event.availableSeats} seats</span>
      </div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <div className="event-meta">
        <span>{event.date}</span>
        <span>{event.time}</span>
      </div>
      <div className="event-meta">
        <span>{event.venue}</span>
        <span>{event.registrationCount} registered</span>
      </div>
      <div className="event-actions">
        <Link className="button button-secondary" to={`/events/${event.id}`}>
          View Details
        </Link>
        <Link className="button" to={`/events/${event.id}/register`}>
          Register
        </Link>
      </div>
    </article>
  );
}

export default EventCard;
