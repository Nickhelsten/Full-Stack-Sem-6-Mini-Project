function RegistrationTable({ registrations }) {
  if (!registrations.length) {
    return <div className="card empty-state">No registrations found for this event yet.</div>;
  }

  return (
    <div className="card table-card">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>College / Company</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration.id}>
                <td>{registration.participantName}</td>
                <td>{registration.email}</td>
                <td>{registration.phone}</td>
                <td>{registration.collegeOrCompany}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegistrationTable;
