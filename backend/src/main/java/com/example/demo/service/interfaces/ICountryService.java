package com.example.demo.service.interfaces;

import com.example.demo.model.Country;

public interface ICountryService extends ICRUDService<Country>{
    int findNumberOfCountries();
}
