package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "tenant_parking_slot")
public class TenantParkingSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tenant_parking_slot_id")
    private int tenantParkingSlotId;

    @ManyToOne
    @JoinColumn(name = "tenant_parking_level_id")
    private ParkingLevel parkingLevel;

    @Column(name = "tenant_slot_number")
    private Integer tenantSlotNumber;

    @Column(name = "tenant_availability")
    private String tenantAvailability;

    // Getters and Setters
    public int getTenantParkingSlotId() {
        return tenantParkingSlotId;
    }

    public void setTenantParkingSlotId(int tenantParkingSlotId) {
        this.tenantParkingSlotId = tenantParkingSlotId;
    }

    public ParkingLevel getParkingLevel() {
        return parkingLevel;
    }

    public void setParkingLevel(ParkingLevel parkingLevel) {
        this.parkingLevel = parkingLevel;
    }

    public Integer getTenantSlotNumber() {
        return tenantSlotNumber;
    }

    public void setTenantSlotNumber(Integer tenantSlotNumber) {
        this.tenantSlotNumber = tenantSlotNumber;
    }

    public String getTenantAvailability() {
        return tenantAvailability;
    }

    public void setTenantAvailability(String tenantAvailability) {
        this.tenantAvailability = tenantAvailability;
    }

    @Override
    public String toString() {
        return "TenantParkingSlot [tenantParkingSlotId=" + tenantParkingSlotId + ", tenantSlotNumber=" + tenantSlotNumber + ", tenantAvailability=" + tenantAvailability + "]";
    }
}
