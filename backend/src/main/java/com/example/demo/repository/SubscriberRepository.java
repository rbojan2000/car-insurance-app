package com.example.demo.repository;

import com.example.demo.model.Subscriber;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {

    @Query("select s from Subscriber s where s.isDeleted = false")
    Page<Subscriber> findAll(Pageable pageable);

    @Query("SELECT COUNT(s) FROM Subscriber s WHERE s.isDeleted = false")
    int findByIsDeletedFalse();

    @Query("SELECT s FROM Subscriber s WHERE CONCAT(s.firstName, ' ', s.lastName) LIKE %:searchText% OR s.jmbg LIKE %:searchText% AND s.isDeleted = false")
    Page<Subscriber> findAllBySearch(Pageable pageable, @Param("searchText") String searchText);


    @Query("SELECT COUNT(s) FROM Subscriber s WHERE CONCAT(s.firstName, ' ', s.lastName) LIKE %:searchText% OR s.jmbg LIKE %:searchText% AND s.isDeleted = false")
    int findCountOfAllBySearch(@Param("searchText") String searchText);

    @Query("SELECT s FROM Subscriber s WHERE s.jmbg = :jmbg")
    Subscriber findByJMBG(@Param("jmbg") String jmbg);
}
