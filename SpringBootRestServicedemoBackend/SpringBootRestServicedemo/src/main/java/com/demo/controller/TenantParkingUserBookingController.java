package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.TenantParkingUserBooking;
import com.demo.service.TenantParkingUserBookingService;

@RestController
@RequestMapping("/api/tenantbookings")
public class TenantParkingUserBookingController {

    private final TenantParkingUserBookingService service;

    @Autowired
    public TenantParkingUserBookingController(TenantParkingUserBookingService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TenantParkingUserBooking>> getAllBookings() {
        List<TenantParkingUserBooking> bookings = service.findAll();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenantParkingUserBooking> getBookingById(@PathVariable int id) {
        Optional<TenantParkingUserBooking> booking = service.findById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TenantParkingUserBooking> createBooking(@RequestBody TenantParkingUserBooking booking) {
        TenantParkingUserBooking savedBooking = service.save(booking);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TenantParkingUserBooking> updateBooking(@PathVariable int id, @RequestBody TenantParkingUserBooking booking) {
        if (service.findById(id).isPresent()) {
            booking.setTenantBookingId(id);
            TenantParkingUserBooking updatedBooking = service.save(booking);
            return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable int id) {
        if (service.findById(id).isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
