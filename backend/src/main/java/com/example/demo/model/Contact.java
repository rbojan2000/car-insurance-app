package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Table(name = "contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String homePhone;
    @Column
    private String mobilePhone;
    @Column
    private String email;
    @OneToOne(mappedBy = "contact")
    private Person person;
    @Column(nullable = false)
    private Boolean isDeleted;
}
