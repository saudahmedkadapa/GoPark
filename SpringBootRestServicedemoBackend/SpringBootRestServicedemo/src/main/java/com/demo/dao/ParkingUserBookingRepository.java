package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.ParkingUserBooking;

@Repository
public interface ParkingUserBookingRepository extends JpaRepository<ParkingUserBooking, Integer> {
    // You can define custom queries here if needed
}
