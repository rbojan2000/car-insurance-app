package com.example.demo.DTO;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@NoArgsConstructor
public class EditCarDTO {
    public List<BrandDTO> brands = new ArrayList<>();
    public List<ModelDTO> models = new ArrayList<>();
    public List<CarDTO> cars = new ArrayList<>();
}
