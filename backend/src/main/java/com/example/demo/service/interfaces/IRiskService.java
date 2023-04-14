package com.example.demo.service.interfaces;

import com.example.demo.model.Risk;

public interface IRiskService extends ICRUDService<Risk>{
    int findNumberOfRisks();
}
