package com.demo.service;




	import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.ParkingLevel;
import com.demo.dao.ParkingLevelRepository;

	@Service
	public class ParkingLevelServiceImpl implements ParkingLevelService {

	    @Autowired
	    private ParkingLevelRepository parkingLevelRepository;

	    @Override
	    public ParkingLevel saveParkingLevel(ParkingLevel parkingLevel) {
	        return parkingLevelRepository.save(parkingLevel);
	    }
	    
	    @Override
	    public ParkingLevel save(ParkingLevel parkingLevel) {
	        return parkingLevelRepository.save(parkingLevel);
	    }
	    
//	    public List<ParkingLevel> getParkingLevelsByComplexId(int complexId) {
//	        return parkingLevelRepository.findByComplexId(complexId);
//	    }
	    
	    
	    @Override
	    public List<ParkingLevel> getParkingLevelsByComplexId(int complexId) {
	        return parkingLevelRepository.findByComplexId(complexId);
	    }

	    @Override
	    public ParkingLevel getParkingLevelByComplexIdAndLevelNumber(int complexId, int levelNumber) {
	        return parkingLevelRepository.findByComplexIdAndLevelNumber(complexId, levelNumber);
	    }

	    @Override
	    public List<ParkingLevel> getAllParkingLevels() {
	        return parkingLevelRepository.findAll();
	    }

	    @Override
	    public ParkingLevel getParkingLevelById(int id) {
	        return  parkingLevelRepository.findById(id).orElse(null);
	    }

	    @Override
	    public void deleteParkingLevelById(int id) {
	        parkingLevelRepository.deleteById(id);
	    }
	}


