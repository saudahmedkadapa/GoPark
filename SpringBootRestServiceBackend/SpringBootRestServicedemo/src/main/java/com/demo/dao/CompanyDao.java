package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.beans.Company;
import java.util.Optional;

public interface CompanyDao extends JpaRepository<Company, Integer> {
    Optional<Company> findByCompanyUsername(String username);
}

