import React from 'react';
import './CompanyRegistration.css';
import { useNavigate } from 'react-router-dom';

function CompanyRegistration({ formData, handleChange, errors }) {
  const navigate = useNavigate();
  const handlecompanySubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      complexName: formData.complexName,
      companyName: formData.companyName,
      companyContact: formData.companyContact,
      companyUsername: formData.companyUsername,
      companyPassword: formData.companyPassword,
    };

    try {
        const response = await fetch('http://localhost:8282/api/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify(data),
        }
      
      );
      
      console.log(data);

        if (response.ok) {
            // Handle success
            alert('Company Registration done successfully');
            navigate('/login');
        } else {
            // Handle errors
            const errorData = await response.json();
            console.error('Error:', errorData);
        }
    } catch (error) {
        console.error('Request failed', error);
    }
  };

  return (
    <form onSubmit={handlecompanySubmit}>
      <div className="form-group">
            <label htmlFor="complexName">Complex Name</label>
            <input
              type="text"
              id="complexName"
              className="form-control"
              placeholder="Enter complex name"
              value={formData.complexName}
              onChange={handleChange}
            />
            {errors.complexName && <p className="error">{errors.complexName}</p>}
          </div>
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          className="form-control"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={handleChange}
        />
        {errors.companyName && <p className="error">{errors.companyName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="companyContact">Company Contact</label>
        <input
          type="text"
          id="companyContact"
          className="form-control"
          placeholder="Enter company contact"
          value={formData.companyContact}
          onChange={handleChange}
        />
        {errors.companyContact && <p className="error">{errors.companyContact}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="companyUsername">Username</label>
        <input
          type="text"
          id="companyUsername"
          className="form-control"
          placeholder="Enter username"
          value={formData.companyUsername}
          onChange={handleChange}
        />
        {errors.companyUsername && <p className="error">{errors.companyUsername}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="companyPassword">Password</label>
        <input
          type="password"
          id="companyPassword"
          className="form-control"
          placeholder="Enter password"
          value={formData.companyPassword}
          onChange={handleChange}
        />
        {errors.companyPassword && <p className="error">{errors.companyPassword}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="Enter confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
    </form>
  );
}

export default CompanyRegistration;
