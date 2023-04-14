package com.example.demo.repository;

import com.example.demo.model.Brand;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {
    @Query("select b from Brand b where b.isDeleted = false")
    Page<Brand> findAll(Pageable pageable);
    List<Brand> findByIsDeletedFalse();
}
