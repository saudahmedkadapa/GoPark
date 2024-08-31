package com.demo.beans;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "parking_user_booking")
public class ParkingUserBooking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    //private Integer userId;
    
    
    //private Integer parkingSlotId;
    private Timestamp bookingStartDateTime;
    private Timestamp bookingEndDateTime;
    private String bookingVehicleType;
    private String bookingVehiclePlateNo;
    
    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private ParkingUser parkinguser;
    
    @ManyToOne
    @JoinColumn(name = "parking_slot_id", insertable = false, updatable = false)
    private ParkingSlot parkingslot;

    
    public ParkingUser getParkinguser() {
		return parkinguser;
	}

	public void setParkinguser(ParkingUser parkinguser) {
		this.parkinguser = parkinguser;
	}

	public ParkingSlot getParkingslot() {
		return parkingslot;
	}

	public void setParkingslot(ParkingSlot parkingslot) {
		this.parkingslot = parkingslot;
	}

	// Getters and Setters
    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

//    public Integer getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Integer userId) {
//        this.userId = userId;
//    }
//
//    public Integer getParkingSlotId() {
//        return parkingSlotId;
//    }
//
//    public void setParkingSlotId(Integer parkingSlotId) {
//        this.parkingSlotId = parkingSlotId;
//    }

    public Timestamp getBookingStartDateTime() {
        return bookingStartDateTime;
    }

    public void setBookingStartDateTime(Timestamp bookingStartDateTime) {
        this.bookingStartDateTime = bookingStartDateTime;
    }

    public Timestamp getBookingEndDateTime() {
        return bookingEndDateTime;
    }

    public void setBookingEndDateTime(Timestamp bookingEndDateTime) {
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

	public ParkingUserBooking() {
		super();
	}

	public ParkingUserBooking(int bookingId, Timestamp bookingStartDateTime, Timestamp bookingEndDateTime,
			String bookingVehicleType, String bookingVehiclePlateNo, ParkingUser parkinguser, ParkingSlot parkingslot) {
		super();
		this.bookingId = bookingId;
		this.bookingStartDateTime = bookingStartDateTime;
		this.bookingEndDateTime = bookingEndDateTime;
		this.bookingVehicleType = bookingVehicleType;
		this.bookingVehiclePlateNo = bookingVehiclePlateNo;
		this.parkinguser = parkinguser;
		this.parkingslot = parkingslot;
	}

	@Override
	public String toString() {
		return "ParkingUserBooking [bookingId=" + bookingId + ", bookingStartDateTime=" + bookingStartDateTime
				+ ", bookingEndDateTime=" + bookingEndDateTime + ", bookingVehicleType=" + bookingVehicleType
				+ ", bookingVehiclePlateNo=" + bookingVehiclePlateNo + ", parkinguser=" + parkinguser + ", parkingslot="
				+ parkingslot + "]";
	}

//	public ParkingUserBooking(int bookingId, Integer userId, Integer parkingSlotId, Timestamp bookingStartDateTime,
//			Timestamp bookingEndDateTime, String bookingVehicleType, String bookingVehiclePlateNo) {
//		super();
//		this.bookingId = bookingId;
//		//this.userId = userId;
//		//this.parkingSlotId = parkingSlotId;
//		this.bookingStartDateTime = bookingStartDateTime;
//		this.bookingEndDateTime = bookingEndDateTime;
//		this.bookingVehicleType = bookingVehicleType;
//		this.bookingVehiclePlateNo = bookingVehiclePlateNo;
//	}
//
//	@Override
//	public String toString() {
//		return "ParkingUserBooking [bookingId=" + bookingId + ", userId=" + userId + ", parkingSlotId=" + parkingSlotId
//				+ ", bookingStartDateTime=" + bookingStartDateTime + ", bookingEndDateTime=" + bookingEndDateTime
//				+ ", bookingVehicleType=" + bookingVehicleType + ", bookingVehiclePlateNo=" + bookingVehiclePlateNo
//				+ "]";
//	}
    
    
}
