// src/components/ComplexDashboard.js
// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import './ComplexDashboard .css'; // Corrected CSS import
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; 

// const ComplexDashboard = ({ data = [
//     { complexName: 'Complex A', total_parking_levels: '1' },
//     { complexName: 'Complex B', total_parking_levels: '2'},
//     //{ levelID: '3', complexName: 'Complex C', levelNumber: '3', capacity: 200, availableSlot: 50, totalSlot: 250 },
// ] }) => {
//   const navigate = useNavigate(); // Initialize useNavigate



const ComplexDashboard = () => {
const [complexDetails, setComplexDetails] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchComplexDetails = async () => {
        try {
            const complexId = localStorage.getItem('complexId');
            if (complexId) {
                const response = await axios.get(`http://localhost:8282/api/auth/{complexId}`);
                setComplexDetails(response.data);
            } else {
                setError('No complex ID found');
            }
        } catch (err) {
            setError('Failed to fetch complex details');
        }
    };

    fetchComplexDetails();
}, []);

if (error) {
    return <div>{error}</div>;
}

return (
    <div>
        <h1>Complex Details</h1>
        {complexDetails ? (
            <div>
                <p><strong>Name:</strong> {complexDetails.complexName}</p>
                <p><strong>Address:</strong> {complexDetails.complexAddress}</p>
                <p><strong>Total Parking Levels:</strong> {complexDetails.totalParkingLevels}</p>
                <p><strong>Total Tenant Parking Levels:</strong> {complexDetails.totalTenantParkingLevels}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
};

export default ComplexDashboard;
