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
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_mode_id")
    private PaymentMode paymentMode;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cheque_payment_id")
    private ChequePayment chequePayment;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "card_payment_id")
    private CardPayment cardPayment;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bank_payment_id")
    private BankPayment bankPayment;
    @OneToOne(mappedBy = "payment")
    private Policy policy;
    @Column(nullable = false)
    private Boolean isDeleted;
}
