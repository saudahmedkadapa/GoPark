package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "tenant_parking_level")
public class TenantParkingLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tenant_parking_level_id")
    private int tenantParkingLevelId;

    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complex complex;  // Assuming a relationship with Complex, adjust if necessary

    @Column(name = "tenant_level_number")
    private Integer tenantLevelNumber;

    @Column(name = "tenant_parking_level_capacity")
    private Integer tenantParkingLevelCapacity;

    // Getters and Setters
    public int getTenantParkingLevelId() {
        return tenantParkingLevelId;
    }

    public void setTenantParkingLevelId(int tenantParkingLevelId) {
        this.tenantParkingLevelId = tenantParkingLevelId;
    }

    public Complex getComplex() {
        return complex;
    }

    public void setComplex(Complex complex) {
        this.complex = complex;
    }

    public Integer getTenantLevelNumber() {
        return tenantLevelNumber;
    }

    public void setTenantLevelNumber(Integer tenantLevelNumber) {
        this.tenantLevelNumber = tenantLevelNumber;
    }

    public Integer getTenantParkingLevelCapacity() {
        return tenantParkingLevelCapacity;
    }

    public void setTenantParkingLevelCapacity(Integer tenantParkingLevelCapacity) {
        this.tenantParkingLevelCapacity = tenantParkingLevelCapacity;
    }

    @Override
    public String toString() {
        return "TenantParkingLevel [tenantParkingLevelId=" + tenantParkingLevelId + ", tenantLevelNumber=" + tenantLevelNumber + ", tenantParkingLevelCapacity=" + tenantParkingLevelCapacity + "]";
    }
}
