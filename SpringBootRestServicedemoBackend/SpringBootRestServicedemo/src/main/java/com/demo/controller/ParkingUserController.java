package com.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.ParkingUser;
import com.demo.dto.ParkingUserDTO;
import com.demo.service.ParkingUserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class ParkingUserController {

    @Autowired
    private ParkingUserService parkingUserService;

    @GetMapping
    public List<ParkingUser> getAllUsers() {
        return parkingUserService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ParkingUser getUserById(@PathVariable int id) {
        return parkingUserService.getUserById(id);
    }

    @PostMapping
    public ParkingUser saveUser(@RequestBody ParkingUserDTO userDTO) {
        return parkingUserService.saveUser(userDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        parkingUserService.deleteUserById(id);
    }
}
