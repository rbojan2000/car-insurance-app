package com.example.demo.controller;

import com.example.demo.DTO.PaymentDTO;
import com.example.demo.DTO.ProposalDTO;
import com.example.demo.DTO.ProposalListDTO;
import com.example.demo.mapper.PaymentMapper;
import com.example.demo.mapper.ProposalMapper;
import com.example.demo.model.Proposal;
import com.example.demo.service.implementations.ProposalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proposals")
@CrossOrigin(origins = "http://localhost:8080")
public class ProposalController {
    @Autowired
    private ProposalService proposalService;
    @Autowired
    private ProposalMapper proposalMapper;
    @Autowired
    private PaymentMapper paymentMapper;

    @GetMapping
    @PreAuthorize("hasRole('SALES_AGENT')")
    public ResponseEntity<ProposalListDTO> getAllProposals(@RequestParam("pageIndex") int pageIndex, @RequestParam("pageSize") int pageSize){
        List<ProposalDTO> proposals = proposalMapper.ToDTO(proposalService.getAll(pageIndex,pageSize));
        int count = proposalService.findNumberOfProposals();
        return new ResponseEntity<>(new ProposalListDTO(count, proposals), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createProposal(){
        return new ResponseEntity<>(this.proposalMapper.ToDTO(this.proposalService.create(new Proposal())), HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> editProposal(@RequestBody ProposalDTO proposalDTO){
        return new ResponseEntity<>((this.proposalMapper.ToDTO(this.proposalService.update(this.proposalMapper.ToModel(proposalDTO)))), HttpStatus.OK);
    }
    @PutMapping("payment")
    public ResponseEntity<?> addPayment(@RequestBody PaymentDTO paymentDTO){
        this.proposalService.addPayment(this.paymentMapper.ToModel(paymentDTO), paymentDTO.id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("confirm")
    public ResponseEntity<?> confirm(@RequestParam("id") long id){
        this.proposalService.confirm(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
