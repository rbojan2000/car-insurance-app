package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "insurance_plan")
public class InsurancePlan {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String name;
    @Column
    private Boolean isPremium;
    @OneToMany(mappedBy = "insurancePlan")
    private List<Proposal> proposals;
    @ManyToMany(mappedBy = "insurancePlans", fetch = FetchType.LAZY)
    private List<InsuranceItem> insuranceItems;
    @Column(nullable = false)
    private Boolean isDeleted;
}
