package com.example.demo.DTO;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class AccidentHistoryListDTO {
    public int count;
    public List<AccidentHistoryDTO> accidentHistories;
}
