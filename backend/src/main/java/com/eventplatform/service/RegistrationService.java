package com.eventplatform.service;

import com.eventplatform.dto.RegistrationRequestDto;
import com.eventplatform.dto.RegistrationResponseDto;

import java.util.List;

public interface RegistrationService {

    RegistrationResponseDto registerForEvent(Long eventId, RegistrationRequestDto requestDto);

    List<RegistrationResponseDto> getRegistrationsByEvent(Long eventId);
}
