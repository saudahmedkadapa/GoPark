package com.demo.controller;

	import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Company;
import com.demo.beans.Complex;
import com.demo.dao.CompanyDao;
import com.demo.dao.ComplexDao;
import com.demo.service.CompanyService;
import com.demo.service.ComplexService;

	@RestController
	@RequestMapping("/api/companies")
	@CrossOrigin(origins = "http://localhost:3000")
	public class CompanyController {

		@Autowired
	    private ComplexService complexService;
		
	    @Autowired
	    private CompanyService companyService;
	    
	    @Autowired
	    private ComplexDao complexRepository;

	    @Autowired
	    private CompanyDao companyRepository;

	    

	    @GetMapping
	    public ResponseEntity<List<Company>> getAllCompanies() {
	        //return companyService.findAll();
	    	List<Company> companies = companyService.findAll();
	        return ResponseEntity.ok(companies);
	    }

//	    @GetMapping("/{id}")
//	    public ResponseEntity<Company> getCompanyById(@PathVariable int id) {
//	        Optional<Company> company = companyService.findById(id);
//	        if (company.isPresent()) {
//	            return ResponseEntity.ok(company.get());
//	        } else {
//	            return ResponseEntity.notFound().build();
//	        }
//	    }
	    
	    
	    
	    @GetMapping("/getcompany/{id}")
	    public ResponseEntity<Company> getCompanyById(@PathVariable int id) {
	        Company company = companyService.findById(id);
	        return company != null ? ResponseEntity.ok(company) : ResponseEntity.notFound().build();
	    }
	    
	    
//	    || company.getComplex().getComplexId() == null

	    @PostMapping("/addcompany")
	    public ResponseEntity<?> createCompany(@RequestBody Company company) {
	        // Validate complexId
	        if (company.getComplexId() <= 0) {
	            return ResponseEntity.badRequest().body("Invalid complex ID");
	        }

	        // Find existing complex by ID
	        Complex existingComplex = complexService.findById(company.getComplexId());
	        if (existingComplex == null) {
	            return ResponseEntity.badRequest().body("Complex not found");
	        }

	        // Set the Complex entity in the Company object
	        company.setComplex(existingComplex);

	        // Save the Company object
	        Company savedCompany = companyService.save(company);
	        
	        // Return the saved company
	        return ResponseEntity.ok(savedCompany);
	    }


	    
	    
	    
//	    @PostMapping("/addcompany")
//	    public ResponseEntity<?> createCompany(@RequestBody Company companyRequest) {
//	        // Find complex by name
//	        Complex complex = complexRepository.findByComplexName(companyRequest.getComplexName());
//	        
//	        if (complex == null) {
//	            return ResponseEntity.badRequest().body("Complex not found");
//	        }
//
//	        // Create a new Company object with the retrieved complexId
//	        Company company = new Company();
//	        company.setCompanyName(companyRequest.getCompanyName());
//	        company.setCompanyContact(companyRequest.getCompanyContact());
//	        company.setCompanyUsername(companyRequest.getCompanyUsername());
//	        company.setCompanyPassword(companyRequest.getCompanyPassword());
//	        company.setComplexId(complex.getComplexId()); // Set the complexId
//	        
//	        // Save company
//	        companyRepository.save(company);
//	        
//	        return ResponseEntity.ok("Company registered successfully");
//	    }
	    

//	    @PutMapping("/{id}")
//	    public ResponseEntity<Company> updateCompany(@PathVariable int id, @RequestBody Company companyDetails) {
//	        Optional<Company> company = companyService.findById(id);
//	        if (company.isPresent()) {
//	            Company existingCompany = company.get();
//	            existingCompany.setCompanyName(companyDetails.getCompanyName());
//	            existingCompany.setCompanyContact(companyDetails.getCompanyContact());
//	            //existingCompany.setComplexId(companyDetails.getComplexId());
//	            existingCompany.setCompanyUsername(companyDetails.getCompanyUsername());
//	            existingCompany.setCompanyPassword(companyDetails.getCompanyPassword());
//	            return ResponseEntity.ok(companyService.save(existingCompany));
//	        } else {
//	            return ResponseEntity.notFound().build();
//	        }
//	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteCompany(@PathVariable int id) {
	        companyService.deleteById(id);
	        return ResponseEntity.noContent().build();
	    }
	}


