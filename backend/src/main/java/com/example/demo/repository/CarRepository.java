package com.example.demo.repository;

import com.example.demo.model.Car;
import com.example.demo.model.Subscriber;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    @Query("select c from Car c where c.isDeleted = false")
    Page<Car> findAll(Pageable pageable);

    @Query("SELECT COUNT(c) FROM Car c WHERE c.isDeleted = false")
    int findByIsDeletedFalse();

    @Query("SELECT c FROM Car c WHERE CONCAT(c.model.brand.name, ' ', c.model.name, ' ', c.year) LIKE %:searchText% AND c.isDeleted = false")
    Page<Car> findAllBySearch(Pageable pageable, @Param("searchText") String searchText);

    @Query("SELECT COUNT(c) FROM Car c WHERE CONCAT(c.model.brand.name, ' ', c.model.name, ' ', c.year) LIKE %:searchText% AND c.isDeleted = false")
    int findCountOfAllBySearch(@Param("searchText") String searchText);
    @Transactional
    @Modifying
    @Query("Update Car c set c.isDeleted = true where c.model.id = ?1")
    void deleteByModel(Long modelId);
}
