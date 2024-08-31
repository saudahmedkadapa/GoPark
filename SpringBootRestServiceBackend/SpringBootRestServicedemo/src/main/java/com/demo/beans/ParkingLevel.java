package com.demo.beans;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "parking_level")
public class ParkingLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parking_level_id")
    private int parkingLevelId;

    private Integer complexId;
    
//    public Integer getComplexId() {
//		return complexId;
//	}
//
//	public void setComplexId(Integer complexId) {
//		this.complexId = complexId;
//	}

//	@ManyToOne
//    @JoinColumn(name = "complex_id", referencedColumnName = "complex_id")
//    private Complex complex;

    @Column(name = "level_number")
    private Integer levelNumber;

    @Column(name = "parking_level_capacity")
    private Integer parkingLevelCapacity;

    @OneToMany(mappedBy = "parkingLevel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ParkingSlot> parkingSlots;

//    @OneToMany(mappedBy = "parkingLevel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<TenantParkingSlot> tenantParkingSlots;

    
    // Getters and Setters
    public int getParkingLevelId() {
        return parkingLevelId;
    }

    public void setParkingLevelId(int parkingLevelId) {
        this.parkingLevelId = parkingLevelId;
    }

//    public Complex getComplex() {
//        return complex;
//    }
//
//    public void setComplex(Complex complex) {
//        this.complex = complex;
//    }

    public Integer getLevelNumber() {
        return levelNumber;
    }

    public Integer getComplexId() {
		return complexId;
	}

	public void setComplexId(Integer complexId) {
		this.complexId = complexId;
	}

	public void setLevelNumber(Integer levelNumber) {
        this.levelNumber = levelNumber;
    }

    public Integer getParkingLevelCapacity() {
        return parkingLevelCapacity;
    }

    public void setParkingLevelCapacity(Integer parkingLevelCapacity) {
        this.parkingLevelCapacity = parkingLevelCapacity;
    }

    public List<ParkingSlot> getParkingSlots() {
        return parkingSlots;
    }

    public void setParkingSlots(List<ParkingSlot> parkingSlots) {
        this.parkingSlots = parkingSlots;
    }

//    public List<TenantParkingSlot> getTenantParkingSlots() {
//        return tenantParkingSlots;
//    }
//
//    public void setTenantParkingSlots(List<TenantParkingSlot> tenantParkingSlots) {
//        this.tenantParkingSlots = tenantParkingSlots;
//    }

    @Override
    public String toString() {
        return "ParkingLevel [parkingLevelId=" + parkingLevelId + ", levelNumber=" + levelNumber + ", parkingLevelCapacity=" + parkingLevelCapacity + "]";
    }
}
