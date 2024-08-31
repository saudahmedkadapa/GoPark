package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.TenantParkingUserBooking;
import com.demo.dao.TenantParkingUserBookingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TenantParkingUserBookingServiceImpl implements TenantParkingUserBookingService {

    private final TenantParkingUserBookingRepository repository;

    @Autowired
    public TenantParkingUserBookingServiceImpl(TenantParkingUserBookingRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<TenantParkingUserBooking> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<TenantParkingUserBooking> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public TenantParkingUserBooking save(TenantParkingUserBooking booking) {
        return repository.save(booking);
    }

    @Override
    public void deleteById(int id) {
        repository.deleteById(id);
    }
}

