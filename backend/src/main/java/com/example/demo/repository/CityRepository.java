package com.example.demo.repository;

import com.example.demo.model.City;
import com.example.demo.model.Country;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface CityRepository extends JpaRepository<City, Long> {
    @Query("select c from City c where c.isDeleted = false")
    Page<City> findAll(Pageable pageable);
    List<City> findByIsDeletedFalse();
    @Query("select c from City c where c.country.id = ?1")
    List<City> findByCountry(Long id);
    @Transactional
    @Modifying
    @Query("Update City c set c.isDeleted = true where c.country.id = ?1")
    void deleteByCountry(Long countryId);
}
