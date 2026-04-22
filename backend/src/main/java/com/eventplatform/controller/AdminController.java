package com.eventplatform.controller;

import com.eventplatform.dto.ApiResponse;
import com.eventplatform.dto.EventRequestDto;
import com.eventplatform.dto.EventResponseDto;
import com.eventplatform.dto.RegistrationResponseDto;
import com.eventplatform.service.EventService;
import com.eventplatform.service.RegistrationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final EventService eventService;
    private final RegistrationService registrationService;

    public AdminController(EventService eventService, RegistrationService registrationService) {
        this.eventService = eventService;
        this.registrationService = registrationService;
    }

    @GetMapping("/events")
    public List<EventResponseDto> getAllEvents() {
        return eventService.getAllEventsForAdmin();
    }

    @PostMapping("/events")
    @ResponseStatus(HttpStatus.CREATED)
    public EventResponseDto createEvent(@Valid @RequestBody EventRequestDto requestDto) {
        return eventService.createEvent(requestDto);
    }

    @PutMapping("/events/{eventId}")
    public EventResponseDto updateEvent(@PathVariable Long eventId, @Valid @RequestBody EventRequestDto requestDto) {
        return eventService.updateEvent(eventId, requestDto);
    }

    @DeleteMapping("/events/{eventId}")
    public ApiResponse deleteEvent(@PathVariable Long eventId) {
        eventService.deleteEvent(eventId);
        return new ApiResponse(true, "Event deleted successfully.");
    }

    @GetMapping("/events/{eventId}/registrations")
    public List<RegistrationResponseDto> getRegistrationsByEvent(@PathVariable Long eventId) {
        return registrationService.getRegistrationsByEvent(eventId);
    }
}
