package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Company;
import com.demo.beans.Complex;
import com.demo.dao.CompanyDao;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyDao companyDao; // Corrected the variable name to companyDao
    
    @Autowired
    private ComplexService complexService;

    @Override
    public List<Company> findAll() {
        return companyDao.findAll(); // Use companyDao for data access
    }

//    @Override
//    public Company findById(int id) {
//        return companyDao.findById(id); // Use companyDao for data access
//    }
    
    @Override
    public Company findById(int id) {
        Optional<Company> company = companyDao.findById(id);
        return company.orElse(null);
    }

    @Override
    public Company save(Company company) {
        return companyDao.save(company); // Correct implementation of save method
    }
    
    @Override
    public Optional<Company> getCompanyByUsername(String username) {
        return companyDao.findByCompanyUsername(username);
    }
    
//    @Override
//    public String createCompany(Company company) {
//        // Fetch the Complex entity by its name
//        Complex complex = complexService.getComplexByName(company.getComplexName());
//        
//        if (complex == null) {
//            return "Complex not found";
//        }
//
//        // Set the complexId in the company entity
//        company.setComplexId(complex.getComplexId());
//        
//        // Save the company entity
//        companyDao.save(company);
//        
//        return "Company registered successfully";
//    }

    @Override
    public void deleteById(int id) {
        companyDao.deleteById(id); // Use companyDao for data access
    }
}
