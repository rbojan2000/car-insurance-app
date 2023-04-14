package com.example.demo.DTO;

import lombok.AllArgsConstructor;

import java.util.List;
@AllArgsConstructor
public class ProposalListDTO {
    public int count;
    public List<ProposalDTO> proposals;

}
