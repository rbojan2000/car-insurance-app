package com.example.demo.mapper;

import com.example.demo.DTO.AddressDTO;
import com.example.demo.DTO.ZipDTO;
import com.example.demo.model.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class AddressMapper implements IMapper<Address, AddressDTO>{
    @Autowired
    private ZipMapper zipMapper;
    @Override
    public Address ToModel(AddressDTO addressDTO) {
        Address address = new Address();
        if(addressDTO.id != null)address.setId(addressDTO.id);
        address.setStreet(addressDTO.street);
        address.setStreetNumber(addressDTO.streetNumber);
        ZipDTO zipDTO = new ZipDTO();
        zipDTO.id = addressDTO.zipId;
        address.setZip(zipMapper.ToModel(zipDTO));
        address.setIsDeleted(false);
        return address;
    }

    @Override
    public List<Address> ToModel(List<AddressDTO> dto) {
        List<Address> addresses = new ArrayList<>();
        for(AddressDTO addressDTO : dto){
            addresses.add(ToModel(addressDTO));
        }
        return addresses;
    }

    @Override
    public AddressDTO ToDTO(Address address) {
        AddressDTO addressDTO = new AddressDTO();
        addressDTO.id = address.getId();
        addressDTO.country = address.getZip().getCity().getCountry().getName();
        addressDTO.countryId = address.getZip().getCity().getCountry().getId();
        addressDTO.city = address.getZip().getCity().getName();
        addressDTO.cityId = address.getZip().getCity().getId();
        addressDTO.zip = address.getZip().getZipNumber();
        addressDTO.zipId = address.getZip().getId();
        addressDTO.street = address.getStreet();
        addressDTO.streetNumber = address.getStreetNumber();
        addressDTO.name = address.getStreet() + " " + address.getStreetNumber()+", " + address.getZip().getZipNumber();
        return addressDTO;
    }

    @Override
    public List<AddressDTO> ToDTO(List<Address> model) {
        List<AddressDTO> addresses = new ArrayList<>();
        for(Address address : model){
            addresses.add(ToDTO(address));
        }
        return addresses;
    }
}
