package com.example.demo.service.implementations;

import com.example.demo.model.City;
import com.example.demo.model.Country;
import com.example.demo.model.Zip;
import com.example.demo.repository.CityRepository;
import com.example.demo.repository.CountryRepository;
import com.example.demo.repository.ZipRepository;
import com.example.demo.service.interfaces.IZipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ZipService implements IZipService {
    @Autowired
    private ZipRepository zipRepository;
    @Autowired
    private AddressService addressService;
    @Override
    public Zip create(Zip zip) {
        return this.zipRepository.save(zip);
    }

    @Override
    public Zip update(Zip zip) {
        return this.zipRepository.save(zip);
    }

    @Override
    public Zip delete(long id) {
        Zip zipToDelete = this.zipRepository.findById(id).get();
        zipToDelete.setIsDeleted(true);
        this.addressService.deleteByZip(id);
        return this.zipRepository.save(zipToDelete);
    }

    @Override
    public List<Zip> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.zipRepository.findAll(pageable).toList();
    }

    @Override
    public Zip getById(long id) {
        return this.zipRepository.findById(id).get();
    }

    @Override
    public int findNumberOfZips() {
        return this.zipRepository.findByIsDeletedFalse().size();
    }
    @Override
    public void deleteByCountry(Long id){
        for(Zip zip : this.zipRepository.findAll()){
            if(zip.getCity().getCountry().getId() == id){
                zip.setIsDeleted(true);
                this.zipRepository.save(zip);
            }
        }
    }
    @Override
    public void deleteByCity(Long id){
        this.zipRepository.deleteByCity(id);
    }
}
