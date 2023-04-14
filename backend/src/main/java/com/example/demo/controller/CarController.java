package com.example.demo.controller;

import com.example.demo.DTO.CarDTO;
import com.example.demo.DTO.CarListDTO;
import com.example.demo.DTO.EditCarDTO;
import com.example.demo.mapper.BrandMapper;
import com.example.demo.mapper.CarMapper;
import com.example.demo.mapper.ModelMapper;
import com.example.demo.model.Car;
import com.example.demo.service.implementations.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin
public class CarController {

    @Autowired
    private CarService carService;

    @Autowired
    private CarMapper carMapper;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private BrandMapper brandMapper;

    @GetMapping
    public ResponseEntity<CarListDTO> getAllCars(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<CarDTO> cars = carMapper.ToDTO(carService.getAll(pageIndex,pageSize));
        int count = carService.findNumberOfCars();
        return new ResponseEntity<>( new CarListDTO(count, cars), HttpStatus.OK);
    }

    @GetMapping(path = "search")
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<CarListDTO> getAllSearchedCars(@RequestParam("pageSize") int pageSize, @RequestParam("search") String search){
        List<CarDTO> cars = carMapper.ToDTO(carService.getAllWithSearch(pageSize, search));
        int count = carService.getCountOfAllBySearch(search);
        return new ResponseEntity<>( new CarListDTO(count, cars), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createCar(@RequestBody CarDTO carDTO){
        this.carService.create(carMapper.ToModel(carDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editCar(@RequestBody CarDTO carDTO){
        this.carService.update(carMapper.ToModel(carDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteCar(@RequestParam("id") long id){
        this.carService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping(value = "data")
    public ResponseEntity<?> getCarData(@RequestParam("brand") Long brand){
        EditCarDTO editCarDTO = new EditCarDTO();
        editCarDTO.brands = this.brandMapper.ToDTO(this.carService.getBrands(1, Integer.MAX_VALUE));
        if(brand != 0){
            editCarDTO.models = this.modelMapper.ToDTO(this.carService.getModels(brand));
        }
        return new ResponseEntity<>(editCarDTO, HttpStatus.OK);
    }
}
