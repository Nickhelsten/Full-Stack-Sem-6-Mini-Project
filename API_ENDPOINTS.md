# Postman API Endpoints

Base URL: `http://localhost:8080/api`

Current database for local demo: `H2 in-memory`

H2 console URL: `http://localhost:8080/h2-console`

## Public Event APIs

### Get all events

`GET /events`

### Get event by ID

`GET /events/1`

## Registration APIs

### Register using common registration endpoint

`POST /registrations`

```json
{
  "participantName": "Aman Sharma",
  "email": "aman@example.com",
  "phone": "9876543210",
  "collegeOrCompany": "ABC College",
  "eventId": 1
}
```

### Register using event-specific endpoint

`POST /events/1/registrations`

```json
{
  "participantName": "Aman Sharma",
  "email": "aman@example.com",
  "phone": "9876543210",
  "collegeOrCompany": "ABC College",
  "eventId": 1
}
```

## Admin APIs

### Get all events for dashboard

`GET /admin/events`

### Create event

`POST /admin/events`

```json
{
  "title": "Business Growth Seminar",
  "description": "A seminar for students and small business owners on digital growth strategies.",
  "date": "2026-04-20",
  "time": "14:00:00",
  "venue": "Main Auditorium",
  "organizer": "Management Department",
  "availableSeats": 100
}
```

### Update event

`PUT /admin/events/1`

### Delete event

`DELETE /admin/events/1`

### View registrations for one event

`GET /admin/events/1/registrations`

## Notes

- No MySQL setup is required for the current local version.
- Sample events are inserted automatically when the backend starts.
