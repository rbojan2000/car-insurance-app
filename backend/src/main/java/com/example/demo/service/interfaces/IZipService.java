package com.example.demo.service.interfaces;

import com.example.demo.model.Zip;

import java.util.List;

public interface IZipService extends ICRUDService<Zip>{
    int findNumberOfZips();
    void deleteByCountry(Long id);
    void deleteByCity(Long id);
}
