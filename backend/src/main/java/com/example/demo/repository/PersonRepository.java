package com.example.demo.repository;

import com.example.demo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PersonRepository extends JpaRepository<Person, Long> {

    @Query("select p from Person p where p.isDeleted = false and p.jmbg = :jmbg")
    Person findPersonByJmbg(String jmbg);
}
