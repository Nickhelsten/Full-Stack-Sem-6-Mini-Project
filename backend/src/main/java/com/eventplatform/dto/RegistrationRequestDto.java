package com.eventplatform.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class RegistrationRequestDto {

    @NotBlank(message = "Participant name is required")
    @Size(max = 120, message = "Participant name must not exceed 120 characters")
    private String participantName;

    @NotBlank(message = "Email is required")
    @Email(message = "Enter a valid email address")
    private String email;

    @NotBlank(message = "Phone is required")
    @Pattern(regexp = "^[0-9]{10,15}$", message = "Phone must contain 10 to 15 digits")
    private String phone;

    @NotBlank(message = "College or company is required")
    @Size(max = 150, message = "College or company must not exceed 150 characters")
    private String collegeOrCompany;

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
}
