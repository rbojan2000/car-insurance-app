package com.example.demo.service.interfaces;

import com.example.demo.model.Brand;

public interface IBrandService extends ICRUDService<Brand>{
    int findNumberOfBrands();
}
