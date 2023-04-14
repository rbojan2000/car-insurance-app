package com.example.demo.service.interfaces;

import java.sql.SQLException;
import java.util.List;

public interface ICRUDService <T>{

    T create(T t) throws SQLException;
    T update(T t);
    T delete(long id);
    List<T> getAll(int pageIndex, int pageSize);
    T getById(long id);

}
