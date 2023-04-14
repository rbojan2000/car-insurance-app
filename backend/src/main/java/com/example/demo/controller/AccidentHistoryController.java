package com.example.demo.controller;

import com.example.demo.DTO.AccidentHistoryDTO;
import com.example.demo.DTO.AccidentHistoryListDTO;
import com.example.demo.mapper.AccidentHistoryMapper;
import com.example.demo.service.implementations.AccidentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accidentHistories")
@CrossOrigin
public class AccidentHistoryController {
    @Autowired
    private AccidentHistoryService accidentHistoryService;
    @Autowired
    private AccidentHistoryMapper accidentHistoryMapper;
    @GetMapping
    public ResponseEntity<AccidentHistoryListDTO> getAllAccidentHistories(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<AccidentHistoryDTO> accidentHistories = accidentHistoryMapper.ToDTO(accidentHistoryService.getAll(pageIndex,pageSize));
        int count = accidentHistoryService.findNumberOfAccidentHistories();
        return new ResponseEntity<>(new AccidentHistoryListDTO(count, accidentHistories), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createAccidentHistory(@RequestBody AccidentHistoryDTO accidentHistoryDTO){
        this.accidentHistoryService.create(accidentHistoryMapper.ToModel(accidentHistoryDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editAccidentHistory(@RequestBody AccidentHistoryDTO accidentHistoryDTO){
        this.accidentHistoryService.update(accidentHistoryMapper.ToModel(accidentHistoryDTO));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<?> deleteAccidentHistory(@RequestParam("id") long id){
        this.accidentHistoryService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
