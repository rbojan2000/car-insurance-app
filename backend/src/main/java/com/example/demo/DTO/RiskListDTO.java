package com.example.demo.DTO;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class RiskListDTO {
    public int count;
    public List<RiskDTO> risks;
}
