package com.example.demo.service.implementations;

import com.example.demo.model.Address;
import com.example.demo.model.City;
import com.example.demo.model.Country;
import com.example.demo.model.Zip;
import com.example.demo.repository.AddressRepository;
import com.example.demo.repository.CityRepository;
import com.example.demo.repository.CountryRepository;
import com.example.demo.repository.ZipRepository;
import com.example.demo.service.interfaces.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressService implements IAddressService {

    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private ZipRepository zipRepository;
    @Autowired
    private CityRepository cityRepository;
    @Autowired
    private CountryRepository countryRepository;


    @Override
    public Address create(Address address) {
        return this.addressRepository.save(address);
    }

    @Override
    public Address update(Address address) {
        return this.addressRepository.save(address);
    }

    @Override
    public Address delete(long id) {
        Address addressToDelete = this.addressRepository.findById(id).get();
        addressToDelete.setIsDeleted(true);
        return this.addressRepository.save(addressToDelete);
    }

    @Override
    public List<Address> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.addressRepository.findAll(pageable).toList();
    }

    @Override
    public Address getById(long id) {
        return this.addressRepository.findById(id).get();
    }
    @Override
    public int findNumberOfAddresses(){
        return this.addressRepository.findByIsDeletedFalse().size();
    }
    @Override
    public void deleteByCountry(Long id){
        for(Address address : this.addressRepository.findAll()){
            if(address.getZip().getCity().getCountry().getId() == id){
                address.setIsDeleted(true);
                this.addressRepository.save(address);
            }
        }
    }
    @Override
    public void deleteByCity(Long id){
        for(Address address : this.addressRepository.findAll()){
            if(address.getZip().getCity().getId() == id){
                address.setIsDeleted(true);
                this.addressRepository.save(address);
            }
        }
    }
    public List<Address> getByCity(Long id){
        List<Address> addresses = new ArrayList<>();
        for(Address address : this.addressRepository.findAll()){
            if(address.getZip().getCity().getId() == id){
                addresses.add(address);
            }
        }
        return addresses;
    }
    @Override
    public void deleteByZip(Long id){
        this.addressRepository.deleteByZip(id);
    }
    public City getCity(long id){
        return this.cityRepository.findById(id).get();
    }
    public List<Country> getCountries(int pageIndex, int pageSize){
        return this.countryRepository.findAll(PageRequest.of(pageIndex-1, pageSize)).toList();
    }
    public List<City> getCities(long id){
        return this.cityRepository.findByCountry(id);
    }
    public List<Zip> getZips(long id){
        return this.zipRepository.findByCity(id);
    }
}
