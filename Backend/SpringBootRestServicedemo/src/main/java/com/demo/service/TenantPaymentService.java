package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.TenantPayment;

public interface TenantPaymentService {
    TenantPayment saveTenantPayment(TenantPayment tenantPayment);
    Optional<TenantPayment> getTenantPaymentById(Integer id);
    List<TenantPayment> getAllTenantPayments();
    void deleteTenantPaymentById(Integer id);
}
