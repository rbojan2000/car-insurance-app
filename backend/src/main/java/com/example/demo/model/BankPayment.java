package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "bank_payment")
public class BankPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String bankName;
    @Column
    private String transactionNo;
    @OneToOne(mappedBy = "bankPayment")
    private Payment payment;
    @Column(nullable = false)
    private Boolean isDeleted;
}
