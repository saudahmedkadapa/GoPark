// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './TenantUserBookingDetails.css'; 

// const TenantUserBookingDetails = () => {
//   const { slotId } = useParams();
//   const navigate = useNavigate();
//   const [bookingDetails, setBookingDetails] = useState({
//     startTime: '',
//     endTime: '',
//     vehiclePlateNo: '',
//     vehicleType: '',
//     contactNo: '',
//     levelNo: slotId || '1', // Set levelNo based on slotId, default to '1'
//     username: ''
//   });

//   useEffect(() => {
//     // If slotId changes, update levelNo
//     setBookingDetails(prevDetails => ({
//       ...prevDetails,
//       levelNo: slotId || '1'
//     }));
//   }, [slotId]);

//   const handleChange = (e) => {
//     setBookingDetails({
//       ...bookingDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Booking Details:', bookingDetails);
//     alert('Booking successfully completed');

//     // Save booking status to localStorage
//     localStorage.setItem('bookedSlot', slotId);

//     // Clear the form fields
//     setBookingDetails({
//       startTime: '',
//       endTime: '',
//       vehiclePlateNo: '',
//       vehicleType: '',
//       contactNo: '',
//       levelNo: slotId || '1', // Reset to slotId or '1'
//       username: ''
//     });

//     // Navigate to UserDashboard component
//     navigate('/UserDashboard'); 
//   };

//   return (
//     <div className="booking-details">
//       <h1>Book Slot {slotId}</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Start Time:
//           <input
//             type="datetime-local"
//             name="startTime"
//             value={bookingDetails.startTime}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           End Time:
//           <input
//             type="datetime-local"
//             name="endTime"
//             value={bookingDetails.endTime}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Vehicle Plate No:
//           <input
//             type="text"
//             name="vehiclePlateNo"
//             value={bookingDetails.vehiclePlateNo}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Vehicle Type:
//           <select
//             name="vehicleType"
//             value={bookingDetails.vehicleType}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Vehicle Type</option>
//             <option value="Two Wheeler">Two Wheeler</option>
//             <option value="SUV">SUV</option>
//             <option value="Hatchback">Hatchback</option>
//           </select>
//         </label>
//         <label>
//           Contact No:
//           <input
//             type="tel"
//             name="contactNo"
//             value={bookingDetails.contactNo}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Level No:
//           <input
//             type="text"
//             name="levelNo"
//             value={bookingDetails.levelNo}
//             disabled
//             required
//           />
//         </label>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={bookingDetails.username}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Book Slot</button>
//       </form>
//     </div>
//   );
// };

// export default TenantUserBookingDetails;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TenantUserBookingDetails.css';

const TenantUserBookingDetails = () => {
  const { slotId } = useParams();
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState({
    startTime: '',
    endTime: '',
    vehiclePlateNo: '',
    vehicleType: '',
    contactNo: '',
    levelNo: slotId || '1',
    username: ''
  });

  const handleChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8282/api/bookSlot', bookingDetails)
      .then(() => {
        alert('Booking successfully completed');
        localStorage.setItem('bookedSlot', slotId);
        navigate('/'); // Redirect to homepage
      })
      .catch(error => {
        console.error("Error booking slot:", error);
      });
  };

  return (
    <div className="booking-details">
      <h1>Book Slot {slotId}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            type="datetime-local"
            name="startTime"
            value={bookingDetails.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="datetime-local"
            name="endTime"
            value={bookingDetails.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Plate No:
          <input
            type="text"
            name="vehiclePlateNo"
            value={bookingDetails.vehiclePlateNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Type:
          <select
            name="vehicleType"
            value={bookingDetails.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="Two Wheeler">Two Wheeler</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </label>
        <label>
          Contact No:
          <input
            type="tel"
            name="contactNo"
            value={bookingDetails.contactNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Level No:
          <input
            type="text"
            name="levelNo"
            value={bookingDetails.levelNo}
            disabled
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={bookingDetails.username}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Book Slot</button>
      </form>
    </div>
  );
};

export default TenantUserBookingDetails;
