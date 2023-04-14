package com.example.demo.DTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class SubscriberDTO {

    @NotBlank(message = "Invalid jmbg: Empty jmbg")
    @NotNull(message = "Invalid jmbg: jmbg is NULL")
    @Size(min = 13, max = 13, message = "Invalid jmbg: Must be of 13 characters")
    public String jmbg;

    @NotBlank(message = "Invalid Name: Empty name")
    @NotNull(message = "Invalid Name: Name is NULL")
    @Size(min = 2, max = 30, message = "Invalid Name: Must be of 3 - 30 characters")
    public String name;

    @NotBlank(message = "Invalid surname: Empty surname")
    @NotNull(message = "Invalid surname: surname is NULL")
    @Size(min = 2, max = 30, message = "Invalid surname: Must be of 3 - 30 characters")
    public String surname;

    @NotBlank(message = "Invalid gender: Empty gender")
    @NotNull(message = "Invalid gender: gender is NULL")
    public String gender;

    @NotBlank(message = "Invalid birth: Empty birth")
    @NotNull(message = "Invalid birth: birth is NULL")
    public String birth;

    @NotBlank(message = "Invalid materialStatus: Empty materialStatus")
    @NotNull(message = "Invalid materialStatus: materialStatus is NULL")
    public String materialStatus;
    public long addressId;
    public long id;
}
