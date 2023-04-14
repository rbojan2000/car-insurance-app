package com.example.demo.service.interfaces;

import com.example.demo.model.Address;

public interface IAddressService extends ICRUDService<Address>{
    int findNumberOfAddresses();
    void deleteByZip(Long id);
    void deleteByCity(Long id);
    void deleteByCountry(Long id);
}
