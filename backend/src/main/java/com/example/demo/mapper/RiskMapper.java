package com.example.demo.mapper;

import com.example.demo.DTO.RiskDTO;
import com.example.demo.model.Risk;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RiskMapper implements IMapper<Risk, RiskDTO> {
    @Override
    public Risk ToModel(RiskDTO riskDTO) {
        Risk risk = new Risk();
        if(riskDTO.id != null)risk.setId(riskDTO.id);
        risk.setDescription(riskDTO.description);
        risk.setIsDeleted(false);
        return risk;
    }

    @Override
    public List<Risk> ToModel(List<RiskDTO> dto) {
        List<Risk> risks = new ArrayList<>();
        for(RiskDTO riskDTO : dto){
            risks.add(ToModel(riskDTO));
        }
        return risks;
    }

    @Override
    public RiskDTO ToDTO(Risk risk) {
        RiskDTO riskDTO = new RiskDTO();
        riskDTO.id = risk.getId();
        riskDTO.description = risk.getDescription();
        return riskDTO;
    }

    @Override
    public List<RiskDTO> ToDTO(List<Risk> model) {
        List<RiskDTO> riskDTOS = new ArrayList<>();
        for(Risk risk : model){
            riskDTOS.add(ToDTO(risk));
        }
        return riskDTOS;
    }
}
