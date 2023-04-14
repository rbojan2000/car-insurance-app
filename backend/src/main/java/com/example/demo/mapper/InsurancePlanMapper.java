package com.example.demo.mapper;

import com.example.demo.DTO.InsurancePlanDTO;
import com.example.demo.model.InsurancePlan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class InsurancePlanMapper implements IMapper<InsurancePlan, InsurancePlanDTO>{


    @Autowired
    private InsuranceItemMapper insuranceItemMapper;

    @Override
    public InsurancePlan ToModel(InsurancePlanDTO insurancePlanDTO) {
        InsurancePlan insurancePlan = new InsurancePlan();
        if(insurancePlanDTO.id != 0)insurancePlan.setId(insurancePlanDTO.id);
        insurancePlan.setName(insurancePlanDTO.name);
        insurancePlan.setIsPremium(insurancePlanDTO.isPremium);
        insurancePlan.setInsuranceItems(insuranceItemMapper.ToModel(insurancePlanDTO.insuranceItemsDTO));
        insurancePlan.setIsDeleted(false);
        return insurancePlan;
    }

    @Override
    public List<InsurancePlan> ToModel(List<InsurancePlanDTO> dto) {
        List<InsurancePlan> insurancePlans = new ArrayList<>();

        for(InsurancePlanDTO insurancePlanDTO : dto){
            insurancePlans.add(ToModel(insurancePlanDTO));
        }
        return insurancePlans;
    }

    @Override
    public InsurancePlanDTO ToDTO(InsurancePlan insurancePlan) {
        InsurancePlanDTO dto = new InsurancePlanDTO();
        dto.id = insurancePlan.getId();
        dto.isPremium = insurancePlan.getIsPremium();
        dto.name = insurancePlan.getName();
        dto.insuranceItemsDTO =  insuranceItemMapper.ToDTO(insurancePlan.getInsuranceItems());

        return dto;
    }


    @Override
    public List<InsurancePlanDTO> ToDTO(List<InsurancePlan> model) {

        List<InsurancePlanDTO> plansDTO = new ArrayList<>();

        for(InsurancePlan insurancePlan : model){
            plansDTO.add(ToDTO(insurancePlan));
        }

        return plansDTO;
    }
}
