package com.example.demo.service.implementations;

import com.example.demo.model.AccidentHistory;
import com.example.demo.repository.AccidentHistoryRepository;
import com.example.demo.service.interfaces.IAccidentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AccidentHistoryService implements IAccidentHistoryService {

    @Autowired
    private AccidentHistoryRepository accidentHistoryRepository;
    @Override
    public AccidentHistory create(AccidentHistory accidentHistory) {
        return this.accidentHistoryRepository.save(accidentHistory);
    }

    @Override
    public AccidentHistory update(AccidentHistory accidentHistory) {
        return this.accidentHistoryRepository.save(accidentHistory);
    }

    @Override
    public AccidentHistory delete(long id) {
        AccidentHistory accidentHistoryToDelete = this.accidentHistoryRepository.findById(id).get();
        accidentHistoryToDelete.setIsDeleted(true);
        return this.accidentHistoryRepository.save(accidentHistoryToDelete);
    }

    @Override
    public List<AccidentHistory> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.accidentHistoryRepository.findAll(pageable).toList();
    }

    @Override
    public AccidentHistory getById(long id) {
        return this.accidentHistoryRepository.findById(id).get();
    }
    @Override
    public int findNumberOfAccidentHistories() {
        return this.accidentHistoryRepository.findByIsDeletedFalse().size();
    }
}
