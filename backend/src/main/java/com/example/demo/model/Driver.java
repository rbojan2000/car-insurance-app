package com.example.demo.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "driver")
public class Driver extends Person{
    @Column
    private String licenceNum;
    @Column
    private String licenceObtained;
    @Column
    private Integer yearsInsured;
    @OneToMany(mappedBy = "driver")
    private List<AccidentHistory> accidentHistories;
    @ManyToMany(mappedBy = "drivers", fetch = FetchType.LAZY)
    private List<Proposal> proposals;
    @ManyToMany(mappedBy = "driversRisk", fetch = FetchType.LAZY)
    private List<Risk> risks;

}
