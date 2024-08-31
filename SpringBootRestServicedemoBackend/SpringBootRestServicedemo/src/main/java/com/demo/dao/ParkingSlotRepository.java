package com.demo.dao;

import com.demo.beans.ParkingSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingSlotRepository extends JpaRepository<ParkingSlot, Integer> {
    // Custom query methods can be added here if needed
	
}
