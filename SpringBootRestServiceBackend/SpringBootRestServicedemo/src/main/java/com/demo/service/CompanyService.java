package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.Company;

	public interface CompanyService {

	    List<Company> findAll();

	    Company findById(int id);

	    Company save(Company company);

	    void deleteById(int id);
	    
	    Optional<Company> getCompanyByUsername(String username);
	    
	    //String createCompany(Company company);
	}


