import React from 'react';
import './TenantRegistration.css';

function TenantRegistration({ formData, handleChange, errors }) {
  return (
    <form>
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
        <label htmlFor="tenantName">Tenant Name</label>
        <input
          type="text"
          id="tenantName"
          className="form-control"
          placeholder="Enter tenant name"
          value={formData.tenantName}
          onChange={handleChange}
        />
        {errors.tenantName && <p className="error">{errors.tenantName}</p>}
      </div>
      {/* Common Fields */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
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

export default TenantRegistration;
