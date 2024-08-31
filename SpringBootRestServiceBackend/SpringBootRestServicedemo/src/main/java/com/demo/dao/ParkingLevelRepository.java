package com.demo.dao;

	import com.demo.beans.ParkingLevel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

	@Repository
	public interface ParkingLevelRepository extends JpaRepository<ParkingLevel, Integer> {

		//List<ParkingLevel> findByComplexId(int complexId);
	    // Custom query methods can be added here if needed
		
		List<ParkingLevel> findByComplexId(int complexId);
	    ParkingLevel findByComplexIdAndLevelNumber(int complexId, int levelNumber);
		
	}


