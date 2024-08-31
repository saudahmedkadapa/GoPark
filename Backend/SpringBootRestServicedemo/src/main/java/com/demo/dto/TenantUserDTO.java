package com.demo.dto;

import java.sql.Date;

public class TenantUserDTO {
    
    private Long id;
    
    private String username;
    
    private String password;
    
    private String tenantName;
    
    private String vehicleType;
    
    private Date bookingStartTime;
    
    private Date bookingEndTime;
    
    // getters and setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getTenantName() {
        return tenantName;
    }
    
    public void setTenantName(String tenantName) {
        this.tenantName = tenantName;
    }
    
    public String getVehicleType() {
        return vehicleType;
    }
    
    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }
    
    public Date getBookingStartTime() {
        return bookingStartTime;
    }
    
    public void setBookingStartTime(Date bookingStartTime) {
        this.bookingStartTime = bookingStartTime;
    }
    
    public Date getBookingEndTime() {
        return bookingEndTime;
    }
    
    public void setBookingEndTime(Date bookingEndTime) {
        this.bookingEndTime = bookingEndTime;
    }
}
