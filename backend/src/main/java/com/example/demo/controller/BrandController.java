package com.example.demo.controller;

import com.example.demo.DTO.BrandDTO;
import com.example.demo.DTO.BrandListDTO;
import com.example.demo.mapper.BrandMapper;
import com.example.demo.service.implementations.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/brands")
@CrossOrigin
public class BrandController {
    @Autowired
    private BrandService brandService;
    @Autowired
    private BrandMapper brandMapper;
    @GetMapping
    public ResponseEntity<BrandListDTO> getAllBrands(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<BrandDTO> brands = brandMapper.ToDTO(brandService.getAll(pageIndex,pageSize));
        int count = brandService.findNumberOfBrands();
        return new ResponseEntity<>(new BrandListDTO(count, brands), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createBrand(@RequestBody BrandDTO brandDTO){
        this.brandService.create(brandMapper.ToModel(brandDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editBrand(@RequestBody BrandDTO brandDTO){
        this.brandService.update(brandMapper.ToModel(brandDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteBrand(@RequestParam("id") long id){
        this.brandService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
