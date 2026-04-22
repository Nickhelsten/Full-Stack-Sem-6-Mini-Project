USE event_registration_db;

INSERT INTO events (title, description, date, time, venue, organizer, available_seats)
VALUES
('Tech Innovation Workshop', 'A practical workshop on software tools, project ideas, and innovation for students.', '2026-04-08', '10:00:00', 'Seminar Hall A', 'Computer Science Department', 120),
('Startup Networking Meetup', 'A networking session for students, founders, and small business owners.', '2026-04-13', '15:30:00', 'Business Center Auditorium', 'Entrepreneurship Cell', 80),
('Career Guidance Seminar', 'An expert-led seminar covering resume building, interviews, and career planning.', '2026-04-19', '11:15:00', 'Conference Room 2', 'Placement Office', 150);

INSERT INTO registrations (participant_name, email, phone, college_or_company, event_id)
VALUES
('Rahul Mehta', 'rahul@example.com', '9876543210', 'ABC College', 1),
('Sneha Verma', 'sneha@example.com', '9876501234', 'XYZ Solutions', 2);
