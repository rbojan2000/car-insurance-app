package com.example.demo.model;

import com.example.demo.model.enums.ProposalStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "proposal")
public class Proposal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private Boolean isValid;
    @Column
    private LocalDateTime creationDate;
    @Enumerated(EnumType.STRING)
    @Column(name="proposal_status")
    private ProposalStatus proposalStatus;
    @Column
    private Double amount;
    @Column
    private String licenceNum;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "insurance_plan_id")
    private InsurancePlan insurancePlan;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subscriber_id")
    @JsonIgnore
    private Subscriber subscriber;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id", referencedColumnName = "id")
    private Car car;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "policy_id", referencedColumnName = "id")
    private Policy policy;
    @Column(nullable = false)
    private Boolean isDeleted;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "drivers_proposals",
            joinColumns = {
                    @JoinColumn(name = "proposal_id", referencedColumnName = "id",
                            nullable = false, updatable = false)},
            inverseJoinColumns = {
                    @JoinColumn(name = "driver_id", referencedColumnName = "id",
                            nullable = false, updatable = false)})
    private List<Driver> drivers;
    public void calculateAmount(){}
}
