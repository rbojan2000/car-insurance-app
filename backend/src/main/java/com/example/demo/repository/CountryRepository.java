package com.example.demo.repository;

import com.example.demo.model.Country;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {
    @Query("select c from Country c where c.isDeleted = false")
    Page<Country> findAll(Pageable pageable);
    List<Country> findByIsDeletedFalse();
}
