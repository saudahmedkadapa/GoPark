package com.demo.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tenant_user")
public class TenantUser {

    @Id
    @Column(name = "tenant_user_id")
    private int tenantUserId;

    @Column(name = "tenant_user_name")
    private String tenantUserName;

    @OneToMany(mappedBy = "tenantUser",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<TenantParkingUserBooking> tenantParkingUserBookings;
    
    @Column(name = "tenant_user_username")
    private String tenantUserUsername;

    @Column(name = "tenant_user_password")
    private String tenantUserPassword;

    @Column(name = "tenant_user_contact")
    private Integer tenantUserContact;

    @Column(name = "tenant_user_mail")
    private String tenantUserMail;

    // Getters and setters
    
    
    public int getTenantUserId() {
        return tenantUserId;
    }

    public Set<TenantParkingUserBooking> getTenantParkingUserBookings() {
        return tenantParkingUserBookings;
    }

    public void setTenantParkingUserBookings(Set<TenantParkingUserBooking> tenantParkingUserBookings) {
        this.tenantParkingUserBookings = tenantParkingUserBookings;
    }

	public void setTenantUserId(int tenantUserId) {
        this.tenantUserId = tenantUserId;
    }

    public String getTenantUserName() {
        return tenantUserName;
    }

    public void setTenantUserName(String tenantUserName) {
        this.tenantUserName = tenantUserName;
    }

    public String getTenantUserUsername() {
        return tenantUserUsername;
    }

    public void setTenantUserUsername(String tenantUserUsername) {
        this.tenantUserUsername = tenantUserUsername;
    }

    public String getTenantUserPassword() {
        return tenantUserPassword;
    }

    public void setTenantUserPassword(String tenantUserPassword) {
        this.tenantUserPassword = tenantUserPassword;
    }

    public Integer getTenantUserContact() {
        return tenantUserContact;
    }

    public void setTenantUserContact(Integer tenantUserContact) {
        this.tenantUserContact = tenantUserContact;
    }

    public String getTenantUserMail() {
        return tenantUserMail;
    }

    @Override
	public String toString() {
		return "TenantUser [tenantUserId=" + tenantUserId + ", tenantUserName=" + tenantUserName
				+ ", tenantUserUsername=" + tenantUserUsername + ", tenantUserPassword=" + tenantUserPassword
				+ ", tenantUserContact=" + tenantUserContact + ", tenantUserMail=" + tenantUserMail + "]";
	}

	public void setTenantUserMail(String tenantUserMail) {
        this.tenantUserMail = tenantUserMail;
    }

	public TenantUser() {
		super();
	}

	public TenantUser(int tenantUserId, String tenantUserName, String tenantUserUsername, String tenantUserPassword,
			Integer tenantUserContact, String tenantUserMail) {
		super();
		this.tenantUserId = tenantUserId;
		this.tenantUserName = tenantUserName;
		this.tenantUserUsername = tenantUserUsername;
		this.tenantUserPassword = tenantUserPassword;
		this.tenantUserContact = tenantUserContact;
		this.tenantUserMail = tenantUserMail;
	}

	public TenantUser(String tenantUserName, String tenantUserUsername, String tenantUserPassword,
			Integer tenantUserContact, String tenantUserMail) {
		super();
		this.tenantUserName = tenantUserName;
		this.tenantUserUsername = tenantUserUsername;
		this.tenantUserPassword = tenantUserPassword;
		this.tenantUserContact = tenantUserContact;
		this.tenantUserMail = tenantUserMail;
	}
    
	
    
}
