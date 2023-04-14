package com.example.demo.mapper;

import com.example.demo.DTO.BrandDTO;
import com.example.demo.model.Brand;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class BrandMapper implements IMapper<Brand, BrandDTO>{
    @Override
    public Brand ToModel(BrandDTO brandDTO) {
        Brand brand = new Brand();
        if(brandDTO.id != null)brand.setId(brandDTO.id);
        brand.setName(brandDTO.name);
        brand.setIsDeleted(false);
        return brand;
    }

    @Override
    public List<Brand> ToModel(List<BrandDTO> dto) {
        List<Brand> brands = new ArrayList<>();
        for(BrandDTO brandDTO : dto){;
            brands.add(ToModel(brandDTO));
        }
        return brands;
    }

    @Override
    public BrandDTO ToDTO(Brand brand) {
        BrandDTO brandDTO = new BrandDTO();
        brandDTO.id = brand.getId();
        brandDTO.name = brand.getName();
        return brandDTO;
    }

    @Override
    public List<BrandDTO> ToDTO(List<Brand> model) {
        List<BrandDTO> brandDTOS = new ArrayList<>();
        for(Brand brand : model){
            brandDTOS.add(ToDTO(brand));
        }
        return brandDTOS;
    }
}
