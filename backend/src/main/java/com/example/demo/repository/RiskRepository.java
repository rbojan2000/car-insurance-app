package com.example.demo.repository;

import com.example.demo.model.Risk;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RiskRepository extends JpaRepository<Risk, Long> {
    @Query("select r from Risk r where r.isDeleted = false")
    Page<Risk> findAll(Pageable pageable);
    List<Risk> findByIsDeletedFalse();
}
