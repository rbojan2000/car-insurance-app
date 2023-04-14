package com.example.demo.repository;

import com.example.demo.model.AccidentHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AccidentHistoryRepository extends JpaRepository<AccidentHistory, Long> {
    @Query("select a from AccidentHistory a where a.isDeleted = false")
    Page<AccidentHistory> findAll(Pageable pageable);
    List<AccidentHistory> findByIsDeletedFalse();
}
