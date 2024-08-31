package com.demo.beans;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "tenant_payment")
public class TenantPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tenantPaymentId;

    private Integer tenantUserId;
    private Integer tenantBookingId;
    private Timestamp tenantPaymentDateTime;
    private String tenantPaymentStatus;
    private Integer tenantAmount;

    // Getters and Setters
    public Integer getTenantPaymentId() {
        return tenantPaymentId;
    }

    public void setTenantPaymentId(Integer tenantPaymentId) {
        this.tenantPaymentId = tenantPaymentId;
    }

    public Integer getTenantUserId() {
        return tenantUserId;
    }

    public void setTenantUserId(Integer tenantUserId) {
        this.tenantUserId = tenantUserId;
    }

    public Integer getTenantBookingId() {
        return tenantBookingId;
    }

    public void setTenantBookingId(Integer tenantBookingId) {
        this.tenantBookingId = tenantBookingId;
    }

    public Timestamp getTenantPaymentDateTime() {
        return tenantPaymentDateTime;
    }

    public void setTenantPaymentDateTime(Timestamp tenantPaymentDateTime) {
        this.tenantPaymentDateTime = tenantPaymentDateTime;
    }

    public String getTenantPaymentStatus() {
        return tenantPaymentStatus;
    }

    public void setTenantPaymentStatus(String tenantPaymentStatus) {
        this.tenantPaymentStatus = tenantPaymentStatus;
    }

    public Integer getTenantAmount() {
        return tenantAmount;
    }

    public void setTenantAmount(Integer tenantAmount) {
        this.tenantAmount = tenantAmount;
    }

	public TenantPayment() {
		super();
	}

	public TenantPayment(Integer tenantPaymentId, Integer tenantUserId, Integer tenantBookingId,
			Timestamp tenantPaymentDateTime, String tenantPaymentStatus, Integer tenantAmount) {
		super();
		this.tenantPaymentId = tenantPaymentId;
		this.tenantUserId = tenantUserId;
		this.tenantBookingId = tenantBookingId;
		this.tenantPaymentDateTime = tenantPaymentDateTime;
		this.tenantPaymentStatus = tenantPaymentStatus;
		this.tenantAmount = tenantAmount;
	}

	@Override
	public String toString() {
		return "TenantPayment [tenantPaymentId=" + tenantPaymentId + ", tenantUserId=" + tenantUserId
				+ ", tenantBookingId=" + tenantBookingId + ", tenantPaymentDateTime=" + tenantPaymentDateTime
				+ ", tenantPaymentStatus=" + tenantPaymentStatus + ", tenantAmount=" + tenantAmount + "]";
	}
    
    
}

