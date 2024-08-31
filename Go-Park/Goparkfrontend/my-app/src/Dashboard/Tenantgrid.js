// import React, { useState, useEffect } from 'react';
// import './Grid.css';

// const Tenantgrid = () => {
//   const [totalSlots, setTotalSlots] = useState(58);
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
//   const [levels, setLevels] = useState([]);
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const columns = 5;

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       // Remove bookedSlotId from localStorage
//       localStorage.removeItem('bookedSlot');
//     }

//     // Generate slots
//     const updatedSlots = Array.from({ length: totalSlots }, (_, index) => ({
//       id: index,
//       status: index === parseInt(bookedSlotId, 10) ? 'Booked' : 'Available',
//     }));

//     setSlots(updatedSlots);
//   }, [totalSlots, selectedLevel]);

//   const handleBook = (id) => {
//     // Navigate to BookingDetails with the selected slotId
//     window.location.href = `/booking-details/${id}`;
//   };

//   const rows = Math.ceil(totalSlots / columns);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots(Array.from({ length: totalSlots }, (_, index) => ({
// //             id: index,
//             status: 'Available',
//           }))); // Reset slots
//         }}
//       >
//         <label>
//           Level:
//           <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//           >
//             <option value="Level 1">Level 1</option>
//             <option value="Level 2">Level 2</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Total Slots:
//           <input
//             type="number"
//             value={totalSlots}
//             onChange={(e) => setTotalSlots(parseInt(e.target.value, 10))}
//             min="1"
//           />
//         </label>
//         <button type="submit">Show slots</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {slots.map(slot => (
//           <div
//             key={slot.id}
//             className={`grid-item ${slot.status.toLowerCase()} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
//             onClick={() => slot.status === 'Available' && handleBook(slot.id)}
//           >
//             <div className="slot-number">{slot.id + 1}</div>
//             <div className="slot-status">{slot.status}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tenantgrid;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Grid.css';

const Tenantgrid = () => {
  const { complexId } = useParams();
  const [slots, setSlots] = useState([]);
  const [bookedSlotId, setBookedSlotId] = useState(null);
  const navigate = useNavigate();
  const columns = 5;

  useEffect(() => {
    // Fetch slots from the backend
    axios.get(`http://localhost:8282/api/getSlots/${complexId}`)
      .then(response => {
        setSlots(response.data);
      })
      .catch(error => {
        console.error("Error fetching slots:", error);
      });

    // Retrieve booked slot from localStorage
    const bookedSlotId = localStorage.getItem('bookedSlot');
    if (bookedSlotId) {
      setBookedSlotId(parseInt(bookedSlotId, 10));
      localStorage.removeItem('bookedSlot');
    }
  }, [complexId]);

  const handleBook = (slotId) => {
    navigate(`/booking-details/${slotId}`);
  };

  return (
    <div className="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {slots.map(slot => (
        <div
          key={slot.id}
          className={`grid-item ${slot.status.toLowerCase()} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
          onClick={() => slot.status === 'Available' && handleBook(slot.id)}
        >
          <div className="slot-number">{slot.id + 1}</div>
          <div className="slot-status">{slot.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Tenantgrid;
