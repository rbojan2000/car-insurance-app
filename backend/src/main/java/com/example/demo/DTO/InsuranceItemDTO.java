package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class InsuranceItemDTO {
    public long id;

    public String name;

    public boolean isOptional;

    public int franchisePercentage;
    public double amount;

}
