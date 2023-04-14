package com.example.demo.DTO;

import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
public class ModelDTO {
    public Long id;
    public String name;
    public Long brandId;
    public String brand;
    public List<YearDTO> years;
}
