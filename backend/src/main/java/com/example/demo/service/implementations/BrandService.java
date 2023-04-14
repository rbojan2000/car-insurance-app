package com.example.demo.service.implementations;

import com.example.demo.model.Brand;
import com.example.demo.repository.BrandRepository;
import com.example.demo.service.interfaces.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BrandService implements IBrandService {
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private ModelService modelService;
    @Autowired
    private CarService carService;

    @Override
    public Brand create(Brand brand) {
        return this.brandRepository.save(brand);
    }

    @Override
    public Brand update(Brand brand) {
        return this.brandRepository.save(brand);
    }

    @Override
    public Brand delete(long id) {
        Brand brandToDelete = this.brandRepository.findById(id).get();
        brandToDelete.setIsDeleted(true);
        this.modelService.deleteByBrand(id);
        this.carService.deleteByBrand(id);
        return this.brandRepository.save(brandToDelete);
    }

    @Override
    public List<Brand> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.brandRepository.findAll(pageable).toList();
    }

    @Override
    public Brand getById(long id) {
        return this.brandRepository.findById(id).get();
    }

    @Override
    public int findNumberOfBrands() {
        return  this.brandRepository.findByIsDeletedFalse().size();
    }
}
