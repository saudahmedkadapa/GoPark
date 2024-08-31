package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private int companyId;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_contact")
    private int companyContact;

    @Column(name = "complex_id")
    private int complexId;

    @Column(name = "company_username")
    private String companyUsername;

    @Column(name = "company_password")
    private String companyPassword;

    
    @ManyToOne
    @JoinColumn(name = "complex_id", insertable = false, updatable = false)
    private Complex complex;
    // Getters and Setters
    
    
    public int getCompanyId() {
        return companyId;
    }

    public int getComplexId() {
		return complexId;
	}

	public void setComplexId(int complexId) {
		this.complexId = complexId;
	}

	public Complex getComplex() {
		return complex;
	}

	public void setComplex(Complex complex) {
		this.complex = complex;
	}

	public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getCompanyContact() {
        return companyContact;
    }

    
    @Override
	public String toString() {
		return "Company [companyId=" + companyId + ", companyName=" + companyName + ", companyContact=" + companyContact
				+ ", companyUsername=" + companyUsername + ", companyPassword=" + companyPassword + ", complex="
				+ complex + "]";
	}

	public Company(int companyId, String companyName, int companyContact, String companyUsername,
			String companyPassword, Complex complex) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.companyContact = companyContact;
		this.companyUsername = companyUsername;
		this.companyPassword = companyPassword;
		this.complex = complex;
	}

	public void setCompanyContact(int companyContact) {
        this.companyContact = companyContact;
    }

//    public int getComplexId() {
//        return complexId;
//    }
//
//    public void setComplexId(int complexId) {
//        this.complexId = complexId;
//    }

    public String getCompanyUsername() {
        return companyUsername;
    }

    public void setCompanyUsername(String companyUsername) {
        this.companyUsername = companyUsername;
    }

    public String getCompanyPassword() {
        return companyPassword;
    }

    public void setCompanyPassword(String companyPassword) {
        this.companyPassword = companyPassword;
    }

	public Company() {
		super();
	}

	
    
    
    
    
}
