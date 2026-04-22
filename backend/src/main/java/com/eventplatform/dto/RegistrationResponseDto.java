package com.eventplatform.dto;

public class RegistrationResponseDto {

    private Long id;
    private String participantName;
    private String email;
    private String phone;
    private String collegeOrCompany;
    private Long eventId;
    private String eventTitle;

    public RegistrationResponseDto() {
    }

    public RegistrationResponseDto(Long id, String participantName, String email, String phone,
                                   String collegeOrCompany, Long eventId, String eventTitle) {
        this.id = id;
        this.participantName = participantName;
        this.email = email;
        this.phone = phone;
        this.collegeOrCompany = collegeOrCompany;
        this.eventId = eventId;
        this.eventTitle = eventTitle;
    }

    public Long getId() {
        return id;
    }

    public String getParticipantName() {
        return participantName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getCollegeOrCompany() {
        return collegeOrCompany;
    }

    public Long getEventId() {
        return eventId;
    }

    public String getEventTitle() {
        return eventTitle;
    }
}
