package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.TenantParkingUserBooking;

@Repository
public interface TenantParkingUserBookingRepository extends JpaRepository<TenantParkingUserBooking, Integer> {
}
