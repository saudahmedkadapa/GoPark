package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.TenantParkingLevel;
import com.demo.dao.TenantParkingLevelRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TenantParkingLevelServiceImpl implements TenantParkingLevelService {

    @Autowired
    private TenantParkingLevelRepository levelRepository;

    @Override
    public TenantParkingLevel saveLevel(TenantParkingLevel level) {
        return levelRepository.save(level);
    }
    
    @Override
    public TenantParkingLevel save(TenantParkingLevel tenantParkingLevel) {
        return levelRepository.save(tenantParkingLevel);
    }

    @Override
    public Optional<TenantParkingLevel> findLevelById(Integer levelId) {
        return levelRepository.findById(levelId);
    }

    @Override
    public List<TenantParkingLevel> findAllLevels() {
        return levelRepository.findAll();
    }

    @Override
    public void deleteLevel(Integer levelId) {
        levelRepository.deleteById(levelId);
    }
}
