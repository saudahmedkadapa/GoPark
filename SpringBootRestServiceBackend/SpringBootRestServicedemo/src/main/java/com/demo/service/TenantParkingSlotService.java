package com.demo.service;

import java.util.List;

import com.demo.beans.TenantParkingSlot;

public interface TenantParkingSlotService {
    TenantParkingSlot saveTenantParkingSlot(TenantParkingSlot tenantParkingSlot);
    List<TenantParkingSlot> getAllTenantParkingSlots();
    TenantParkingSlot getTenantParkingSlotById(int id);
    void deleteTenantParkingSlot(int id);
}

