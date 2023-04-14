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
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String street;
    @Column
    private String streetNumber;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zip_id", nullable = false)
    private Zip zip;
    @OneToMany(mappedBy = "address")
    private List<Person> person;
    @Column(nullable = false)
    private Boolean isDeleted;
}
