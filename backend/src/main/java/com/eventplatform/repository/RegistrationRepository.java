package com.eventplatform.repository;

import com.eventplatform.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    List<Registration> findByEventIdOrderByIdDesc(Long eventId);

    long countByEventId(Long eventId);
}
