package com.example.demo.model;


import com.example.demo.model.enums.Gender;
import com.example.demo.model.enums.MartialStatus;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Subscriber extends Person{
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subscriber_role_id")
    private SubscriberRole subscriberRole;
    @OneToMany(mappedBy = "subscriber")
    private List<Proposal> proposals;

}
