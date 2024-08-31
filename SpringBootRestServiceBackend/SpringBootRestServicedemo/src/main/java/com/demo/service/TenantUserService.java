package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.TenantUser;

public interface TenantUserService {
    TenantUser saveTenantUser(TenantUser tenantUser);
    TenantUser getTenantUserById(int id);
    List<TenantUser> getAllTenantUsers();
    void deleteTenantUser(int id);
    Optional<TenantUser> getTenantUserByUsername(String username);
}
