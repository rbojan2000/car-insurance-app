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
@Table(name = "insurance_item")
public class InsuranceItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String name;
    @Column
    private Boolean isOptional;
    @Column
    private Integer franchisePercentage;
    @Column
    private Double amount;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "insurance_items_insurance_plans",
            joinColumns = {
                    @JoinColumn(name = "insurance_item_id", referencedColumnName = "id",
                            nullable = false, updatable = false)},
            inverseJoinColumns = {
                    @JoinColumn(name = "insurance_plan_id", referencedColumnName = "id",
                            nullable = false, updatable = false)})
    private List<InsurancePlan> insurancePlans;
    @Column(nullable = false)
    private Boolean isDeleted;
}
