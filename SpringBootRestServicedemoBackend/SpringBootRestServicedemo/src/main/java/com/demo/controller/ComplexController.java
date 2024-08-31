package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Complex;
import com.demo.beans.ParkingLevel;
import com.demo.beans.TenantParkingLevel;
import com.demo.dto.ComplexDTO;
import com.demo.service.ComplexService;
import com.demo.service.ParkingLevelService;
import com.demo.service.TenantParkingLevelService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ComplexController {

    @Autowired
    private ComplexService complexService;
    
    @Autowired
    private ParkingLevelService parkingLevelService;

    @Autowired
    private TenantParkingLevelService tenantParkingLevelService;

    @GetMapping("/getcomplexes")
    public ResponseEntity<List<Complex>> getComplexes() {
        List<Complex> complexes = complexService.findAll();
        return ResponseEntity.ok(complexes);
    }

    @GetMapping("/getcomplex/{id}")
    public ResponseEntity<Complex> getComplexById(@PathVariable int id) {
        Complex complex = complexService.findById(id);
        return complex != null ? ResponseEntity.ok(complex) : ResponseEntity.notFound().build();
    }
    
    
//    @GetMapping("/getcomplex/{id}")
//    public ResponseEntity<Complex> getComplexById(@PathVariable int id) {
//        System.out.println("Fetching complex with ID: " + id); // Add logging
//        Complex complex = complexService.findById(id);
//        if (complex != null) {
//            return ResponseEntity.ok(complex);
//        } else {
//            System.out.println("Complex not found for ID: " + id); // Add logging
//            return ResponseEntity.notFound().build();
//        }
//    }


    @PostMapping("/addcomplex")
    public ResponseEntity<String> addComplex(@Validated @RequestBody ComplexDTO complexDTO) {
    	try {
            // Save Complex
            Complex complex = new Complex();
            complex.setComplexName(complexDTO.getComplexName());
            complex.setComplexAddress(complexDTO.getComplexAddress());
            complex.setTotalParkingLevels(complexDTO.getTotalParkingLevels());
            complex.setTotalTenantParkingLevels(complexDTO.getTotalTenantParkingLevels());
            complex.setComplexUsername(complexDTO.getComplexUsername());
            complex.setComplexPassword(complexDTO.getComplexPassword());
            complex = complexService.save(complex);

            // Save Parking Levels
            for (Integer i = 1; i <= complexDTO.getTotalParkingLevels(); i++) {
                ParkingLevel parkingLevel = new ParkingLevel();
                parkingLevel.setComplexId(complexDTO.getComplexId());
                parkingLevel.setLevelNumber(i);
                parkingLevel.setParkingLevelCapacity(complexDTO.getParkingLevelCapacity());
                parkingLevelService.save(parkingLevel);
            }

            // Save Tenant Parking Levels
            for (Integer i = 1; i <= complexDTO.getTotalTenantParkingLevels(); i++) {
                TenantParkingLevel tenantParkingLevel = new TenantParkingLevel();
                tenantParkingLevel.setComplex(complex);
                tenantParkingLevel.setTenantLevelNumber(i);
                tenantParkingLevel.setTenantParkingLevelCapacity(complexDTO.getTenantParkingLevelCapacity());
                tenantParkingLevelService.save(tenantParkingLevel);
            }

            // Return success response
            return new ResponseEntity<>("Complex registered successfully", HttpStatus.CREATED);

        } catch (Exception e) {
            // Handle exceptions and return error response
            return new ResponseEntity<>("Error registering complex: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    
    }
    
    
    
    
    
    
    
    
//    public ResponseEntity<Complex> addComplex(@RequestBody Complex complex) {
//        Complex savedComplex = complexService.save(complex);
//        return ResponseEntity.ok(savedComplex);
//    }

    @PutMapping("/updatecomplex/{id}")
    public ResponseEntity<Complex> updateComplex(@PathVariable int id, @RequestBody Complex complex) {
        if (complexService.findById(id) != null) {
            Complex updatedComplex = complexService.save(complex);
            return ResponseEntity.ok(updatedComplex);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deletecomplex/{id}")
    public ResponseEntity<Void> deleteComplex(@PathVariable int id) {
        if (complexService.findById(id) != null) {
            complexService.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
