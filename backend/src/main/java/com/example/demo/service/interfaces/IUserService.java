package com.example.demo.service.interfaces;

import com.example.demo.model.User;

import java.util.NoSuchElementException;

public interface IUserService {

    User findById(Long id) throws NoSuchElementException;

    User findByEmail(String email);
}
