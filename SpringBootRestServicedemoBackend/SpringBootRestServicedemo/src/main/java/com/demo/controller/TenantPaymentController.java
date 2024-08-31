package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.TenantPayment;
import com.demo.service.TenantPaymentService;

@RestController
@RequestMapping("/api/tenant-payments")
public class TenantPaymentController {

    @Autowired
    private TenantPaymentService tenantPaymentService;

    @PostMapping
    public ResponseEntity<TenantPayment> createTenantPayment(@RequestBody TenantPayment tenantPayment) {
        TenantPayment savedTenantPayment = tenantPaymentService.saveTenantPayment(tenantPayment);
        return ResponseEntity.ok(savedTenantPayment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenantPayment> getTenantPaymentById(@PathVariable Integer id) {
        Optional<TenantPayment> tenantPayment = tenantPaymentService.getTenantPaymentById(id);
        return tenantPayment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<TenantPayment>> getAllTenantPayments() {
        List<TenantPayment> tenantPayments = tenantPaymentService.getAllTenantPayments();
        return ResponseEntity.ok(tenantPayments);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTenantPaymentById(@PathVariable Integer id) {
        tenantPaymentService.deleteTenantPaymentById(id);
        return ResponseEntity.noContent().build();
    }
}
