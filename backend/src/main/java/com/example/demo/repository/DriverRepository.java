package com.example.demo.repository;

import com.example.demo.model.Driver;
import com.example.demo.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface DriverRepository extends JpaRepository<Driver, Long> {

    @Query("select d from Driver d where d.isDeleted = false")
    Page<Driver> findAll(Pageable pageable);

    @Query("SELECT p FROM Person p WHERE TYPE(p) IN (Driver, Subscriber) and p.isDeleted =false")
    Page<Person> getAllWhoCouldBeDrivers(Pageable pageable);

    @Query("SELECT COUNT(d) FROM Driver d WHERE d.isDeleted = false")
    int findCountByIsDeletedFalse();

    @Query("SELECT COUNT(p) FROM Person p WHERE TYPE(p) IN (Driver, Subscriber) and p.isDeleted =false")
    int findCountOfAllWhoCouldBeDrivers();

    @Query("SELECT p FROM Person p WHERE TYPE(p) IN (Driver, Subscriber) AND CONCAT(p.firstName, ' ', p.lastName) LIKE %:search% OR p.jmbg LIKE %:search% AND p.isDeleted = false")
    Page<Person> findAllWhoCouldBeDriversBySearch(Pageable pageable, @Param("search") String search);

    @Query("SELECT COUNT(p) FROM Person p WHERE TYPE(p) IN (Driver, Subscriber) AND CONCAT(p.firstName, ' ', p.lastName) LIKE %:search% OR p.jmbg LIKE %:search% AND p.isDeleted = false")
    int findCountOfAllWhoCouldBeDriversBySearch(@Param("search") String search);
}
