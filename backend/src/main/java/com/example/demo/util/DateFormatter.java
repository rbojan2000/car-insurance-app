package com.example.demo.util;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class DateFormatter {

    public static DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
    public static DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");


    public static LocalDateTime convertStringToLocalDateTime(String stringDate) {
        return LocalDateTime.parse(stringDate, dateTimeFormatter);

    }
    public static LocalDateTime convertStringToLocalDate(String stringDate) {
        LocalDate ld = LocalDate.parse(stringDate, dateFormatter);
        return ld.atStartOfDay();
    }
}
