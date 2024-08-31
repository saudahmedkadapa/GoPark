package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.ComplexSubscriptionPayment;
import com.demo.dao.ComplexSubscriptionPaymentDao;

import java.util.List;
import java.util.Optional;

@Service
public class ComplexSubscriptionPaymentServiceImpl implements ComplexSubscriptionPaymentService {

    @Autowired
    private ComplexSubscriptionPaymentDao dao;

    @Override
    public List<ComplexSubscriptionPayment> findAll() {
        return dao.findAll();
    }

    @Override
    public Optional<ComplexSubscriptionPayment> findById(int id) {
        return dao.findById(id);
    }

    @Override
    public ComplexSubscriptionPayment save(ComplexSubscriptionPayment payment) {
        return dao.save(payment);
    }

    @Override
    public void deleteById(int id) {
        dao.deleteById(id);
    }
}
