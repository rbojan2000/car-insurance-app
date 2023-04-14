package com.example.demo.mapper;

import com.example.demo.DTO.CityDTO;
import com.example.demo.DTO.ZipDTO;
import com.example.demo.model.Zip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ZipMapper implements IMapper<Zip, ZipDTO>{
    @Autowired
    private CityMapper cityMapper;
    @Override
    public Zip ToModel(ZipDTO zipDTO) {
        Zip zip = new Zip();
        if(zipDTO.id != null) zip.setId(zipDTO.id);
        zip.setZipNumber(zipDTO.name);
        zip.setAddresses(new ArrayList<>());
        CityDTO cityDTO = new CityDTO();
        cityDTO.id = zipDTO.cityId;
        zip.setCity(cityMapper.ToModel(cityDTO));
        zip.setIsDeleted(false);
        return zip;
    }

    @Override
    public List<Zip> ToModel(List<ZipDTO> dto) {
        List<Zip> zips = new ArrayList<>();
        for(ZipDTO zipDTO : dto){
            zips.add(ToModel(zipDTO));
        }
        return zips;
    }

    @Override
    public ZipDTO ToDTO(Zip zip) {
        ZipDTO zipDTO =  new ZipDTO();
        zipDTO.id = zip.getId();
        zipDTO.name = zip.getZipNumber();
        zipDTO.city = zip.getCity().getName();
        zipDTO.cityId = zip.getCity().getId();
        zipDTO.country = zip.getCity().getCountry().getName();
        zipDTO.countryId = zip.getCity().getCountry().getId();
        return zipDTO;
    }

    @Override
    public List<ZipDTO> ToDTO(List<Zip> model) {
        List<ZipDTO> zipDTOS = new ArrayList<>();
        for(Zip zip : model){
            zipDTOS.add(ToDTO(zip));
        }
        return zipDTOS;
    }
}
