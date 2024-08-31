package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.ComplexSubscriptionPayment;


	@Repository
	public interface ComplexSubscriptionPaymentDao extends JpaRepository<ComplexSubscriptionPayment, Integer> {
	}


