package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.ParkingSlot;
import com.demo.dao.ParkingSlotRepository;

@Service
public class ParkingSlotServiceImpl implements ParkingSlotService {

    @Autowired
    private ParkingSlotRepository parkingSlotRepository;

    @Override
    public ParkingSlot saveParkingSlot(ParkingSlot parkingSlot) {
        return parkingSlotRepository.save(parkingSlot);
    }

    @Override
    public List<ParkingSlot> getAllParkingSlots() {
        return parkingSlotRepository.findAll();
    }

    
    
    @Override
    public ParkingSlot getParkingSlotById(int id) {
        return parkingSlotRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteParkingSlotById(int id) {
        parkingSlotRepository.deleteById(id);
    }
}
