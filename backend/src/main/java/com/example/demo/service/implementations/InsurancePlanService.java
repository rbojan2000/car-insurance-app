package com.example.demo.service.implementations;


import com.example.demo.model.InsurancePlan;
import com.example.demo.repository.InsurancePlanRepository;
import com.example.demo.service.interfaces.IInsurancePlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class InsurancePlanService implements IInsurancePlanService{

    @Autowired
    private InsurancePlanRepository insurancePlanRepository;


    @Override
    public InsurancePlan create(InsurancePlan insurancePlan) throws SQLException {
        return null;
    }

    @Override
    public InsurancePlan update(InsurancePlan insurancePlan) {
        return null;
    }

    @Override
    public InsurancePlan delete(long id) {
        return null;
    }


    @Override
    public List<InsurancePlan> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.insurancePlanRepository.findAll(pageable).toList();
    }

    @Override
    public InsurancePlan getById(long id) {
        return null;
    }

    public int getNumberOfPlans() {
        return this.insurancePlanRepository.findByIsDeletedFalse();
    }

    @Override
    public InsurancePlan getBasicPlan() {
        return this.insurancePlanRepository.findByInsurancePlanBasic();
    }
}
