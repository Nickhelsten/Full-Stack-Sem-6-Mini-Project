# Backend

Spring Boot REST API for the Online Event Registration Platform.

## Main Features

- View all upcoming events
- View event details
- Register participants for events
- Admin create, update, and delete events
- Admin view registrations for each event
- Backend validation and exception handling

## Database

The current runnable setup uses H2 in-memory database.

H2 console:

`http://localhost:8080/h2-console`

Settings:

- JDBC URL: `jdbc:h2:mem:event_registration_db`
- Username: `sa`
- Password: leave blank

## Run

```bash
cd /Users/nikunjgaur/Downloads/projectfs/backend
mvn spring-boot:run
```
