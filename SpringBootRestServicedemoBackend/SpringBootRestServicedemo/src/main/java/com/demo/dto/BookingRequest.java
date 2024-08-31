package com.demo.dto;

public class BookingRequest {
    private Integer userId;
    private Integer parkingSlotId;
    private String bookingStartDateTime;
    private String bookingEndDateTime;
    private String bookingVehicleType;
    private String bookingVehiclePlateNo;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getParkingSlotId() {
		return parkingSlotId;
	}
	public void setParkingSlotId(Integer parkingSlotId) {
		this.parkingSlotId = parkingSlotId;
	}
	public String getBookingStartDateTime() {
		return bookingStartDateTime;
	}
	public void setBookingStartDateTime(String bookingStartDateTime) {
		this.bookingStartDateTime = bookingStartDateTime;
	}
	public String getBookingEndDateTime() {
		return bookingEndDateTime;
	}
	public void setBookingEndDateTime(String bookingEndDateTime) {
		this.bookingEndDateTime = bookingEndDateTime;
	}
	public String getBookingVehicleType() {
		return bookingVehicleType;
	}
	public void setBookingVehicleType(String bookingVehicleType) {
		this.bookingVehicleType = bookingVehicleType;
	}
	public String getBookingVehiclePlateNo() {
		return bookingVehiclePlateNo;
	}
	public void setBookingVehiclePlateNo(String bookingVehiclePlateNo) {
		this.bookingVehiclePlateNo = bookingVehiclePlateNo;
	}

    // Getters and Setters
    
    
}
