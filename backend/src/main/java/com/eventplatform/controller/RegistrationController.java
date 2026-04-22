package com.eventplatform.controller;

import com.eventplatform.dto.RegistrationRequestDto;
import com.eventplatform.dto.RegistrationResponseDto;
import com.eventplatform.service.RegistrationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events/{eventId}/registrations")
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RegistrationResponseDto registerForEvent(
            @PathVariable Long eventId,
            @Valid @RequestBody RegistrationRequestDto requestDto
    ) {
        return registrationService.registerForEvent(eventId, requestDto);
    }
}
