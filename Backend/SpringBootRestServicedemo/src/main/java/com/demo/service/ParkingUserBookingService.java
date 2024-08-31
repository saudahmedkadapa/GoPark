package com.demo.service;



import java.util.List;
import java.util.Optional;

import com.demo.beans.ParkingUserBooking;
import com.demo.dto.BookingRequest;

public interface ParkingUserBookingService {

    ParkingUserBooking saveBooking(ParkingUserBooking booking);

    Optional<ParkingUserBooking> findBookingById(Integer bookingId);

    List<ParkingUserBooking> findAllBookings();

    void deleteBooking(Integer bookingId);
}
