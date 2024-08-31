package com.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demo.beans.Complex;
import com.demo.beans.ParkingLevel;
import com.demo.service.ParkingLevelService;

import java.util.List;

@RestController
@RequestMapping("/api/parking-levels")
@CrossOrigin(origins = "http://localhost:3000")
public class ParkingLevelController {

    @Autowired
    private ParkingLevelService parkingLevelService;

    @PostMapping
    public ParkingLevel createParkingLevel(@RequestBody ParkingLevel parkingLevel) {
        return parkingLevelService.saveParkingLevel(parkingLevel);
    }

    @GetMapping
    public List<ParkingLevel> getAllParkingLevels() {
        return parkingLevelService.getAllParkingLevels();
    }

    
//    @GetMapping("/parking-levels/{complexId}")
//    public List<ParkingLevel> getParkingLevelsByComplexId(@PathVariable Complex complex) {
//        return parkingLevelService.getParkingLevelsByComplexId(complex.getComplexId());
//    }
    
//    @GetMapping("/{getcomplexlevel/{complexId}}")
//    public List<ParkingLevel> getParkingLevelsByComplexId(@RequestParam int complexId) {
//        return parkingLevelService.getLevelsByComplexId(complexId);
//    }
    
    
    
    @GetMapping("/bycomplexid/{complexId}")
    public List<ParkingLevel> getParkingLevelsByComplexId(@PathVariable int complexId) {
        return parkingLevelService.getParkingLevelsByComplexId(complexId);
    }

    @GetMapping("/bycomplexid/{complexId}/{levelNumber}")
    public ParkingLevel getParkingLevelByComplexIdAndLevelNumber(@PathVariable int complexId, @PathVariable int levelNumber) {
        return parkingLevelService.getParkingLevelByComplexIdAndLevelNumber(complexId, levelNumber);
    }
    @GetMapping("/{id}")
    public ParkingLevel getParkingLevelById(@PathVariable int id) {
        return (ParkingLevel) parkingLevelService.getParkingLevelById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteParkingLevel(@PathVariable int id) {
        parkingLevelService.deleteParkingLevelById(id);
    }
}

