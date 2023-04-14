package com.example.demo.DTO;

import lombok.NoArgsConstructor;

import java.util.List;
@NoArgsConstructor
public class CountryDTO {
    public Long id;
    public String name;
    public List<CityDTO> cities;

}
