package com.example.demo.controller;

import com.example.demo.DTO.RiskDTO;
import com.example.demo.DTO.RiskListDTO;
import com.example.demo.mapper.RiskMapper;
import com.example.demo.service.implementations.RiskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/risks")
@CrossOrigin
public class RiskController {
    @Autowired
    private RiskService riskService;
    @Autowired
    private RiskMapper riskMapper;
    @GetMapping
    public ResponseEntity<RiskListDTO> getAllRisks(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<RiskDTO> risks = riskMapper.ToDTO(riskService.getAll(pageIndex,pageSize));
        int count = riskService.findNumberOfRisks();
        return new ResponseEntity<>(new RiskListDTO(count, risks), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createRisk(@RequestBody RiskDTO riskDTO){
        this.riskService.create(riskMapper.ToModel(riskDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editAccidentRisk(@RequestBody RiskDTO riskDTO){
        this.riskService.update(riskMapper.ToModel(riskDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteRisk(@RequestParam("id") long id){
        this.riskService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping(value = "driver")
    public ResponseEntity<RiskListDTO> getAllRisksByDriver(@RequestParam("driverId") long driverId){
        List<RiskDTO> risks = riskMapper.ToDTO(riskService.getAllByDriver(driverId));
        int count = riskService.findNumberOfRisks();
        return new ResponseEntity<>(new RiskListDTO(count, risks), HttpStatus.OK);
    }
}
