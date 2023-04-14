package com.example.demo.mapper;

import com.example.demo.DTO.PaymentDTO;
import com.example.demo.model.*;
import com.example.demo.util.DateFormatter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class PaymentMapper implements IMapper<Payment, PaymentDTO>{
    @Override
    public Payment ToModel(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        PaymentMode paymentMode = new PaymentMode();
        paymentMode.setName(paymentDTO.paymentMode);
        paymentMode.setIsDeleted(false);
        payment.setPaymentMode(paymentMode);
        setPaymentByPaymentMode(payment, paymentDTO);
        payment.setIsDeleted(false);
        return payment;
    }

    @Override
    public List<Payment> ToModel(List<PaymentDTO> dto) {
        List<Payment> payments = new ArrayList<>();
        for(PaymentDTO paymentDTO : dto){
            payments.add(ToModel(paymentDTO));
        }
        return payments;
    }

    @Override
    public PaymentDTO ToDTO(Payment payment) {
        return null;
    }

    @Override
    public List<PaymentDTO> ToDTO(List<Payment> model) {
        return null;
    }
    private void setPaymentByPaymentMode(Payment payment, PaymentDTO paymentDTO){
        if(paymentDTO.paymentMode.equals("CardPayment")){
            CardPayment cardPayment = new CardPayment();
            cardPayment.setCardHolder(paymentDTO.cardHolder);
            cardPayment.setCardNumber(paymentDTO.cardNumber);
            CardType cardType = new CardType();
            cardType.setIsDeleted(false);
            cardPayment.setCardType(cardType);
            cardPayment.setIsDeleted(false);
            payment.setCardPayment(cardPayment);
        }else if(paymentDTO.paymentMode.equals("BankPayment")){
            BankPayment bankPayment = new BankPayment();
            bankPayment.setBankName(paymentDTO.bankName);
            bankPayment.setTransactionNo(paymentDTO.transactionNumber);
            bankPayment.setIsDeleted(false);
            payment.setBankPayment(bankPayment);
        }else{
            ChequePayment chequePayment = new ChequePayment();
            chequePayment.setChequeDate(DateFormatter.convertStringToLocalDateTime(paymentDTO.chequeDate));
            chequePayment.setChequeNo(paymentDTO.chequeNumber);
            chequePayment.setIsDeleted(false);
            payment.setChequePayment(chequePayment);
        }
    }
}
