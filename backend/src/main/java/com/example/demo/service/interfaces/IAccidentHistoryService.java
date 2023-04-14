package com.example.demo.service.interfaces;

import com.example.demo.model.AccidentHistory;

public interface IAccidentHistoryService extends ICRUDService<AccidentHistory>{
    int findNumberOfAccidentHistories();
}
