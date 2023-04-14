package com.example.demo.DTO;

import lombok.AllArgsConstructor;

import java.util.List;
@AllArgsConstructor
public class CountryListDTO {
    public int count;
    public List<CountryDTO> countries;

}
