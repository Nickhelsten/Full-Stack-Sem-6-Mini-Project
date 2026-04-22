package com.eventplatform.service;

import com.eventplatform.dto.EventRequestDto;
import com.eventplatform.dto.EventResponseDto;

import java.util.List;

public interface EventService {

    List<EventResponseDto> getUpcomingEvents();

    EventResponseDto getEventById(Long eventId);

    List<EventResponseDto> getAllEventsForAdmin();

    EventResponseDto createEvent(EventRequestDto requestDto);

    EventResponseDto updateEvent(Long eventId, EventRequestDto requestDto);

    void deleteEvent(Long eventId);
}
