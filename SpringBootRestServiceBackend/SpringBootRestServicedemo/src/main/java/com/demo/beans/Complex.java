package com.demo.beans;



import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "complex")
public class Complex {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "complex_id")
    private int complexId;

    @Column(name = "complex_name")
    private String complexName;

    @Column(name = "complex_address")
    private String complexAddress;

    @Column(name = "total_parking_levels")
    private Integer totalParkingLevels;

    @Column(name = "total_tenant_parking_levels")
    private Integer totalTenantParkingLevels;

    @Column(name = "complex_username")
    private String complexUsername;

    @Column(name = "complex_password")
    private String complexPassword;
    
//    @OneToMany(mappedBy = "complex")
//    private Set<ParkingLevel> parkingLevels;
    
    
 // In Complex class
//    @OneToMany(mappedBy = "complex")
//    private Set<Company> companies;
//

//    public Set<ParkingLevel> getParkingLevels() {
//		return parkingLevels;
//	}
//
//	public void setParkingLevels(Set<ParkingLevel> parkingLevels) {
//		this.parkingLevels = parkingLevels;
//	}

//	public Set<Company> getCompanies() {
//		return companies;
//	}
//
//	public void setCompanies(Set<Company> companies) {
//		this.companies = companies;
//	}

//	public Set<ParkingLevel> getParkingLevels() {
//		return parkingLevels;
//	}
//
//	public void setParkingLevels(Set<ParkingLevel> parkingLevels) {
//		this.parkingLevels = parkingLevels;
//	}

	// Getters and Setters
    public int getComplexId() {
        return complexId;
    }

    public void setComplexId(int complexId) {
        this.complexId = complexId;
    }

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
}
