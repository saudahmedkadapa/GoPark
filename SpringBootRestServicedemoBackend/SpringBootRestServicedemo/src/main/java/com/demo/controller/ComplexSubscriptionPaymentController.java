package com.demo.controller;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;

import com.demo.beans.ComplexSubscriptionPayment;
import com.demo.service.ComplexSubscriptionPaymentService;

import java.util.List;
	import java.util.Optional;

	@RestController
	@RequestMapping("/api/payments")
	public class ComplexSubscriptionPaymentController {

	    @Autowired
	    private ComplexSubscriptionPaymentService service;

	    @GetMapping
	    public List<ComplexSubscriptionPayment> getAllPayments() {
	        return service.findAll();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<ComplexSubscriptionPayment> getPaymentById(@PathVariable int id) {
	        Optional<ComplexSubscriptionPayment> payment = service.findById(id);
	        if (payment.isPresent()) {
	            return ResponseEntity.ok(payment.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @PostMapping
	    public ComplexSubscriptionPayment createPayment(@RequestBody ComplexSubscriptionPayment payment) {
	        return service.save(payment);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<ComplexSubscriptionPayment> updatePayment(@PathVariable int id, @RequestBody ComplexSubscriptionPayment paymentDetails) {
	        Optional<ComplexSubscriptionPayment> payment = service.findById(id);
	        if (payment.isPresent()) {
	            ComplexSubscriptionPayment existingPayment = payment.get();
	            existingPayment.setComplexId(paymentDetails.getComplexId());
	            existingPayment.setStatus(paymentDetails.getStatus());
	            existingPayment.setPaymentDateTime(paymentDetails.getPaymentDateTime());
	            existingPayment.setAmount(paymentDetails.getAmount());
	            final ComplexSubscriptionPayment updatedPayment = service.save(existingPayment);
	            return ResponseEntity.ok(updatedPayment);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deletePayment(@PathVariable int id) {
	        service.deleteById(id);
	        return ResponseEntity.noContent().build();
	    }
	}


