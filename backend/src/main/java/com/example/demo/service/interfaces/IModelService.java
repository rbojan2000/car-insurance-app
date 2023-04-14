package com.example.demo.service.interfaces;

import com.example.demo.model.Model;

public interface IModelService extends ICRUDService<Model>{
    int findNumberOfModels();
}
