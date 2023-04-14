package com.example.demo.service.implementations;

import com.example.demo.exception.UniqueException;
import com.example.demo.model.Subscriber;
import com.example.demo.repository.SubscriberRepository;
import com.example.demo.service.interfaces.ISubscriberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriberService implements ISubscriberService {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @Override
    public Subscriber create(Subscriber subscriber) {
        validate(subscriber);
        subscriber.setIsDeleted(false);
        return this.subscriberRepository.save(subscriber);
    }

    public void validate(Subscriber subscriber) {
        if(subscriberRepository.findByJMBG(subscriber.getJmbg()) != null)
            throw new UniqueException("Jmbg: " + subscriber.getJmbg() + " already exists!");
    }

    @Override
    public Subscriber update(Subscriber subscriber) {
        return null;
    }

    @Override
    public Subscriber delete(long id) {
        return null;
    }

    @Override
    public List<Subscriber> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return  this.subscriberRepository.findAll(pageable).toList();
    }
    @Override
    public List<Subscriber> getAllWithSearch(int pageSize, String searchText) {
        Pageable pageable = PageRequest.of(0, pageSize);
        return this.subscriberRepository.findAllBySearch(pageable, searchText).toList();
    }

    @Override
    public Subscriber getById(long id) {
        return null;
    }

    @Override
    public int getNumberOfSubscribers(){
        return this.subscriberRepository.findByIsDeletedFalse();
    }

    @Override
    public int getCountOfAllBySearch(String searchText){
        return this.subscriberRepository.findCountOfAllBySearch(searchText);
    }
}
