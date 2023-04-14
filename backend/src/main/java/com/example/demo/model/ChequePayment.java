package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "cheque_payment")
public class ChequePayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String chequeNo;
    @Column
    private LocalDateTime chequeDate;
    @OneToOne(mappedBy = "chequePayment")
    private Payment payment;
    @Column(nullable = false)
    private Boolean isDeleted;
}
