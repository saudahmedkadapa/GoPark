package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.TenantUser;
import com.demo.dao.TenantUserRepository;

@Service
public class TenantUserServiceImpl implements TenantUserService {

    @Autowired
    private TenantUserRepository tenantUserRepository;

    @Override
    public TenantUser saveTenantUser(TenantUser tenantUser) {
        return tenantUserRepository.save(tenantUser);
    
    }
    
    @Override
    public Optional<TenantUser> getTenantUserByUsername(String username) {
        return tenantUserRepository.findByTenantUserUsername(username);
    }

    @Override
    public TenantUser getTenantUserById(int id) {
        return tenantUserRepository.findById(id).orElse(null);
    }

    @Override
    public List<TenantUser> getAllTenantUsers() {
        return tenantUserRepository.findAll();
    }

    @Override
    public void deleteTenantUser(int id) {
        tenantUserRepository.deleteById(id);
    }
}
