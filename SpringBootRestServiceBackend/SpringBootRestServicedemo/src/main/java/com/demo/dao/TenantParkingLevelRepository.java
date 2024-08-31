package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.ParkingLevel;
import com.demo.beans.TenantParkingLevel;

@Repository
public interface TenantParkingLevelRepository extends JpaRepository<TenantParkingLevel, Integer> {
    // Additional custom queries can be defined here
	//List<ParkingLevel> findByComplexId(int complexId);
}

