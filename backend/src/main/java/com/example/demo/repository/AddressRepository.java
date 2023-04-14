package com.example.demo.repository;

import com.example.demo.model.Address;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    @Query("select a from Address a where a.isDeleted = false")
    Page<Address> findAll(Pageable pageable);
    List<Address> findByIsDeletedFalse();
    @Transactional
    @Modifying
    @Query("Update Address a set a.isDeleted = true where a.zip.id = ?1")
    void deleteByZip(Long zipId);
}
