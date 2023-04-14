package com.example.demo.service.implementations;

import com.example.demo.model.Brand;
import com.example.demo.model.Model;
import com.example.demo.repository.*;
import com.example.demo.service.interfaces.IModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelService implements IModelService {
    @Autowired
    private ModelRepository modelRepository;
    @Autowired
    private CarService carService;
    @Override
    public Model create(Model model) {
        return this.modelRepository.save(model);
    }

    @Override
    public Model update(Model model) {
        return this.modelRepository.save(model);
    }

    @Override
    public Model delete(long id) {
        Model modelToDelete = this.modelRepository.findById(id).get();
        modelToDelete.setIsDeleted(true);
        this.carService.deleteByModel(id);
        return this.modelRepository.save(modelToDelete);
    }

    @Override
    public List<Model> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.modelRepository.findAll(pageable).toList();
    }

    @Override
    public Model getById(long id) {
        return this.modelRepository.findById(id).get();
    }

    @Override
    public int findNumberOfModels() {
        return this.modelRepository.findByIsDeletedFalse().size();
    }

    public void deleteByBrand(Long id){
        this.modelRepository.deleteByBrand(id);
    }
}
