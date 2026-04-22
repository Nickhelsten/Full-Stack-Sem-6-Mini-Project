package com.eventplatform.controller;

import com.eventplatform.dto.EventResponseDto;
import com.eventplatform.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<EventResponseDto> getUpcomingEvents() {
        return eventService.getUpcomingEvents();
    }

    @GetMapping("/{eventId}")
    public EventResponseDto getEventById(@PathVariable Long eventId) {
        return eventService.getEventById(eventId);
    }
}
