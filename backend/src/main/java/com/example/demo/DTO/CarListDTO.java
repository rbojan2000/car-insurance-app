package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class CarListDTO {
    public int count;
    public List<CarDTO> cars;

}
