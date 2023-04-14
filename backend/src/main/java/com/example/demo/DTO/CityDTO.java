package com.example.demo.DTO;

import lombok.NoArgsConstructor;

import java.util.List;
@NoArgsConstructor
public class CityDTO {
    public Long id;
    public String name;
    public Long countryId;
    public String country;
    public List<ZipDTO> zips;

}
