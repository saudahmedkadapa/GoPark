package com.demo.service;


import java.util.List;
import java.util.Optional;

import com.demo.beans.ParkingUser;
import com.demo.dto.EmployeeDTO;
import com.demo.dto.ParkingUserDTO;

public interface ParkingUserService {
    List<ParkingUser> getAllUsers();
    ParkingUser getUserById(int userId);
    ParkingUser saveUser(ParkingUserDTO userDTO);
    Optional<ParkingUser> getParkingUserByUsername(String username);
    void deleteUserById(int userId);
}
