package com.example.demo.service.implementations;

import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import com.example.demo.service.interfaces.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CountryService implements ICountryService {
    @Autowired
    private CountryRepository countryRepository;
    @Autowired
    private CityService cityService;
    @Autowired
    private ZipService zipService;
    @Autowired
    private AddressService addressService;
    @Override
    public Country create(Country country) {
        return this.countryRepository.save(country);
    }

    @Override
    public Country update(Country country) {
        return this.countryRepository.save(country);
    }

    @Override
    public Country delete(long id) {
        Country countryToDelete = this.countryRepository.findById(id).get();
        countryToDelete.setIsDeleted(true);
        this.cityService.deleteByCountry(id);
        this.zipService.deleteByCountry(id);
        this.addressService.deleteByCountry(id);
        return this.countryRepository.save(countryToDelete);
    }

    @Override
    public List<Country> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.countryRepository.findAll(pageable).toList();
    }

    @Override
    public Country getById(long id) {
        return this.countryRepository.findById(id).get();
    }

    @Override
    public int findNumberOfCountries() {
        return this.countryRepository.findByIsDeletedFalse().size();
    }
}
