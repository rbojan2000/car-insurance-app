package com.example.demo.mapper;

import com.example.demo.DTO.CountryDTO;
import com.example.demo.model.Country;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class CountryMapper implements IMapper<Country, CountryDTO>{
    @Override
    public Country ToModel(CountryDTO countryDTO) {
        Country country = new Country();
        if(countryDTO.id != null)country.setId(countryDTO.id);
        country.setCities(new ArrayList<>());
        country.setName(countryDTO.name);
        country.setIsDeleted(false);
        return country;
    }

    @Override
    public List<Country> ToModel(List<CountryDTO> dto) {
        List<Country> countries = new ArrayList<>();
        for(CountryDTO countryDTO : dto){
            countries.add(ToModel(countryDTO));
        }
        return countries;
    }

    @Override
    public CountryDTO ToDTO(Country country) {
        CountryDTO countryDTO = new CountryDTO();
        countryDTO.id = country.getId();
        countryDTO.name = country.getName();
        return countryDTO;
    }

    @Override
    public List<CountryDTO> ToDTO(List<Country> model) {
        List<CountryDTO> countryDTOS = new ArrayList<>();
        for(Country country : model){
            countryDTOS.add(ToDTO(country));
        }
        return countryDTOS;
    }
}
