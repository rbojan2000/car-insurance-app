package com.example.demo.mapper;

import com.example.demo.DTO.CityDTO;
import com.example.demo.DTO.CountryDTO;
import com.example.demo.model.City;
import com.example.demo.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CityMapper implements IMapper<City, CityDTO>{
    @Autowired
    private CountryMapper countryMapper;
    @Override
    public City ToModel(CityDTO cityDTO) {
        City city = new City();
        if(cityDTO.id != null)city.setId(cityDTO.id);
        city.setName(cityDTO.name);
        city.setZips(new ArrayList<>());
        CountryDTO countryDTO = new CountryDTO();
        countryDTO.id = cityDTO.countryId;
        city.setCountry(countryMapper.ToModel(countryDTO));
        city.setIsDeleted(false);
        return city;
    }

    @Override
    public List<City> ToModel(List<CityDTO> dto) {
        List<City> cities = new ArrayList<>();
        for(CityDTO cityDTO : dto){
            cities.add(ToModel(cityDTO));
        }
        return cities;
    }

    @Override
    public CityDTO ToDTO(City city) {
        CityDTO cityDTO = new CityDTO();
        cityDTO.id = city.getId();
        cityDTO.name = city.getName();
        cityDTO.countryId = city.getCountry().getId();
        cityDTO.country = city.getCountry().getName();
        return cityDTO;
    }

    @Override
    public List<CityDTO> ToDTO(List<City> model) {
        List<CityDTO> cityDTOS = new ArrayList<>();
        for(City city : model){
            cityDTOS.add(ToDTO(city));
        }
        return cityDTOS;
    }
}
