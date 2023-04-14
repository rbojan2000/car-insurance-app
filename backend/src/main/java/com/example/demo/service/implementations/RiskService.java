package com.example.demo.service.implementations;

import com.example.demo.model.Driver;
import com.example.demo.model.Risk;
import com.example.demo.repository.RiskRepository;
import com.example.demo.service.interfaces.IRiskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiskService implements IRiskService {
    @Autowired
    private RiskRepository riskRepository;
    @Autowired
    private DriverService driverService;
    @Override
    public Risk create(Risk risk) {
        return this.riskRepository.save(risk);
    }

    @Override
    public Risk update(Risk risk) {
        return this.riskRepository.save(risk);
    }

    @Override
    public Risk delete(long id) {
        Risk riskToDelete = this.riskRepository.findById(id).get();
        riskToDelete.setIsDeleted(true);
        return this.riskRepository.save(riskToDelete);
    }

    @Override
    public List<Risk> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.riskRepository.findAll(pageable).toList();
    }

    @Override
    public Risk getById(long id) {
        return this.riskRepository.findById(id).get();
    }

    @Override
    public int findNumberOfRisks() {
        return this.riskRepository.findByIsDeletedFalse().size();
    }
    public List<Risk> getAllByDriver(long driverId) {
        Driver driver = driverService.getById(driverId);
        List<Risk> risks = getAll(1, Integer.MAX_VALUE);
        risks.removeAll(driver.getRisks());
        return risks;
    }
}
