package com.demo.service;

public interface AuthService {
    boolean authenticate(String username, String password, String userType);
    Integer getComplexId(String username, String userType);
    Integer getCompanyId(String username, String userType);
}
