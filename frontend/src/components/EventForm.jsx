import { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  time: "",
  venue: "",
  organizer: "",
  availableSeats: "",
};

function EventForm({ initialValues, onSubmit, loading, submitLabel }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setFormData({
        title: initialValues.title || "",
        description: initialValues.description || "",
        date: initialValues.date || "",
        time: initialValues.time || "",
        venue: initialValues.venue || "",
        organizer: initialValues.organizer || "",
        availableSeats: initialValues.availableSeats || "",
      });
    }
  }, [initialValues]);

  const validate = () => {
    const nextErrors = {};

    if (!formData.title.trim()) nextErrors.title = "Title is required.";
    if (!formData.description.trim()) nextErrors.description = "Description is required.";
    if (!formData.date) nextErrors.date = "Date is required.";
    if (!formData.time) nextErrors.time = "Time is required.";
    if (!formData.venue.trim()) nextErrors.venue = "Venue is required.";
    if (!formData.organizer.trim()) nextErrors.organizer = "Organizer is required.";
    if (!formData.availableSeats) {
      nextErrors.availableSeats = "Available seats is required.";
    } else if (Number(formData.availableSeats) < 1) {
      nextErrors.availableSeats = "Available seats must be at least 1.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit({
      ...formData,
      availableSeats: Number(formData.availableSeats),
    });
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field form-field--full">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={formData.title} onChange={handleChange} />
          {errors.title ? <small className="field-error">{errors.title}</small> : null}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description ? <small className="field-error">{errors.description}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
          {errors.date ? <small className="field-error">{errors.date}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="time">Time</label>
          <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} />
          {errors.time ? <small className="field-error">{errors.time}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="venue">Venue</label>
          <input id="venue" name="venue" value={formData.venue} onChange={handleChange} />
          {errors.venue ? <small className="field-error">{errors.venue}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="organizer">Organizer</label>
          <input id="organizer" name="organizer" value={formData.organizer} onChange={handleChange} />
          {errors.organizer ? <small className="field-error">{errors.organizer}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="availableSeats">Available Seats</label>
          <input
            id="availableSeats"
            name="availableSeats"
            type="number"
            min="1"
            value={formData.availableSeats}
            onChange={handleChange}
          />
          {errors.availableSeats ? <small className="field-error">{errors.availableSeats}</small> : null}
        </div>
      </div>

      <button className="button" disabled={loading} type="submit">
        {loading ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}

export default EventForm;
