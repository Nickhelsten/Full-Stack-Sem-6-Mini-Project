package com.eventplatform.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class EventResponseDto {

    private Long id;
    private String title;
    private String description;
    private LocalDate date;
    private LocalTime time;
    private String venue;
    private String organizer;
    private Integer availableSeats;
    private Long registrationCount;

    public EventResponseDto() {
    }

    public EventResponseDto(Long id, String title, String description, LocalDate date, LocalTime time,
                            String venue, String organizer, Integer availableSeats, Long registrationCount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
        this.venue = venue;
        this.organizer = organizer;
        this.availableSeats = availableSeats;
        this.registrationCount = registrationCount;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDate() {
        return date;
    }

    public LocalTime getTime() {
        return time;
    }

    public String getVenue() {
        return venue;
    }

    public String getOrganizer() {
        return organizer;
    }

    public Integer getAvailableSeats() {
        return availableSeats;
    }

    public Long getRegistrationCount() {
        return registrationCount;
    }
}
