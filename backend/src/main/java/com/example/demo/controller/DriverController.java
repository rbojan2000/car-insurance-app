package com.example.demo.controller;


import com.example.demo.DTO.DriverDTO;
import com.example.demo.DTO.DriverListDTO;
import com.example.demo.DTO.DriverRiskDTO;
import com.example.demo.DTO.RiskDTO;
import com.example.demo.mapper.DriverMapper;

import com.example.demo.service.implementations.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin
public class DriverController {


    @Autowired
    private DriverService driverService;

    @Autowired
    private DriverMapper driverMapper;


    @GetMapping
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<DriverListDTO> getAllDrivers(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){

        List<DriverDTO> drivers = driverMapper.ToDTO(driverService.getAll(pageIndex,pageSize));
        int count = driverService.getNumberOfDrivers();

        return new ResponseEntity<>( new DriverListDTO(count, drivers), HttpStatus.OK);
    }


    @GetMapping(path = "possibleDrivers")

    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<DriverListDTO> getAllWhoCouldBeDrivers(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<DriverDTO> drivers = driverMapper.possibleDriversToDTO(driverService.getAllWhoCouldBeDrivers(pageIndex,pageSize));
        int count = driverService.getNumberOfAllWhoCouldBeDrivers();

        return new ResponseEntity<>( new DriverListDTO(count, drivers), HttpStatus.OK);
    }

    @GetMapping(path = "possibleDrivers/search")
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<DriverListDTO> getAllSearchedWhoCouldBeDrivers(@RequestParam("pageSize") int pageSize, @RequestParam("search") String search){

        List<DriverDTO> drivers = driverMapper.possibleDriversToDTO(driverService.getAllWhoCouldBeDriversWithSearch(pageSize, search));
        int count = driverService.getNumberOfAllWhoCouldBeDriversBySearch(search);

        return new ResponseEntity<>( new DriverListDTO(count, drivers), HttpStatus.OK);
    }
    @GetMapping(path = "all")
    public ResponseEntity<List<DriverDTO>> getAll(){

        List<DriverDTO> drivers = driverMapper.ToDTO(driverService.getAll(1,Integer.MAX_VALUE));

        return new ResponseEntity<>( drivers, HttpStatus.OK);
    }
    @PostMapping(value = "risks")
    public ResponseEntity<?> addRisks(@RequestBody List<DriverRiskDTO> risksDTO){
        this.driverService.addRisks(risksDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
