package com.demo.service;


import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.ParkingUserBooking;
import com.demo.dao.ParkingUserBookingRepository;

@Service
public class ParkingUserBookingServiceImpl implements ParkingUserBookingService {

    @Autowired
    private ParkingUserBookingRepository bookingRepository;

    @Override
    public ParkingUserBooking saveBooking(ParkingUserBooking booking) {
        return bookingRepository.save(booking);
    }
    
//    public void saveBooking(ParkingUserBooking request) {
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
//        
//        LocalDateTime startDateTime = LocalDateTime.parse(request.getBookingStartDateTime(), formatter);
//        LocalDateTime endDateTime = LocalDateTime.parse(request.getBookingEndDateTime(), formatter);
//
//        // Convert LocalDateTime to Timestamp if needed for SQL
//        Timestamp startTimestamp = Timestamp.valueOf(startDateTime);
//        Timestamp endTimestamp = Timestamp.valueOf(endDateTime);
//
//        // Proceed with saving to database
//    }

    @Override
    public Optional<ParkingUserBooking> findBookingById(Integer bookingId) {
        return bookingRepository.findById(bookingId);
    }

    @Override
    public List<ParkingUserBooking> findAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public void deleteBooking(Integer bookingId) {
        bookingRepository.deleteById(bookingId);
    }

//	@Override
//	public ParkingUserBooking saveBooking(ParkingUserBooking booking) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}

