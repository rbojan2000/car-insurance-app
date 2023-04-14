package com.example.demo.mapper;

import com.example.demo.DTO.CarDTO;
import com.example.demo.DTO.ModelDTO;
import com.example.demo.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CarMapper implements IMapper<Car, CarDTO>{
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public Car ToModel(CarDTO carDTO) {
        Car car = new Car();
        car.setId(carDTO.id);
        car.setYear(carDTO.year);
        ModelDTO modelDTO = new ModelDTO();
        modelDTO.id = carDTO.modelId;
        car.setModel(modelMapper.ToModel(modelDTO));
        car.setIsDeleted(false);
        return car;
    }

    @Override
    public List<Car> ToModel(List<CarDTO> dto) {
        List<Car> cars = new ArrayList<>();

        for(CarDTO carDTO : dto){
            cars.add(ToModel(carDTO));
        }

        return cars;
    }

    @Override
    public CarDTO ToDTO(Car car) {
        CarDTO dto = new CarDTO();
        dto.id = car.getId();
        dto.modelId = car.getModel().getId();
        dto.model = car.getModel().getName();
        dto.brandId = car.getModel().getBrand().getId();
        dto.brand = car.getModel().getBrand().getName();
        dto.year = car.getYear();
        return dto;
    }

    @Override
    public List<CarDTO> ToDTO(List<Car> model) {
        List<CarDTO> cars = new ArrayList<CarDTO>();

        for(Car car : model){
            cars.add(ToDTO(car));
        }

        return cars;
    }
}
