package com.example.demo.DTO;

import lombok.NoArgsConstructor;

import java.util.List;
@NoArgsConstructor
public class ProposalDTO {
    public Long id;
    public String creationDate;
    public String proposalStatus;
    public Double amount;
    public String licensePlate;
    public SubscriberDTO subscriber;
    public List<DriverDTO> pickedDrivers;
    public InsurancePlanDTO insurancePlan;
    public CarDTO car;

}
