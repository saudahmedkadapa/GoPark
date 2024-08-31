package com.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Company;
import com.demo.beans.Complex;
import com.demo.beans.ParkingUser;
import com.demo.beans.TenantUser;
import com.demo.dao.CompanyDao;
import com.demo.dao.ComplexDao;
import com.demo.dao.ParkingUserRepository;
import com.demo.dao.TenantUserRepository;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private CompanyDao companyDao;

    @Autowired
    private ComplexDao complexDao;

    @Autowired
    private ParkingUserRepository parkingUserDao;

    @Autowired
    private TenantUserRepository tenantUserDao;

    public boolean authenticate(String username, String password, String userType) {
        switch (userType) {
            case "Company":
                return authenticateCompany(username, password);
            case "Complex":
                return authenticateComplex(username, password);
            case "Employee":
                return authenticateParkingUser(username, password);
            case "Tenant":
                return authenticateTenantUser(username, password);
            default:
                return false;
        }
    }
    
    
    
    
    
    @Override
    public Integer getComplexId(String username, String userType) {
        switch (userType) {
            case "Company":
                return companyDao.findByCompanyUsername(username)
                        .map(Company::getComplexId)
                        .orElse(null);
            case "Complex":
                return complexDao.findByComplexUsername(username)
                        .map(Complex::getComplexId)
                        .orElse(null);
//            case "Employee":
//                return parkingUserDao.findByUserUsername(username)
//                        .map(ParkingUser::getComplexId)
//                        .orElse(null);
//            case "Tenant":
//                return tenantUserDao.findByTenantUserUsername(username)
//                        .map(TenantUser::getComplexId)
//                        .orElse(null);
            default:
                return null;
        }
    }

    
    
    
    
    @Override
    public Integer getCompanyId(String username, String userType) {
        switch (userType) {
            case "Company":
                return companyDao.findByCompanyUsername(username)
                        .map(Company::getCompanyId)
                        .orElse(null);
//            case "Complex":
//                return complexDao.findByComplexUsername(username)
//                        .map(Complex::getCompanyId)
//                        .orElse(null);
//            case "Employee":
//                return parkingUserDao.findByUserUsername(username)
//                        .map(ParkingUser::getComplexId)
//                        .orElse(null);
//            case "Tenant":
//                return tenantUserDao.findByTenantUserUsername(username)
//                        .map(TenantUser::getComplexId)
//                        .orElse(null);
            default:
                return null;
        }
    }
    
    
    
    
    
    

    private boolean authenticateCompany(String username, String password) {
        Optional<Company> companyOpt = companyDao.findByCompanyUsername(username);
        return companyOpt.isPresent() && companyOpt.get().getCompanyPassword().equals(password);
    }

    private boolean authenticateComplex(String username, String password) {
        Optional<Complex> complexOpt = complexDao.findByComplexUsername(username);
        return complexOpt.isPresent() && complexOpt.get().getComplexPassword().equals(password);
    }

    private boolean authenticateParkingUser(String username, String password) {
        Optional<ParkingUser> userOpt = parkingUserDao.findByUserUsername(username);
        return userOpt.isPresent() && userOpt.get().getUserPassword().equals(password);
    }

    private boolean authenticateTenantUser(String username, String password) {
        Optional<TenantUser> userOpt = tenantUserDao.findByTenantUserUsername(username);
        return userOpt.isPresent() && userOpt.get().getTenantUserPassword().equals(password);
    }
    
    
    
}
