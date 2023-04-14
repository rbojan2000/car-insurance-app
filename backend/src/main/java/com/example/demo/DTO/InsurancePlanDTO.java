package com.example.demo.DTO;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class InsurancePlanDTO {
    public long id;

    public String name;

    public boolean isPremium;

    public List<InsuranceItemDTO> insuranceItemsDTO;


}
