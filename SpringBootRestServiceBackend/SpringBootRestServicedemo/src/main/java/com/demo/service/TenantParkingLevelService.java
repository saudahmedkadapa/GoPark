package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.TenantParkingLevel;

public interface TenantParkingLevelService {

	TenantParkingLevel save(TenantParkingLevel tenantParkingLevel);

    Optional<TenantParkingLevel> findLevelById(Integer levelId);

    List<TenantParkingLevel> findAllLevels();

    void deleteLevel(Integer levelId);

	TenantParkingLevel saveLevel(TenantParkingLevel level);
}

