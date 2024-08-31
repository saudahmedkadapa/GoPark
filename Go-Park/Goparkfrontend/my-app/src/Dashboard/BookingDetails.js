

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './BookingDetails.css'; 


// const BookingDetails = () => {
//   const { slotId } = useParams();
//   const navigate = useNavigate();
//   const [bookingDetails, setBookingDetails] = useState({
//     bookingStartDateTime: '',
//     bookingEndDateTime: '',
//     bookingbookingVehiclePlateNo: '',
//     bookingbookingVehicleType: '',
//     contactNo: '',
//     levelNo: slotId || '1', // Set levelNo based on parkingSlotId, default to '1'
//     userId: '',
//     parkingSlotId:slotId,
//   });

//   //const { parkingSlotId } = useParams(); // Get parkingSlotId from URL
//   const [slotNumber, setSlotNumber] = useState('');

//   useEffect(() => {
//     // If parkingSlotId exists, set slotNumber
//     if (slotId) {
//       setSlotNumber(parseInt(slotId, 10) + 1); // Assuming parkingSlotId is zero-based and you want 1-based number
//     }
//   }, [slotId]);
 
//   useEffect(() => {
//     // If parkingSlotId changes, update levelNo
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

//   // const handleSubmit =async (e) => {
//   //   e.preventDefault();
//   //   await axios.post('http://localhost:8282/api/userbookings', bookingDetails);
//   //   console.log('Booking Details:', bookingDetails);
//   //   alert('Booking successfully completed');

//   //   // Save booking status to localStorage
//   //   localStorage.setItem('bookedSlot', parkingSlotId);

//   //   // Clear the form fields
//   //   setBookingDetails({
//   //     bookingStartDateTime: '',
//   //     bookingEndDateTime: '',
//   //     bookingVehiclePlateNo: '',
//   //     bookingVehicleType: '',
//   //     contactNo: '',
//   //     levelNo: parkingSlotId || '1', // Reset to parkingSlotId or '1'
//   //     userId: '',
//   //     parkingSlotId:'',
//   //   });

//   //   // Navigate to GridEmployee component
//   //   navigate('/GridEmployee'); 
//   // };



//   const handleemployeeSubmit = async (event) => {
//     event.preventDefault();
  
//     const data = {
      
//       userId: parseInt(setBookingDetails.userId),
//       parkingSlotId :parseInt(setBookingDetails.parkingSlotId),
//       bookingStartDateTime:setBookingDetails.bookingStartDateTime,
//       bookingEndDateTime:setBookingDetails.bookingEndDateTime,
//       bookingbookingVehicleType:setBookingDetails.bookingbookingVehicleType,
//       bookingbookingVehiclePlateNo:parseInt(setBookingDetails.bookingbookingVehiclePlateNo),
        
//     };
  
//     try {
//         const response = await fetch('http://localhost:8282/api/userbookings', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//        // const localdata = await response.json();
//          //         const {  companyId } = localdata;
//            //       console.log(localdata);
//                   // Store token and complexId as needed
//              //     localStorage.setItem('companyId', companyId);
//         console.log(data);
  
//         if (response.ok) {
//             // Handle success
//             alert('Booking done successfully');
//             navigate('/GridEmployee');
//         } else {
//             // Handle errors
  
//             const errorText = await response.text();  // Use text() to get non-JSON responses
//             console.error('Error response:', errorText);
//             alert('Error during Booking. Please check the console for details.');
//             //const errorData = await response.json();
//             // console.error('Error:', errorData);
//         }
//     } catch (error) {
//         console.error('Request failed', error);
//     }
//   };
  
  

//   return (
//     <div className="booking-details">
//       <h1>Book Slot {slotNumber}</h1>
//       <form onSubmit={handleemployeeSubmit}>
      
//           <label>
//             Slot Number:
//             <input type="text" value={slotNumber} readOnly />
//           </label>
        
//         <label>
//           Start Time:
//           <input
//             type="datetime-local"
//             name="bookingStartDateTime"

//             value={bookingDetails.bookingStartDateTime}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           End Time:
//           <input
//             type="datetime-local"
//             name="bookingEndDateTime"
//             value={bookingDetails.bookingEndDateTime}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Vehicle Plate No:
//           <input
//             type="text"
//             name="bookingVehiclePlateNo"
//             value={bookingDetails.bookingVehiclePlateNo}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Vehicle Type:
//           <select
//             name="bookingVehicleType"
//             value={bookingDetails.bookingVehicleType}
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
//           User Id:
//           <input
//             type="text"
//             name="userId"
//             value={bookingDetails.userId}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Book Slot</button>
//       </form>
//     </div>
//   );
// };

// export default BookingDetails;











import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingDetails.css';

const BookingDetails = () => {
  const { slotId } = useParams();
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState({
    bookingStartDateTime: '',
    bookingEndDateTime: '',
    bookingVehiclePlateNo: '',
    bookingVehicleType: '',
    contactNo: '',
    levelNo: '',
    userId: '',
    parkingSlotId: slotId || '',
  });

  const [slotNumber, setSlotNumber] = useState('');

  useEffect(() => {
    // Update slotNumber based on slotId
    if (slotId) {
      setSlotNumber(parseInt(slotId, 10) + 1); // Assuming slotId is zero-based
    }
  }, [slotId]);

  useEffect(() => {
    // Update levelNo based on slotId
    if (slotId) {
      setBookingDetails(prevDetails => ({
        ...prevDetails,
        levelNo: '1' // Adjust if needed based on your application logic
      }));
    }
  }, [slotId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for number inputs
    setBookingDetails(prevDetails => ({
      ...prevDetails,
      [name]        : value

      // name === 'userId' || name === 'parkingSlotId'
      //   ? parseInt(value, 10) || ''
       // : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //const formatDate = (dateStr) => dateStr.replace('T', ' ');
    const data = {
      userId: parseInt(bookingDetails.userId),
      parkingSlotId: bookingDetails.parkingSlotId,
      bookingStartDateTime: bookingDetails.bookingStartDateTime,
      bookingEndDateTime: bookingDetails.bookingEndDateTime,
      bookingVehicleType: bookingDetails.bookingVehicleType,
      bookingVehiclePlateNo: bookingDetails.bookingVehiclePlateNo,
    };

    try {
      const response = await fetch('http://localhost:8282/api/userbookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      if (response.ok) {
        alert('Booking done successfully');
        
        navigate('/GridEmployee');
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        alert('Error during Booking. Please check the console for details.');
      }
    } catch (error) {
      console.error('Request failed', error);
    }
  };

  return (
    <div className="booking-details">
      <h1>Book Slot {slotNumber}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Slot Number:
          <input type="Number" value={bookingDetails.parkingSlotId} readOnly />
        </label>

        <label>
          Start Time:
          <input
            type="datetime-local"
            name="bookingStartDateTime"
            value={bookingDetails.bookingStartDateTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="datetime-local"
            name="bookingEndDateTime"
            value={bookingDetails.bookingEndDateTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Plate No:
          <input
            type="text"
            name="bookingVehiclePlateNo"
            value={bookingDetails.bookingVehiclePlateNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Type:
          <select
            name="bookingVehicleType"
            value={bookingDetails.bookingVehicleType}
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
          User Id:
          <input
            type="text"
            name="userId"
            value={bookingDetails.userId}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Book Slot</button>
      </form>
    </div>
  );
};

export default BookingDetails;

