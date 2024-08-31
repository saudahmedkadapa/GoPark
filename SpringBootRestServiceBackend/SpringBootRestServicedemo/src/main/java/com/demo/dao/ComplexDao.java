package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.demo.beans.Complex;

@Repository
public interface ComplexDao extends JpaRepository<Complex, Integer> {
    // Custom query methods can be defined here if needed
	//Complex findByComplexName(String complexName);
	Optional<Complex> findByComplexUsername(String username);
}
