package com.example.demo.service.interfaces;

import com.example.demo.model.Car;

public interface ICarService extends ICRUDService<Car>{
    int findNumberOfCars();
}
