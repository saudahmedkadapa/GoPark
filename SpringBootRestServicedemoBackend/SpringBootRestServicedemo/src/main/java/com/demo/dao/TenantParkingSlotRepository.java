package com.demo.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.TenantParkingSlot;

@Repository
public interface TenantParkingSlotRepository extends JpaRepository<TenantParkingSlot, Integer> {
    // You can define custom query methods here if needed
}
