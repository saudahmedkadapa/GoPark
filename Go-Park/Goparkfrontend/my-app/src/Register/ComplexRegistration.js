import React from 'react';
import './ComplexRegistration.css';

function ComplexRegistration({ formData, handleChange, errors }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="complexId">Complex ID</label>
        <input
          type="text"
          id="complexId"
          value={formData.complexId}
          onChange={handleChange}
        />
        {errors.complexId && <p className="error">{errors.complexId}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="complexName">Complex Name</label>
        <input
          type="text"
          id="complexName"
          value={formData.complexName}
          onChange={handleChange}
        />
        {errors.complexName && <p className="error">{errors.complexName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="totalParkingLevels">Total Parking Levels</label>
        <select
          id="totalParkingLevels"
          value={formData.totalParkingLevels}
          onChange={handleChange}
        >
          <option value="">Select Parking Level</option>
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
        </select>
        {errors.totalParkingLevels && <p className="error">{errors.totalParkingLevels}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
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
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
    </div>
  );
}

export default ComplexRegistration;
