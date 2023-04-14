package com.example.demo.repository;

import com.example.demo.model.InsurancePlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InsurancePlanRepository extends JpaRepository<InsurancePlan, Long> {

    @Query("SELECT p FROM InsurancePlan p WHERE p.isDeleted = false")
    Page<InsurancePlan> findAll(Pageable pageable);
    @Query("SELECT COUNT(p) FROM InsurancePlan p WHERE p.isDeleted =false")
    int findByIsDeletedFalse();

    @Query("SELECT p FROM InsurancePlan p WHERE p.isPremium=false and p.isDeleted =false")
    InsurancePlan findByInsurancePlanBasic();
}
