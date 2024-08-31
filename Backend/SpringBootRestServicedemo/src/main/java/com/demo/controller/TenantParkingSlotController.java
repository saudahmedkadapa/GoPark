package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.beans.TenantParkingSlot;
import com.demo.service.TenantParkingSlotService;

import java.util.List;

@RestController
@RequestMapping("/api/tenant-parking-slots")
public class TenantParkingSlotController {

    @Autowired
    private TenantParkingSlotService tenantParkingSlotService;

    @PostMapping
    public ResponseEntity<TenantParkingSlot> createTenantParkingSlot(@RequestBody TenantParkingSlot tenantParkingSlot) {
        TenantParkingSlot savedTenantParkingSlot = tenantParkingSlotService.saveTenantParkingSlot(tenantParkingSlot);
        return new ResponseEntity<>(savedTenantParkingSlot, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TenantParkingSlot>> getAllTenantParkingSlots() {
        List<TenantParkingSlot> tenantParkingSlots = tenantParkingSlotService.getAllTenantParkingSlots();
        return new ResponseEntity<>(tenantParkingSlots, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenantParkingSlot> getTenantParkingSlotById(@PathVariable int id) {
        TenantParkingSlot tenantParkingSlot = tenantParkingSlotService.getTenantParkingSlotById(id);
        if (tenantParkingSlot != null) {
            return new ResponseEntity<>(tenantParkingSlot, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTenantParkingSlot(@PathVariable int id) {
        tenantParkingSlotService.deleteTenantParkingSlot(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
