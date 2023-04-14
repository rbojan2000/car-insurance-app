package com.example.demo.DTO;

import lombok.AllArgsConstructor;

import java.util.List;
@AllArgsConstructor
public class AddressListDTO {
    public int count;
    public List<AddressDTO> addresses;

}
