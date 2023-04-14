package com.example.demo.mapper;

import com.example.demo.DTO.ProposalDTO;
import com.example.demo.model.Proposal;
import com.example.demo.model.enums.ProposalStatus;
import com.example.demo.util.DateFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

import static com.example.demo.util.DateFormatter.dateTimeFormatter;

@Component
public class ProposalMapper implements IMapper<Proposal, ProposalDTO>{

    @Autowired
    SubscriberMapper subscriberMapper;
    @Autowired
    DriverMapper driverMapper;
    @Autowired
    CarMapper carMapper;
    @Autowired
    InsurancePlanMapper insurancePlanMapper;
    @Override
    public Proposal ToModel(ProposalDTO proposalDTO) {
        Proposal proposal = new Proposal();
        if(proposalDTO.id != null)proposal.setId(proposalDTO.id);
        if(proposalDTO.subscriber != null) proposal.setSubscriber(subscriberMapper.ToModel(proposalDTO.subscriber));
        if(proposalDTO.pickedDrivers != null) proposal.setDrivers(driverMapper.ToModel(proposalDTO.pickedDrivers));
        if(proposalDTO.car != null) proposal.setCar(carMapper.ToModel(proposalDTO.car));
        if(proposalDTO.insurancePlan != null) proposal.setInsurancePlan(insurancePlanMapper.ToModel(proposalDTO.insurancePlan));
        if(proposalDTO.licensePlate != null) proposal.setLicenceNum(proposalDTO.licensePlate);
        if(proposalDTO.amount != null) proposal.setAmount(proposalDTO.amount);
        proposal.setProposalStatus(ProposalStatus.valueOf(proposalDTO.proposalStatus));
        proposal.setCreationDate(DateFormatter.convertStringToLocalDateTime(proposalDTO.creationDate));
        proposal.setIsDeleted(false);
        return proposal;
    }

    @Override
    public List<Proposal> ToModel(List<ProposalDTO> dto) {
        List<Proposal> proposals = new ArrayList<Proposal>();
        for(ProposalDTO proposalDTO : dto){
            proposals.add(ToModel(proposalDTO));
        }
        return proposals;
    }

    @Override
    public ProposalDTO ToDTO(Proposal proposal) {
        ProposalDTO proposalDTO = new ProposalDTO();
        proposalDTO.id = proposal.getId();
        if(proposal.getSubscriber() != null) proposalDTO.subscriber = subscriberMapper.ToDTO(proposal.getSubscriber());
        if(proposal.getDrivers() != null) proposalDTO.pickedDrivers = driverMapper.ToDTO(proposal.getDrivers());
        if(proposal.getCar() != null) proposalDTO.car = carMapper.ToDTO(proposal.getCar());
        if(proposal.getInsurancePlan() != null) proposalDTO.insurancePlan = insurancePlanMapper.ToDTO(proposal.getInsurancePlan());
        if(proposal.getAmount() != null) proposalDTO.amount = proposal.getAmount();
        if(proposal.getLicenceNum() != "") proposalDTO.licensePlate = proposal.getLicenceNum();
        proposalDTO.creationDate = proposal.getCreationDate().format(dateTimeFormatter);
        proposalDTO.proposalStatus = proposal.getProposalStatus().toString();
        return proposalDTO;
    }

    @Override
    public List<ProposalDTO> ToDTO(List<Proposal> model) {
        List<ProposalDTO> proposals = new ArrayList<ProposalDTO>();
        for(Proposal proposal : model){
            proposals.add(ToDTO(proposal));
        }
        return proposals;
    }
}
