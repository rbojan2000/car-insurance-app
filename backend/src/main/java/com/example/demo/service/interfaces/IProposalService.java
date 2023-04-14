package com.example.demo.service.interfaces;

import com.example.demo.model.Proposal;

public interface IProposalService extends ICRUDService<Proposal>{
    int findNumberOfProposals();
}
