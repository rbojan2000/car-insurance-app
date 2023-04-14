package com.example.demo.service.interfaces;

import com.example.demo.model.Subscriber;

import java.util.List;

public interface ISubscriberService extends ICRUDService<Subscriber>{
    List<Subscriber> getAllWithSearch(int pageSize, String search);

    int getNumberOfSubscribers();

    int getCountOfAllBySearch(String searchText);
}
