
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Grid.css';

const TenantDashboard = () => {
  const [complexId, setComplexId] = useState(null);
  const [totalSlots, setTotalSlots] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // Initialize errorMessage state
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the complex ID and total slots from the backend
    axios.get('http://localhost:8282/api/getTenantComplexData')
      .then(response => {
        const { complexId, totalSlots } = response.data;
        setComplexId(complexId);
        setTotalSlots(totalSlots);
      })
      .catch(error => {
        console.error("Error fetching complex data:", error);
        setErrorMessage('Failed to load complex data.'); // Set error message if API call fails
      });
  }, []);

  const handleViewSlots = () => {
    navigate(`/tenantgrid/${complexId}`);
  };

  return (
    <div>
      <h1>Tenant Dashboard</h1>
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message if any */}
      <p>Complex ID: {complexId}</p>
      <p>Total Slots: {totalSlots}</p>
      <button onClick={handleViewSlots} disabled={!complexId}>View Slots</button>
    </div>
  );
};

export default TenantDashboard;