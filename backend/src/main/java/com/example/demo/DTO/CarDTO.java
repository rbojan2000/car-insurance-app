package com.example.demo.DTO;

import com.example.demo.model.Model;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class CarDTO {

    public Long id;
    public int year;
    public Long modelId;
    public String model;
    public Long brandId;
    public String brand;

}
