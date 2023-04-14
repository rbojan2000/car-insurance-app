package com.example.demo.service.interfaces;

import com.example.demo.model.Driver;
import com.example.demo.model.Person;

import java.util.List;

public interface IDriverService extends ICRUDService<Driver>{
    List<Person> getAllWhoCouldBeDrivers(int pageIndex, int pageSize);

    int getNumberOfDrivers();

    List<Person> getAllWhoCouldBeDriversWithSearch(int pageSize, String search);

    int getNumberOfAllWhoCouldBeDriversBySearch(String searchText);

    int getNumberOfAllWhoCouldBeDrivers();
}
