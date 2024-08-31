package com.demo.controller;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.ParkingUserBooking;
import com.demo.dto.BookingRequest;
import com.demo.service.ParkingUserBookingService;

@RestController
@RequestMapping("/api/userbookings")
@CrossOrigin(origins = "http://localhost:3000")
public class ParkingUserBookingController {

    @Autowired
    private ParkingUserBookingService bookingService;
    
    

    @PostMapping
    public ResponseEntity<ParkingUserBooking> createBooking(@RequestBody ParkingUserBooking booking) {
        ParkingUserBooking savedBooking = bookingService.saveBooking(booking);
        return ResponseEntity.ok(savedBooking);
    }
    
    
    
//    @PostMapping
//    public ResponseEntity<String> createBooking(@RequestBody BookingRequest request) {
//        // Debugging line
//        System.out.println("Received request: " + request);
//
//        try {
//            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
//            LocalDateTime startDateTime = LocalDateTime.parse(request.getBookingStartDateTime(), formatter);
//            LocalDateTime endDateTime = LocalDateTime.parse(request.getBookingEndDateTime(), formatter);
//
//            Timestamp startTimestamp = Timestamp.valueOf(startDateTime);
//            Timestamp endTimestamp = Timestamp.valueOf(endDateTime);
//
//            // Convert parkingSlotId to Integer
//            //Integer parkingSlotId = Integer.parseInt(request.getParkingSlotId());
//
//            // Create a Booking entity or DTO and save to database
//            BookingRequest booking = new BookingRequest();
//            booking.setUserId(request.getUserId());
//            booking.setParkingSlotId(request.getParkingSlotId());
//            booking.setBookingStartDateTime(request.getBookingStartDateTime());
//            booking.setBookingEndDateTime(request.getBookingEndDateTime());
//            booking.setBookingVehicleType(request.getBookingVehicleType());
//            booking.setBookingVehiclePlateNo(request.getBookingVehiclePlateNo());
//
//            // Save booking to database
//            bookingService.saveBooking(booking);
//
//            return ResponseEntity.ok("Booking successfully created");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating booking");
//        }
//    }

    @GetMapping("/{id}")
    public ResponseEntity<ParkingUserBooking> getBookingById(@PathVariable("id") Integer bookingId) {
        Optional<ParkingUserBooking> booking = bookingService.findBookingById(bookingId);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<ParkingUserBooking>> getAllBookings() {
        List<ParkingUserBooking> bookings = bookingService.findAllBookings();
        return ResponseEntity.ok(bookings);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable("id") Integer bookingId) {
        bookingService.deleteBooking(bookingId);
        return ResponseEntity.noContent().build();
    }
}
