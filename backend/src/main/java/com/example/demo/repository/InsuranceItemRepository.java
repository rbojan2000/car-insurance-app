package com.example.demo.repository;


import com.example.demo.model.InsuranceItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsuranceItemRepository extends JpaRepository<InsuranceItem, Long> {

}
