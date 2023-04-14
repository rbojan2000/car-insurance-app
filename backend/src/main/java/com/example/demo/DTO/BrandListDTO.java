package com.example.demo.DTO;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class BrandListDTO {
    public int count;
    public List<BrandDTO> brands;
}
