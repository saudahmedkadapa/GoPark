package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Company;
import com.demo.beans.Complex;
import com.demo.beans.ParkingUser;
import com.demo.dao.CompanyDao;
import com.demo.dao.ComplexDao;
import com.demo.dao.ParkingUserRepository;
import com.demo.dto.ParkingUserDTO;

@Service
public class ParkingUserServiceImpl implements ParkingUserService {

    @Autowired
    private ParkingUserRepository parkingUserRepository;
    
    
    @Autowired
    private CompanyDao companyRepository;

    @Autowired
    private ComplexDao complexRepository;
    
    

    @Override
    public List<ParkingUser> getAllUsers() {
        return parkingUserRepository.findAll();
    }

    @Override
    public Optional<ParkingUser> getParkingUserByUsername(String username) {
        return parkingUserRepository.findByUserUsername(username);
    }
    
    @Override
    public ParkingUser getUserById(int userId) {
        return parkingUserRepository.findById(userId).orElse(null);
    }

//    @Override
//    public ParkingUser saveUser(EmployeeDTO user) {
//        return parkingUserRepository.save(user);
//    }
    
    
    
    public ParkingUser saveUser(ParkingUserDTO userDTO) {
        ParkingUser user = new ParkingUser();
        user.setUserName(userDTO.getUserName());
        user.setUserUsername(userDTO.getUserUsername());
        user.setUserPassword(userDTO.getUserPassword());
        user.setUserContact(userDTO.getUserContact());
        user.setUserMail(userDTO.getUserMail());

        // Set the company if provided
        if (userDTO.getCompanyId() != null) {
            Company company = companyRepository.findById(userDTO.getCompanyId()).orElse(null);
            if (company != null) {
                user.setCompany(company);
                // Automatically set the complexId from the company
                Complex complex = company.getComplex();
                if (complex != null) {
                    user.setComplex(complex);
                } else {
                    user.setComplex(null); // or handle the case where no complex is associated
                }
            }
        }

        // Optionally set the complex if provided directly
        if (userDTO.getComplexId() != null) {
            Complex complex = complexRepository.findById(userDTO.getComplexId()).orElse(null);
            user.setComplex(complex);
        }

        return parkingUserRepository.save(user);
    }

    @Override
    public void deleteUserById(int userId) {
        parkingUserRepository.deleteById(userId);
    }
//
//	@Override
//	public ParkingUser saveUser(ParkingUserDTO user) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
