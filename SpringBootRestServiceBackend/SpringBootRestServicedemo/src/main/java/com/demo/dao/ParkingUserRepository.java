package com.demo.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.ParkingUser;
import com.demo.dto.EmployeeDTO;

@Repository
public interface ParkingUserRepository extends JpaRepository<ParkingUser, Integer> {
	Optional<ParkingUser> findByUserUsername(String username);

	ParkingUser save(EmployeeDTO user);
}
