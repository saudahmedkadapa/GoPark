package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.TenantUser;

@Repository
public interface TenantUserRepository extends JpaRepository<TenantUser, Integer> {
    // You can define custom query methods here if needed
	Optional<TenantUser> findByTenantUserUsername(String username);
}

