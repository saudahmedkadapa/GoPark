package com.demo.dto;


public class LoginResponse {
    private String message;
    private Integer complexId;
    private Integer companyId;

    public LoginResponse(String message, Integer complexId) {
        this.message = message;
        this.complexId = complexId;
    }

    public LoginResponse(String string, Integer complexId2, Integer companyId) {
		// TODO Auto-generated constructor stub
    	this.message = message;
        this.complexId = complexId;
        this.companyId = companyId;
	}

	// Getters and setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getComplexId() {
        return complexId;
    }

    public void setComplexId(Integer complexId) {
        this.complexId = complexId;
    }

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}
    
    
    
}
