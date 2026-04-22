# Online Event Registration Platform

Full-stack college project built with:

- Frontend: React + Axios
- Backend: Spring Boot REST API
- Database: H2 (in-memory, for easy localhost demo)

## Project Structure

- `backend` - Spring Boot application
- `frontend` - React application using Vite

## Backend Highlights

- Event and registration management
- Validation on request DTOs
- Service and repository layers
- Exception handling
- CORS enabled for React frontend
- Sample data seeding on startup
- H2 console enabled for database viewing

## Frontend Highlights

- Event listing home page
- Event details page
- Registration form page
- Admin dashboard
- Create and edit event pages
- Registrations list page

## How Frontend Connects to Backend

The frontend uses Axios with base URL:

`http://localhost:8080/api`

The backend allows requests from:

`http://localhost:5173`

## Database Setup

The current runnable project uses H2 in-memory database so no separate database installation is required.

H2 Console:

`http://localhost:8080/h2-console`

H2 settings:

- JDBC URL: `jdbc:h2:mem:event_registration_db`
- Username: `sa`
- Password: leave blank

Note:

- The original project structure also includes MySQL schema files for submission/reference.
- If needed later, the backend can be switched back to MySQL by changing `application.properties`.

## Sample REST API Endpoints

- `GET /api/events`
- `GET /api/events/{id}`
- `POST /api/registrations`
- `POST /api/events/{id}/registrations`
- `GET /api/admin/events`
- `POST /api/admin/events`
- `PUT /api/admin/events/{id}`
- `DELETE /api/admin/events/{id}`
- `GET /api/admin/events/{id}/registrations`

## Run Commands

Backend:

```bash
cd backend
mvn spring-boot:run
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Submission Note

This project is configured with H2 for easier demonstration on localhost. The API design, entities, and schema are still compatible with a MySQL-based version for final project explanation or future extension.
