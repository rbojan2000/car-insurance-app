package com.example.demo.DTO;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class PaymentDTO {
    public long id;
    public String cardHolder;
    public String cardNumber;
    public String bankName;
    public String transactionNumber;
    public String chequeNumber;
    public String chequeDate;
    public String paymentMode;
}
