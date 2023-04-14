package com.example.demo.mapper;

import com.example.demo.DTO.BrandDTO;
import com.example.demo.DTO.ModelDTO;
import com.example.demo.DTO.YearDTO;
import com.example.demo.model.Model;
import com.example.demo.model.Year;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class ModelMapper implements IMapper<Model, ModelDTO>{
    @Autowired
    private BrandMapper brandMapper;
    @Override
    public Model ToModel(ModelDTO modelDTO) {
        Model model = new Model();
        if(modelDTO.id != null)model.setId(modelDTO.id);
        model.setName(modelDTO.name);
        model.setCars(new ArrayList<>());
        BrandDTO brandDTO = new BrandDTO();
        brandDTO.id = modelDTO.brandId;
        model.setBrand(brandMapper.ToModel(brandDTO));
        model.setIsDeleted(false);
        return model;
    }

    @Override
    public List<Model> ToModel(List<ModelDTO> dto) {
        List<Model> models = new ArrayList<>();
        for(ModelDTO modelDTO : dto){
            models.add(ToModel(modelDTO));
        }
        return models;
    }

    @Override
    public ModelDTO ToDTO(Model model) {
        ModelDTO modelDTO = new ModelDTO();
        modelDTO.id = model.getId();
        modelDTO.name = model.getName();
        modelDTO.brandId = model.getBrand().getId();
        modelDTO.brand = model.getBrand().getName();
        modelDTO.years = new ArrayList<>();
        for(Year year : model.getYears()){
            modelDTO.years.add(new YearDTO(year.getId(), year.getYear(), year.getIsDeleted()));
        }
        return modelDTO;
    }

    @Override
    public List<ModelDTO> ToDTO(List<Model> models) {
        List<ModelDTO> modelDTOS = new ArrayList<>();
        for(Model model : models){
            modelDTOS.add(ToDTO(model));
        }
        return modelDTOS;
    }
}
