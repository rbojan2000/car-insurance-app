package com.example.demo.repository;

import com.example.demo.model.Zip;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface ZipRepository extends JpaRepository<Zip, Long> {
    @Query("select z from Zip z where z.isDeleted = false")
    Page<Zip> findAll(Pageable pageable);
    List<Zip> findByIsDeletedFalse();
    @Query("select z from Zip z where z.city.id = ?1")
    List<Zip> findByCity(Long id);
    @Transactional
    @Modifying
    @Query("Update Zip z set z.isDeleted = true where z.city.id = ?1")
    void deleteByCity(Long cityId);
}
