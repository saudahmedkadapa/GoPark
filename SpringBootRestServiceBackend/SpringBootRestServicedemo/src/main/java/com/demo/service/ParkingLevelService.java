package com.demo.service;

	import com.demo.beans.ParkingLevel;

	import java.util.List;

	public interface ParkingLevelService {
	    
		ParkingLevel save(ParkingLevel parkingLevel);

	    List<ParkingLevel> getAllParkingLevels();

	    ParkingLevel getParkingLevelById(int id);

	    void deleteParkingLevelById(int id);

		ParkingLevel saveParkingLevel(ParkingLevel parkingLevel);

		//List<ParkingLevel> getParkingLevelsByComplexId(int complexId);
		
		 List<ParkingLevel> getParkingLevelsByComplexId(int complexId);
		    ParkingLevel getParkingLevelByComplexIdAndLevelNumber(int complexId, int levelNumber);
		
		
		
	}


