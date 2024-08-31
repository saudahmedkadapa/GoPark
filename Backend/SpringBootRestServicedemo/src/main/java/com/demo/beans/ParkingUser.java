package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "parking_user")
public class ParkingUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String userName;
    private String userUsername;
    private String userPassword;
    private int userContact;
    private String userMail;
    
    //private int companyId;
    
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    // Getters and Setters

    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complex complex;
    
    
    
    public int getUserId() {
        return userId;
    }
    

    public Complex getComplex() {
		return complex;
	}

	public void setComplex(Complex complex) {
		this.complex = complex;
	}

	public Company getCompany() {
		return company;
	}


	public void setCompany(Company company) {
		this.company = company;
	}


	public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserUsername() {
        return userUsername;
    }

    public void setUserUsername(String userUsername) {
        this.userUsername = userUsername;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public int getUserContact() {
        return userContact;
    }

    public void setUserContact(int userContact) {
        this.userContact = userContact;
    }

    public String getUserMail() {
        return userMail;
    }

    public void setUserMail(String userMail) {
        this.userMail = userMail;
    }

//    public int getCompanyId() {
//        return companyId;
//    }
//
//    public void setCompanyId(int companyId) {
//        this.companyId = companyId;
//    }

	public ParkingUser() {
		super();
	}

	public ParkingUser(int userId, String userName, String userUsername, String userPassword, int userContact,
			String userMail, int companyId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userUsername = userUsername;
		this.userPassword = userPassword;
		this.userContact = userContact;
		this.userMail = userMail;
		//this.companyId = companyId;
	}

	@Override
	public String toString() {
		return "ParkingUser [userId=" + userId + ", userName=" + userName + ", userUsername=" + userUsername
				+ ", userPassword=" + userPassword + ", userContact=" + userContact + ", userMail=" + userMail
				 + "]";
	}
    
    
}
