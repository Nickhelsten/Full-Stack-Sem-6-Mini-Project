package com.eventplatform.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "registrations")
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String participantName;

    @Column(nullable = false, length = 120)
    private String email;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(nullable = false, length = 150)
    private String collegeOrCompany;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    public Registration() {
    }

    public Registration(Long id, String participantName, String email, String phone,
                        String collegeOrCompany, Event event) {
        this.id = id;
        this.participantName = participantName;
        this.email = email;
        this.phone = phone;
        this.collegeOrCompany = collegeOrCompany;
        this.event = event;
    }

    public Long getId() {
        return id;
    }

    public String getParticipantName() {
        return participantName;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCollegeOrCompany() {
        return collegeOrCompany;
    }

    public void setCollegeOrCompany(String collegeOrCompany) {
        this.collegeOrCompany = collegeOrCompany;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
