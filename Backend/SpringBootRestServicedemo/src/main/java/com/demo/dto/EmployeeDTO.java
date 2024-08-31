package com.demo.dto;

public class EmployeeDTO {
	 private int userId;
	    private String userName;
	    private String userUsername;
	    private String userPassword;
	    private int userContact;
	    private String userMail;
	    private int complexId; // This will reference the Complex ID
	    private int companyId; // This will reference the Company ID

	    // Getters and Setters

	    public int getUserId() {
	        return userId;
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

	    public int getComplexId() {
	        return complexId;
	    }

	    public void setComplexId(int complexId) {
	        this.complexId = complexId;
	    }

	    public int getCompanyId() {
	        return companyId;
	    }

	    public void setCompanyId(int companyId) {
	        this.companyId = companyId;
	    }

	    // Constructors

	    public EmployeeDTO() {
	        super();
	    }

	    public EmployeeDTO(int userId, String userName, String userUsername, String userPassword, int userContact, 
	                          String userMail, int complexId, int companyId) {
	        this.userId = userId;
	        this.userName = userName;
	        this.userUsername = userUsername;
	        this.userPassword = userPassword;
	        this.userContact = userContact;
	        this.userMail = userMail;
	        this.complexId = complexId;
	        this.companyId = companyId;
	    }

		@Override
		public String toString() {
			return "EmployeeDTO [userId=" + userId + ", userName=" + userName + ", userUsername=" + userUsername
					+ ", userPassword=" + userPassword + ", userContact=" + userContact + ", userMail=" + userMail
					+ ", complexId=" + complexId + ", companyId=" + companyId + "]";
		}

	    // toString Method

//	    @Override
//	    public String toString() {
//	        return "ParkingUserDTO [userId=" + userId + ", userName=" + userName + ", userUsername=" + userUsername
//	                + ", userPassword=" + userPassword + ", userContact=" + userContact + ", userMail=" + userMail
//	                + ", complexId=" + complexId + ", companyId="+ companyId + "]";
//	    }
	    
	    
	    
	    
}
 








    