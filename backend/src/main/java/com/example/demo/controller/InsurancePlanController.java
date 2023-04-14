package com.example.demo.controller;

import com.example.demo.DTO.DriverDTO;
import com.example.demo.DTO.DriverListDTO;
import com.example.demo.DTO.InsurancePlanDTO;
import com.example.demo.mapper.InsurancePlanMapper;
import com.example.demo.service.implementations.InsurancePlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/insurancePlans")
@CrossOrigin
public class InsurancePlanController {

    @Autowired
    private InsurancePlanService insurancePlanService;

    @Autowired
    private InsurancePlanMapper mapper;

    @GetMapping(path = "basicPlan")
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<InsurancePlanDTO> getBasicPlan(){
        InsurancePlanDTO dto = mapper.ToDTO(insurancePlanService.getBasicPlan());
        return new ResponseEntity<>( dto, HttpStatus.OK);
    }
}
