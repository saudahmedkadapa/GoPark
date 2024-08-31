package com.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.TenantParkingSlot;
import com.demo.dao.TenantParkingSlotRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TenantParkingSlotServiceImpl implements TenantParkingSlotService {

    @Autowired
    private TenantParkingSlotRepository tenantParkingSlotRepository;

    @Override
    public TenantParkingSlot saveTenantParkingSlot(TenantParkingSlot tenantParkingSlot) {
        return tenantParkingSlotRepository.save(tenantParkingSlot);
    }

    @Override
    public List<TenantParkingSlot> getAllTenantParkingSlots() {
        return tenantParkingSlotRepository.findAll();
    }

    @Override
    public TenantParkingSlot getTenantParkingSlotById(int id) {
        Optional<TenantParkingSlot> tenantParkingSlot = tenantParkingSlotRepository.findById(id);
        return tenantParkingSlot.orElse(null);
    }

    @Override
    public void deleteTenantParkingSlot(int id) {
        tenantParkingSlotRepository.deleteById(id);
    }
}

