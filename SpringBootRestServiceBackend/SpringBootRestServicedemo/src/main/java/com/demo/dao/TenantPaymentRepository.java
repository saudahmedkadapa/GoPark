package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.TenantPayment;

@Repository
public interface TenantPaymentRepository extends JpaRepository<TenantPayment, Integer> {
    // You can define custom queries here if needed
}
