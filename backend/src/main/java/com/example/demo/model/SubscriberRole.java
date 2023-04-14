package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table(name = "subscriber_role")
public class SubscriberRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String name;
    @OneToMany(mappedBy = "subscriberRole")
    private List<Subscriber> subscribers;
    @Column(nullable = false)
    private Boolean isDeleted;
}
