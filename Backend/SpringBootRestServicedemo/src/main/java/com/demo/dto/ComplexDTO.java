package com.demo.dto;

public class ComplexDTO {

    
    private String complexName;
    
    private Integer complexId;

    
    private String complexAddress;

   
    private Integer totalParkingLevels;

    
    private Integer totalTenantParkingLevels;

    
    private String complexUsername;

   
    private String complexPassword;

    
    private Integer parkingLevelCapacity;

    
    private Integer tenantParkingLevelCapacity;
    
    

    public Integer getComplexId() {
		return complexId;
	}

	public void setComplexId(Integer complexId) {
		this.complexId = complexId;
	}

	// Getters and Setters
    public String getComplexName() {
        return complexName;
    }

    public void setComplexName(String complexName) {
        this.complexName = complexName;
    }

    public String getComplexAddress() {
        return complexAddress;
    }

    public void setComplexAddress(String complexAddress) {
        this.complexAddress = complexAddress;
    }

    public Integer getTotalParkingLevels() {
        return totalParkingLevels;
    }

    public void setTotalParkingLevels(Integer totalParkingLevels) {
        this.totalParkingLevels = totalParkingLevels;
    }

    public Integer getTotalTenantParkingLevels() {
        return totalTenantParkingLevels;
    }

    public void setTotalTenantParkingLevels(Integer totalTenantParkingLevels) {
        this.totalTenantParkingLevels = totalTenantParkingLevels;
    }

    public String getComplexUsername() {
        return complexUsername;
    }

    public void setComplexUsername(String complexUsername) {
        this.complexUsername = complexUsername;
    }

    public String getComplexPassword() {
        return complexPassword;
    }

    public void setComplexPassword(String complexPassword) {
        this.complexPassword = complexPassword;
    }

    public Integer getParkingLevelCapacity() {
        return parkingLevelCapacity;
    }

    public void setParkingLevelCapacity(Integer parkingLevelCapacity) {
        this.parkingLevelCapacity = parkingLevelCapacity;
    }

    public Integer getTenantParkingLevelCapacity() {
        return tenantParkingLevelCapacity;
    }

    public void setTenantParkingLevelCapacity(Integer tenantParkingLevelCapacity) {
        this.tenantParkingLevelCapacity = tenantParkingLevelCapacity;
    }
}
