package com.example.demo.service.interfaces;

import com.example.demo.model.City;

import java.util.List;

public interface ICityService extends ICRUDService<City>{
    int findNumberOfCities();
    void deleteByCountry(Long id);
}
