package com.example.demo.repository;

import com.example.demo.model.Proposal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProposalRepository extends JpaRepository<Proposal, Long> {
    @Query("select p from Proposal p where p.isDeleted = false")
    Page<Proposal> findAll(Pageable pageable);
    List<Proposal> findByIsDeletedFalse();
}
