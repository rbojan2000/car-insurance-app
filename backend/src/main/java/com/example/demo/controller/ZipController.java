package com.example.demo.controller;

import com.example.demo.DTO.ZipDTO;
import com.example.demo.DTO.ZipListDTO;
import com.example.demo.mapper.ZipMapper;
import com.example.demo.service.implementations.ZipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/zips")
@CrossOrigin
public class ZipController {
    @Autowired
    private ZipService zipService;
    @Autowired
    private ZipMapper zipMapper;

    @GetMapping
    public ResponseEntity<ZipListDTO> getAllZips(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<ZipDTO> zips = zipMapper.ToDTO(zipService.getAll(pageIndex,pageSize));
        int count = zipService.findNumberOfZips();
        return new ResponseEntity<>(new ZipListDTO(count, zips), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createZip(@RequestBody ZipDTO zipDTO){
        this.zipService.create(zipMapper.ToModel(zipDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editZip(@RequestBody ZipDTO zipDTO){
        this.zipService.update(zipMapper.ToModel(zipDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteZip(@RequestParam("id") long id){
        this.zipService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
