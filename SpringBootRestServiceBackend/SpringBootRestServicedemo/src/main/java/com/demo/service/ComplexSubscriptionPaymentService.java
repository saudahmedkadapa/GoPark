package com.demo.service;

import java.util.List;
import java.util.Optional;
import com.demo.beans.ComplexSubscriptionPayment;

	public interface ComplexSubscriptionPaymentService {
	    List<ComplexSubscriptionPayment> findAll();
	    Optional<ComplexSubscriptionPayment> findById(int id);
	    ComplexSubscriptionPayment save(ComplexSubscriptionPayment payment);
	    void deleteById(int id);
	}


