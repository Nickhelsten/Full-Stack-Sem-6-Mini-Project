import { useState } from "react";

const emptyForm = {
  participantName: "",
  email: "",
  phone: "",
  collegeOrCompany: "",
};

function RegistrationForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    if (!formData.participantName.trim()) nextErrors.participantName = "Participant name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone is required.";
    } else if (!phonePattern.test(formData.phone)) {
      nextErrors.phone = "Phone must contain 10 to 15 digits.";
    }
    if (!formData.collegeOrCompany.trim()) {
      nextErrors.collegeOrCompany = "College or company is required.";
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

    onSubmit(formData);
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="participantName">Participant Name</label>
          <input
            id="participantName"
            name="participantName"
            value={formData.participantName}
            onChange={handleChange}
          />
          {errors.participantName ? <small className="field-error">{errors.participantName}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email ? <small className="field-error">{errors.email}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone ? <small className="field-error">{errors.phone}</small> : null}
        </div>

        <div className="form-field">
          <label htmlFor="collegeOrCompany">College or Company</label>
          <input
            id="collegeOrCompany"
            name="collegeOrCompany"
            value={formData.collegeOrCompany}
            onChange={handleChange}
          />
          {errors.collegeOrCompany ? <small className="field-error">{errors.collegeOrCompany}</small> : null}
        </div>
      </div>

      <button className="button" disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit Registration"}
      </button>
    </form>
  );
}

export default RegistrationForm;
