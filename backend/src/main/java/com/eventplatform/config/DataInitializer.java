package com.eventplatform.config;

import com.eventplatform.entity.Event;
import com.eventplatform.entity.Registration;
import com.eventplatform.repository.EventRepository;
import com.eventplatform.repository.RegistrationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner seedData(EventRepository eventRepository, RegistrationRepository registrationRepository) {
        return args -> {
            if (eventRepository.count() == 0) {
                Event techFest = new Event(null, "College Tech Fest 2026",
                        "A one-day event for coding contests, project demos, and technical workshops.",
                        LocalDate.now().plusDays(10), LocalTime.of(10, 0), "Main Auditorium",
                        "Department of Computer Science", 150);

                Event startupMeet = new Event(null, "Startup Networking Evening",
                        "A networking event for founders, students, and local business owners.",
                        LocalDate.now().plusDays(18), LocalTime.of(17, 30), "City Business Center",
                        "Innovation Club", 80);

                Event designBootcamp = new Event(null, "UI/UX Design Bootcamp",
                        "Hands-on workshop focused on design thinking, wireframes, and prototypes.",
                        LocalDate.now().plusDays(25), LocalTime.of(11, 0), "Seminar Hall B",
                        "Creative Design Cell", 60);

                List<Event> savedEvents = eventRepository.saveAll(List.of(techFest, startupMeet, designBootcamp));

                registrationRepository.save(new Registration(null, "Aarav Sharma", "aarav.sharma@example.com",
                        "9876543210", "ABC College", savedEvents.get(0)));
            }
        };
    }
}
