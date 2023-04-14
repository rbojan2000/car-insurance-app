package com.example.demo.controller;


import com.example.demo.DTO.*;
import com.example.demo.mapper.SubscriberMapper;
import com.example.demo.model.Subscriber;
import com.example.demo.service.implementations.AddressService;
import com.example.demo.service.implementations.SubscriberService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscribers")
@CrossOrigin
public class SubscriberController {

    @Autowired
    private SubscriberService subscriberService;
    @Autowired
    private SubscriberMapper subscriberMapper;
    @Autowired
    private AddressService addressService;

    @GetMapping
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<SubscriberListDTO> getAllSubscribers(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<SubscriberDTO> subscribers = subscriberMapper.ToDTO(subscriberService.getAll(pageIndex,pageSize));
        int count = subscriberService.getNumberOfSubscribers();
        return new ResponseEntity<>( new SubscriberListDTO(count, subscribers), HttpStatus.OK);
    }

    @GetMapping(path = "search")
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<SubscriberListDTO> getAllSearchedSubscribers(@RequestParam("pageSize") int pageSize, @RequestParam("search") String search){
        List<SubscriberDTO> subscribers = subscriberMapper.ToDTO(subscriberService.getAllWithSearch(pageSize, search));
        int count = subscriberService.getCountOfAllBySearch(search);
        return new ResponseEntity<>( new SubscriberListDTO(count, subscribers), HttpStatus.OK);
    }

    @PostMapping(path = "create")
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<Subscriber> createSubscriber(@RequestBody SubscriberDTO subscriberDTO) {
        Subscriber subscriber = subscriberMapper.ToModel(subscriberDTO);
        subscriber.setAddress(addressService.getById(subscriberDTO.addressId));
        return new ResponseEntity<Subscriber>(subscriberService.create(subscriber), HttpStatus.OK);
    }

} 
