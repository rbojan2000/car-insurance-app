package com.example.demo.service.implementations;

import com.example.demo.model.Policy;
import com.example.demo.repository.PolicyRepository;
import com.example.demo.service.interfaces.IPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PolicyService implements IPolicyService {
    @Autowired
    private PolicyRepository policyRepository;
    @Override
    public Policy create(Policy policy){
        return policyRepository.save(policy);
    }

    @Override
    public Policy update(Policy policy) {
        return policyRepository.save(policy);
    }

    @Override
    public Policy delete(long id) {
        return null;
    }

    @Override
    public List<Policy> getAll(int pageIndex, int pageSize) {
        return null;
    }

    @Override
    public Policy getById(long id) {
        return null;
    }
}
