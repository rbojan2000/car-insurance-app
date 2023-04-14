package com.example.demo.mapper;

import com.example.demo.DTO.InsuranceItemDTO;
import com.example.demo.model.InsuranceItem;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
public class InsuranceItemMapper implements IMapper<InsuranceItem, InsuranceItemDTO>{
    @Override
    public InsuranceItem ToModel(InsuranceItemDTO insuranceItemDTO) {
        InsuranceItem insuranceItem = new InsuranceItem();
        if(insuranceItemDTO.id != 0)insuranceItem.setId(insuranceItemDTO.id);
        insuranceItem.setAmount(insuranceItemDTO.amount);
        insuranceItem.setFranchisePercentage(insuranceItemDTO.franchisePercentage);
        insuranceItem.setName(insuranceItemDTO.name);
        insuranceItem.setIsOptional(insuranceItemDTO.isOptional);
        insuranceItem.setIsDeleted(false);
        return insuranceItem;
    }

    @Override
    public List<InsuranceItem> ToModel(List<InsuranceItemDTO> dto) {
        List<InsuranceItem> insuranceItems = new ArrayList<>();

        for(InsuranceItemDTO insuranceItemDTO : dto){
            insuranceItems.add(ToModel(insuranceItemDTO));
        }

        return insuranceItems;
    }

    @Override
    public InsuranceItemDTO ToDTO(InsuranceItem insuranceItem) {
        InsuranceItemDTO dto = new InsuranceItemDTO();

        dto.id = insuranceItem.getId();
        dto.amount = insuranceItem.getAmount();
        dto.franchisePercentage = insuranceItem.getFranchisePercentage();
        dto.name = insuranceItem.getName();
        dto.isOptional = insuranceItem.getIsOptional();

        return dto;
    }

    @Override
    public List<InsuranceItemDTO> ToDTO(List<InsuranceItem> model) {
        List<InsuranceItemDTO> insuranceItemsDTOList = new ArrayList<>();

        for(InsuranceItem insuranceItem : model) {
            insuranceItemsDTOList.add(ToDTO(insuranceItem));
        }
        return insuranceItemsDTOList;
    }
}
