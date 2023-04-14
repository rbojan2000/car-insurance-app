package com.example.demo.service.interfaces;

import com.example.demo.model.InsurancePlan;

import java.util.List;

public interface IInsurancePlanService extends ICRUDService<InsurancePlan>{

    public InsurancePlan getBasicPlan();
}
