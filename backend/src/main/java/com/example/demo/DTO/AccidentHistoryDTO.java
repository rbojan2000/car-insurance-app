package com.example.demo.DTO;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AccidentHistoryDTO {
    public Long id;
    public String timeHappened;
    public Boolean wasResponsible;
    public String description;
    public Long driverId;
    public String driversName;
    public String driversSurname;
    public String driversJMBG;
}
