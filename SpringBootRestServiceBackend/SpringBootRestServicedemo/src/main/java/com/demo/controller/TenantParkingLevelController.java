package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.beans.TenantParkingLevel;
import com.demo.service.TenantParkingLevelService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/levels")
public class TenantParkingLevelController {

    @Autowired
    private TenantParkingLevelService levelService;

    @PostMapping
    public ResponseEntity<TenantParkingLevel> createLevel(@RequestBody TenantParkingLevel level) {
        TenantParkingLevel savedLevel = levelService.saveLevel(level);
        return ResponseEntity.ok(savedLevel);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenantParkingLevel> getLevelById(@PathVariable("id") Integer levelId) {
        Optional<TenantParkingLevel> level = levelService.findLevelById(levelId);
        return level.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<TenantParkingLevel>> getAllLevels() {
        List<TenantParkingLevel> levels = levelService.findAllLevels();
        return ResponseEntity.ok(levels);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLevel(@PathVariable("id") Integer levelId) {
        levelService.deleteLevel(levelId);
        return ResponseEntity.noContent().build();
    }
}
