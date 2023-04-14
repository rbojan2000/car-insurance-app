package com.example.demo.controller;

import com.example.demo.DTO.CountryDTO;
import com.example.demo.DTO.CountryListDTO;
import com.example.demo.mapper.CountryMapper;
import com.example.demo.service.implementations.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin
public class CountryController {
    @Autowired
    private CountryService countryService;
    @Autowired
    private CountryMapper countryMapper;
    @GetMapping
    public ResponseEntity<CountryListDTO> getAllCountries(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<CountryDTO> countries = countryMapper.ToDTO(countryService.getAll(pageIndex,pageSize));
        int count = countryService.findNumberOfCountries();
        return new ResponseEntity<>(new CountryListDTO(count, countries), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createCountry(@RequestBody CountryDTO countryDTO){
        this.countryService.create(countryMapper.ToModel(countryDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editCountry(@RequestBody CountryDTO countryDTO){
        this.countryService.update(countryMapper.ToModel(countryDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteCountry(@RequestParam("id") long id){
        this.countryService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
