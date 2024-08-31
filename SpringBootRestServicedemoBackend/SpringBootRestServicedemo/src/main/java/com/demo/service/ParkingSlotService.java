package com.demo.service;

import com.demo.beans.ParkingSlot;

import java.util.List;

public interface ParkingSlotService {
    
    ParkingSlot saveParkingSlot(ParkingSlot parkingSlot);

    List<ParkingSlot> getAllParkingSlots();

    ParkingSlot getParkingSlotById(int id);

    void deleteParkingSlotById(int id);

    
}

