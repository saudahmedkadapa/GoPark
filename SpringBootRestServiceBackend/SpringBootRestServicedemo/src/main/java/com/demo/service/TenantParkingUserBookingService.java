package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.TenantParkingUserBooking;

public interface TenantParkingUserBookingService {

    List<TenantParkingUserBooking> findAll();

    Optional<TenantParkingUserBooking> findById(int id);

    TenantParkingUserBooking save(TenantParkingUserBooking booking);

    void deleteById(int id);
}
