package com.example.demo.mapper;

import com.example.demo.DTO.DriverDTO;
import com.example.demo.model.Driver;
import com.example.demo.model.Person;
import com.example.demo.model.Subscriber;

import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

@Component
public class DriverMapper implements IMapper<Driver, DriverDTO> {

    @Override
    public Driver ToModel(DriverDTO driverDTO) {
        Driver driver = new Driver();
        if(driverDTO.id != null)driver.setId(driverDTO.id);
        driver.setFirstName(driverDTO.name);
        driver.setLastName(driverDTO.surname);
        driver.setJmbg(driverDTO.jmbg);

        return driver;
    }

    @Override
    public List<Driver> ToModel(List<DriverDTO> dto) {
        List<Driver> drivers = new ArrayList<Driver>();

        for(DriverDTO driverDTO: dto){
            drivers.add(ToModel(driverDTO));
        }

        return drivers;
    }

    @Override
    public DriverDTO ToDTO(Driver driver) {
        DriverDTO dto = new DriverDTO();

        dto.jmbg = driver.getJmbg();
        dto.name = driver.getFirstName();
        dto.surname = driver.getLastName();
        dto.id = driver.getId();

        return dto;
    }

    @Override
    public List<DriverDTO> ToDTO(List<Driver> model) {
        List<DriverDTO> drivers = new ArrayList<DriverDTO>();

        for(Driver driver : model){
            drivers.add(ToDTO(driver));
        }

        return drivers;
    }

    public List<DriverDTO> possibleDriversToDTO(List<Person> allWhoCouldBeDrivers) {
        List<DriverDTO> drivers = new ArrayList<DriverDTO>();

       for(Person p : allWhoCouldBeDrivers ) {
            DriverDTO dto = new DriverDTO();
            dto.jmbg = p.getJmbg();
            dto.name = p.getFirstName();
            dto.surname = p.getLastName();
            dto.id = p.getId();
            if(p instanceof Subscriber) {
                dto.isSubscriber = "YES";
            }

            drivers.add(dto);
        }
        return  drivers;
    }
}
