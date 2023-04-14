package com.example.demo.controller;

import com.example.demo.DTO.*;
import com.example.demo.mapper.AddressMapper;
import com.example.demo.mapper.CityMapper;
import com.example.demo.mapper.CountryMapper;
import com.example.demo.mapper.ZipMapper;
import com.example.demo.service.implementations.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addresses")
@CrossOrigin
public class AddressController {
    @Autowired
    private AddressService addressService;
    @Autowired
    private AddressMapper addressMapper;
    @Autowired
    private ZipMapper zipMapper;
    @Autowired
    private CityMapper cityMapper;
    @Autowired
    private CountryMapper countryMapper;

    @GetMapping
    public ResponseEntity<AddressListDTO> getAllAddresses(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<AddressDTO> proposals = addressMapper.ToDTO(addressService.getAll(pageIndex,pageSize));
        int count = addressService.findNumberOfAddresses();
        return new ResponseEntity<>(new AddressListDTO(count, proposals), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createAddress(@RequestBody AddressDTO addressDTO){
        this.addressService.create(addressMapper.ToModel(addressDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editAddress(@RequestBody AddressDTO addressDTO){
        this.addressService.update(addressMapper.ToModel(addressDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteAddress(@RequestParam("id") long id){
        this.addressService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping(value = "data")
    public ResponseEntity<?> getAddressData(@RequestParam("country") Long country, @RequestParam("city") Long city){
        EditAddressDTO editAddressDTO = new EditAddressDTO();
        editAddressDTO.countries = this.countryMapper.ToDTO(this.addressService.getCountries(1, Integer.MAX_VALUE));
        if(country != 0){
            editAddressDTO.cities = this.cityMapper.ToDTO(this.addressService.getCities(country));
            if(city != 0 && this.addressService.getCity(city).getCountry().getId() == country) {
                editAddressDTO.zips = this.zipMapper.ToDTO(this.addressService.getZips(city));
                editAddressDTO.addresses = this.addressMapper.ToDTO(this.addressService.getByCity(city));
            }
        }
        return new ResponseEntity<>(editAddressDTO, HttpStatus.OK);
    }
}
