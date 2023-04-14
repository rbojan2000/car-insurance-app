package com.example.demo.service.implementations;

import com.example.demo.model.Payment;
import com.example.demo.model.Policy;
import com.example.demo.model.Proposal;
import com.example.demo.model.enums.ProposalStatus;
import com.example.demo.repository.ProposalRepository;
import com.example.demo.service.interfaces.IProposalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
@Service
public class ProposalService implements IProposalService {

    @Autowired
    private ProposalRepository proposalRepository;
    @Autowired
    private PolicyService policyService;

    @Override
    public Proposal create(Proposal proposal) {
        proposal.setProposalStatus(ProposalStatus.INITIALIZED);
        proposal.setCreationDate(LocalDateTime.now());
        proposal.setIsDeleted(false);
        return this.proposalRepository.save(proposal);
    }

    @Override
    public Proposal update(Proposal proposal) {
        checkStatus(proposal);
        return this.proposalRepository.save(proposal);
    }

    @Override
    public Proposal delete(long id) {
        Proposal proposalToDelete = this.proposalRepository.findById(id).get();
        proposalToDelete.setIsDeleted(true);
        return this.proposalRepository.save(proposalToDelete);
    }

    @Override
    public List<Proposal> getAll(int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex-1, pageSize);
        return this.proposalRepository.findAll(pageable).toList();
    }

    @Override
    public Proposal getById(long id) {
        return this.proposalRepository.findById(id).get();
    }

    public int findNumberOfProposals(){
        return this.proposalRepository.findByIsDeletedFalse().size();
    }

    public void addPayment(Payment payment, long id) {
        Proposal proposal = getById(id);
        proposal.getPolicy().setPayment(payment);
        proposal.setProposalStatus(ProposalStatus.PAID);
        update(proposal);
    }

    public void confirm(long id){
        Proposal proposal = getById(id);
        proposal.setProposalStatus(ProposalStatus.CONFIRMED);
        Policy policy = new Policy();
        policy.setDateSigned(LocalDateTime.now());
        policy.setIsDeleted(false);
        proposal.setPolicy(policy);
        update(proposal);
    }

    private void checkStatus(Proposal proposal) {
        if(proposal.getSubscriber() == null){
            proposal.setProposalStatus(ProposalStatus.INITIALIZED);
        }else if(proposal.getCar() == null){
            proposal.setProposalStatus(ProposalStatus.SUBSCRIBER_ADDED);
        }else if(proposal.getDrivers() == null){
            proposal.setProposalStatus(ProposalStatus.CAR_ADDED);
        } else if(proposal.getInsurancePlan() == null){
            proposal.setProposalStatus(ProposalStatus.DRIVERS_ADDED);
        } else if(proposal.getProposalStatus() != ProposalStatus.CONFIRMED && proposal.getProposalStatus() != ProposalStatus.PAID){
            proposal.setProposalStatus(ProposalStatus.INSURANCE_PLAN_ADDED);
        }
    }
}
