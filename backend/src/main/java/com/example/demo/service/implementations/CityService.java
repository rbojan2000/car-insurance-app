package com.example.demo.service.implementations;

import com.example.demo.model.City;
import com.example.demo.model.Country;
import com.example.demo.repository.CityRepository;
import com.example.demo.repository.CountryRepository;
import com.example.demo.service.interfaces.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CityService implements ICityService {
    @Autowired
    private CityRepository cityRepository;
    @Autowired
    private ZipService zipService;
    @Autowired
    private AddressService addressService;
    @Override
    public City create(City city) {
        return this.cityRepository.save(city);
    }

    @Override
    public City update(City city) {
        return this.cityRepository.save(city);
    }

    @Override
    public City delete(long id) {
        City cityToDelete = this.cityRepository.findById(id).get();
        cityToDelete.setIsDeleted(true);
        this.zipService.deleteByCity(id);
        this.addressService.deleteByCity(id);
        return this.cityRepository.save(cityToDelete);
    }

    @Override
    public List<City> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.cityRepository.findAll(pageable).toList();
    }

    @Override
    public City getById(long id) {
        return this.cityRepository.findById(id).get();
    }

    @Override
    public int findNumberOfCities() {
        return this.cityRepository.findByIsDeletedFalse().size();
    }
    @Override
    public void deleteByCountry(Long id){
        this.cityRepository.deleteByCountry(id);
    }
}
