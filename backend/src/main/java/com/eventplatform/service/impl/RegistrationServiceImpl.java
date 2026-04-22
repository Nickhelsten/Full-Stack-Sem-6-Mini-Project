package com.eventplatform.service.impl;

import com.eventplatform.dto.RegistrationRequestDto;
import com.eventplatform.dto.RegistrationResponseDto;
import com.eventplatform.entity.Event;
import com.eventplatform.entity.Registration;
import com.eventplatform.exception.BadRequestException;
import com.eventplatform.exception.ResourceNotFoundException;
import com.eventplatform.repository.EventRepository;
import com.eventplatform.repository.RegistrationRepository;
import com.eventplatform.service.RegistrationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private final RegistrationRepository registrationRepository;
    private final EventRepository eventRepository;

    public RegistrationServiceImpl(RegistrationRepository registrationRepository, EventRepository eventRepository) {
        this.registrationRepository = registrationRepository;
        this.eventRepository = eventRepository;
    }

    @Override
    public RegistrationResponseDto registerForEvent(Long eventId, RegistrationRequestDto requestDto) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + eventId));

        long currentRegistrations = registrationRepository.countByEventId(eventId);
        if (currentRegistrations >= event.getAvailableSeats()) {
            throw new BadRequestException("No seats are available for this event");
        }

        Registration registration = new Registration();
        registration.setParticipantName(requestDto.getParticipantName());
        registration.setEmail(requestDto.getEmail());
        registration.setPhone(requestDto.getPhone());
        registration.setCollegeOrCompany(requestDto.getCollegeOrCompany());
        registration.setEvent(event);

        return mapToResponseDto(registrationRepository.save(registration));
    }

    @Override
    public List<RegistrationResponseDto> getRegistrationsByEvent(Long eventId) {
        if (!eventRepository.existsById(eventId)) {
            throw new ResourceNotFoundException("Event not found with id: " + eventId);
        }

        return registrationRepository.findByEventIdOrderByIdDesc(eventId)
                .stream()
                .map(this::mapToResponseDto)
                .toList();
    }

    private RegistrationResponseDto mapToResponseDto(Registration registration) {
        return new RegistrationResponseDto(
                registration.getId(),
                registration.getParticipantName(),
                registration.getEmail(),
                registration.getPhone(),
                registration.getCollegeOrCompany(),
                registration.getEvent().getId(),
                registration.getEvent().getTitle()
        );
    }
}
