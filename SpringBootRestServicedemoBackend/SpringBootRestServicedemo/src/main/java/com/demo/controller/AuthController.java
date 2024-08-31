package com.demo.controller;
import com.demo.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dto.LoginRequest;
import com.demo.dto.LoginResponse;
import com.demo.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = authService.authenticate(loginRequest.getUsername(), loginRequest.getPassword(), loginRequest.getUserType());
        if (isAuthenticated) {
        	Integer complexId = authService.getComplexId(loginRequest.getUsername(), loginRequest.getUserType());
        	Integer companyId = authService.getCompanyId(loginRequest.getUsername(), loginRequest.getUserType());
            return ResponseEntity.ok(new LoginResponse("Login successful", complexId,companyId));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
