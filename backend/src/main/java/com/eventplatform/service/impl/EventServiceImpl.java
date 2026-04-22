package com.eventplatform.service.impl;

import com.eventplatform.dto.EventRequestDto;
import com.eventplatform.dto.EventResponseDto;
import com.eventplatform.entity.Event;
import com.eventplatform.exception.ResourceNotFoundException;
import com.eventplatform.repository.EventRepository;
import com.eventplatform.repository.RegistrationRepository;
import com.eventplatform.service.EventService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;
    private final RegistrationRepository registrationRepository;

    public EventServiceImpl(EventRepository eventRepository, RegistrationRepository registrationRepository) {
        this.eventRepository = eventRepository;
        this.registrationRepository = registrationRepository;
    }

    @Override
    public List<EventResponseDto> getUpcomingEvents() {
        return eventRepository.findByDateGreaterThanEqualOrderByDateAscTimeAsc(LocalDate.now())
                .stream()
                .map(this::mapToResponseDto)
                .toList();
    }

    @Override
    public EventResponseDto getEventById(Long eventId) {
        return mapToResponseDto(findEventById(eventId));
    }

    @Override
    public List<EventResponseDto> getAllEventsForAdmin() {
        return eventRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(Event::getDate).thenComparing(Event::getTime))
                .map(this::mapToResponseDto)
                .toList();
    }

    @Override
    public EventResponseDto createEvent(EventRequestDto requestDto) {
        Event event = new Event();
        updateEventFields(event, requestDto);
        return mapToResponseDto(eventRepository.save(event));
    }

    @Override
    public EventResponseDto updateEvent(Long eventId, EventRequestDto requestDto) {
        Event event = findEventById(eventId);
        updateEventFields(event, requestDto);
        return mapToResponseDto(eventRepository.save(event));
    }

    @Override
    public void deleteEvent(Long eventId) {
        eventRepository.delete(findEventById(eventId));
    }

    private Event findEventById(Long eventId) {
        return eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + eventId));
    }

    private void updateEventFields(Event event, EventRequestDto requestDto) {
        event.setTitle(requestDto.getTitle());
        event.setDescription(requestDto.getDescription());
        event.setDate(requestDto.getDate());
        event.setTime(requestDto.getTime());
        event.setVenue(requestDto.getVenue());
        event.setOrganizer(requestDto.getOrganizer());
        event.setAvailableSeats(requestDto.getAvailableSeats());
    }

    private EventResponseDto mapToResponseDto(Event event) {
        return new EventResponseDto(
                event.getId(),
                event.getTitle(),
                event.getDescription(),
                event.getDate(),
                event.getTime(),
                event.getVenue(),
                event.getOrganizer(),
                event.getAvailableSeats(),
                registrationRepository.countByEventId(event.getId())
        );
    }
}
