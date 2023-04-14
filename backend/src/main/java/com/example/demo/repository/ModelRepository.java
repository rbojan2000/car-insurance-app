package com.example.demo.repository;

import com.example.demo.model.Model;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {
    @Query("select m from Model m where m.isDeleted = false")
    Page<Model> findAll(Pageable pageable);
    List<Model> findByIsDeletedFalse();
    @Query("select m from Model m where m.brand.id = ?1")
    List<Model> findByBrand(Long id);
    @Transactional
    @Modifying
    @Query("Update Model m set m.isDeleted = true where m.brand.id = ?1")
    void deleteByBrand(Long brandId);
}
