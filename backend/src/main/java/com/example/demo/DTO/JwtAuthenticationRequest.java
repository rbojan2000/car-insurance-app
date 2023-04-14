package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// DTO za login
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthenticationRequest {

    private String email;
    private String password;


}