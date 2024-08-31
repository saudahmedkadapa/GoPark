package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.TenantPayment;
import com.demo.dao.TenantPaymentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TenantPaymentServiceImpl implements TenantPaymentService {

    @Autowired
    private TenantPaymentRepository tenantPaymentRepository;

    @Override
    public TenantPayment saveTenantPayment(TenantPayment tenantPayment) {
        return tenantPaymentRepository.save(tenantPayment);
    }

    @Override
    public Optional<TenantPayment> getTenantPaymentById(Integer id) {
        return tenantPaymentRepository.findById(id);
    }

    @Override
    public List<TenantPayment> getAllTenantPayments() {
        return tenantPaymentRepository.findAll();
    }

    @Override
    public void deleteTenantPaymentById(Integer id) {
        tenantPaymentRepository.deleteById(id);
    }
}
