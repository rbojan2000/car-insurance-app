package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class SubscriberListDTO {
    public int count;
    public List<SubscriberDTO> subscribers;

}
