package com.demo.controller;
import com.demo.beans.ParkingSlot;
import com.demo.service.ParkingSlotService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parking-slots")
public class ParkingSlotController {

    @Autowired
    private ParkingSlotService parkingSlotService;

    @PostMapping
    public ParkingSlot createParkingSlot(@RequestBody ParkingSlot parkingSlot) {
        return parkingSlotService.saveParkingSlot(parkingSlot);
    }

    @GetMapping
    public List<ParkingSlot> getAllParkingSlots() {
        return parkingSlotService.getAllParkingSlots();
    }

    @GetMapping("/{id}")
    public ParkingSlot getParkingSlotById(@PathVariable int id) {
        return parkingSlotService.getParkingSlotById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteParkingSlot(@PathVariable int id) {
        parkingSlotService.deleteParkingSlotById(id);
    }
}
