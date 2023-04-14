package com.example.demo.model;

import com.example.demo.model.enums.Gender;
import com.example.demo.model.enums.MartialStatus;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column(unique = true)
    private String jmbg;

    @Column
    private LocalDateTime birth;

    @Enumerated(EnumType.STRING)
    @Column(name="gender")
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(name="martial_status")
    private MartialStatus martialStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id")
    @JsonIgnore
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_id", referencedColumnName = "id")
    private Contact contact;

    @Column(nullable = false)
    private Boolean isDeleted;


}
