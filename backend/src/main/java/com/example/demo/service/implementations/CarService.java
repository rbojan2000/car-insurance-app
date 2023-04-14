package com.example.demo.service.implementations;

import com.example.demo.model.Car;
import com.example.demo.model.Brand;
import com.example.demo.model.Model;
import com.example.demo.repository.BrandRepository;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.ModelRepository;
import com.example.demo.service.interfaces.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {

    @Autowired
    private CarRepository carRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private ModelRepository modelRepository;

    @Override
    public Car create(Car car) {
        return this.carRepository.save(car);
    }

    @Override
    public Car update(Car car) {
        return this.carRepository.save(car);
    }

    @Override
    public Car delete(long id) {
        Car carToDelete = this.carRepository.findById(id).get();
        carToDelete.setIsDeleted(true);
        return this.carRepository.save(carToDelete);
    }

    @Override
    public List<Car> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return  this.carRepository.findAll(pageable).toList();
    }

    public List<Car> getAllWithSearch(int pageSize, String searchText) {
        Pageable pageable = PageRequest.of(0, pageSize);
        return this.carRepository.findAllBySearch(pageable, searchText).toList();
    }
    @Override
    public int findNumberOfCars(){
        return this.carRepository.findByIsDeletedFalse();
    }
    public int getCountOfAllBySearch(String searchText){
        return this.carRepository.findCountOfAllBySearch(searchText);
    }
    public void deleteByModel(Long id){
        this.carRepository.deleteByModel(id);
    }
    @Override
    public Car getById(long id) {
        return this.carRepository.findById(id).get();
    }
    public List<Brand> getBrands(int pageIndex, int pageSize){
        return this.brandRepository.findAll(PageRequest.of(pageIndex-1, pageSize)).toList();
    }
    public List<Model> getModels(long id){
        return this.modelRepository.findByBrand(id);
    }
    public void deleteByBrand(Long id){
        for(Car car : this.carRepository.findAll()){
            if(car.getModel().getBrand().getId() == id){
                car.setIsDeleted(true);
                this.carRepository.save(car);
            }
        }
    }
}
