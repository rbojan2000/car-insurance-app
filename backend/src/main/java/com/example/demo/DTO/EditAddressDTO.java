package com.example.demo.DTO;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@NoArgsConstructor
public class EditAddressDTO {
    public List<CityDTO> cities = new ArrayList<>();
    public List<CountryDTO> countries = new ArrayList<>();
    public List<ZipDTO> zips = new ArrayList<>();
    public List<AddressDTO> addresses = new ArrayList<>();

}
