package com.example.demo.controller;

import com.example.demo.DTO.CityDTO;
import com.example.demo.DTO.CityListDTO;
import com.example.demo.mapper.CityMapper;
import com.example.demo.mapper.CountryMapper;
import com.example.demo.service.implementations.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@CrossOrigin
public class CityController {
    @Autowired
    private CityService cityService;
    @Autowired
    private CityMapper cityMapper;

    @GetMapping
    public ResponseEntity<CityListDTO> getAllCities(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<CityDTO> cities = cityMapper.ToDTO(cityService.getAll(pageIndex,pageSize));
        int count = cityService.findNumberOfCities();
        return new ResponseEntity<>(new CityListDTO(count, cities), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createCity(@RequestBody CityDTO cityDTO){
        this.cityService.create(cityMapper.ToModel(cityDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editCity(@RequestBody CityDTO cityDTO){
        this.cityService.update(cityMapper.ToModel(cityDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteCity(@RequestParam("id") long id){
        this.cityService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
