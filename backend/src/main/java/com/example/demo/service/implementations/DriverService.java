package com.example.demo.service.implementations;

import com.example.demo.DTO.DriverRiskDTO;
import com.example.demo.model.Driver;
import com.example.demo.model.Person;
import com.example.demo.model.Risk;
import com.example.demo.repository.DriverRepository;
import com.example.demo.service.interfaces.IDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class DriverService implements IDriverService {


    @Autowired
    private DriverRepository driverRepository;


    @Override
    public Driver create(Driver driver) throws SQLException { return null; }

    @Override
    public Driver update(Driver driver) {
        return null;
    }

    @Override
    public Driver delete(long id) {
        return null;
    }

    @Override
    public List<Driver> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.driverRepository.findAll(pageable).toList();
    }

    @Override
    public List<Person> getAllWhoCouldBeDrivers(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.driverRepository.getAllWhoCouldBeDrivers(pageable).toList();
    }

    @Override
    public Driver getById(long id) {
        return this.driverRepository.findById(id).get();
    }

    @Override
    public int getNumberOfDrivers() {
        return this.driverRepository.findCountByIsDeletedFalse();
    }

    @Override
    public List<Person> getAllWhoCouldBeDriversWithSearch(int pageSize, String search) {
        Pageable pageable = PageRequest.of(0, pageSize);
        return this.driverRepository.findAllWhoCouldBeDriversBySearch(pageable, search).toList();
    }

    @Override
    public int getNumberOfAllWhoCouldBeDriversBySearch(String searchText) {
        return this.driverRepository.findCountOfAllWhoCouldBeDriversBySearch(searchText);
    }

    @Override
    public int getNumberOfAllWhoCouldBeDrivers() {
        return this.driverRepository.findCountOfAllWhoCouldBeDrivers();
    }

    public void addRisks(List<DriverRiskDTO> driverRiskDTOS){
        for(DriverRiskDTO driverRiskDTO : driverRiskDTOS){
            Driver driver = getById(driverRiskDTO.driverId);
            List<Risk> risks = driver.getRisks();
            risks.add(new Risk(driverRiskDTO.id, driverRiskDTO.name, new ArrayList<>(),false));
            driver.setRisks(risks);
            update(driver);
        }
    }
}
