package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "parking_slot")
public class ParkingSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parking_slot_id")
    private int parkingSlotId;

    @ManyToOne
    @JoinColumn(name = "parking_level_id")
    private ParkingLevel parkingLevel;

    @Column(name = "slot_number")
    private Integer slotNumber;

    @Column(name = "availability")
    private String availability;

    // Getters and Setters
    public int getParkingSlotId() {
        return parkingSlotId;
    }

    public void setParkingSlotId(int parkingSlotId) {
        this.parkingSlotId = parkingSlotId;
    }

    public ParkingLevel getParkingLevel() {
        return parkingLevel;
    }

    public void setParkingLevel(ParkingLevel parkingLevel) {
        this.parkingLevel = parkingLevel;
    }

    public Integer getSlotNumber() {
        return slotNumber;
    }

    public void setSlotNumber(Integer slotNumber) {
        this.slotNumber = slotNumber;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    @Override
    public String toString() {
        return "ParkingSlot [parkingSlotId=" + parkingSlotId + ", slotNumber=" + slotNumber + ", availability=" + availability + "]";
    }
}
