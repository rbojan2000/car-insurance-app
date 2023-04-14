package com.example.demo.repository;

import com.example.demo.model.Subscriber;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

        @Query("select u from User u where u.isDeleted = false and u.email = :email")
        User findByEmail(@Param("email") String email);

}
