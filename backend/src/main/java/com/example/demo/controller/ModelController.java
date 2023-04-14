package com.example.demo.controller;

import com.example.demo.DTO.ModelDTO;
import com.example.demo.DTO.ModelListDTO;
import com.example.demo.mapper.ModelMapper;
import com.example.demo.service.implementations.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/models")
@CrossOrigin
public class ModelController {
    @Autowired
    private ModelService modelService;
    @Autowired
    private ModelMapper modelMapper;
    @GetMapping
    public ResponseEntity<ModelListDTO> getAllModels(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<ModelDTO> models = modelMapper.ToDTO(modelService.getAll(pageIndex,pageSize));
        int count = modelService.findNumberOfModels();
        return new ResponseEntity<>(new ModelListDTO(count, models), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createModel(@RequestBody ModelDTO modelDTO){
        this.modelService.create(modelMapper.ToModel(modelDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editModel(@RequestBody ModelDTO modelDTO){
        this.modelService.update(modelMapper.ToModel(modelDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteModel(@RequestParam("id") long id){
        this.modelService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
