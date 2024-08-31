// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './GridEmployee.css'; // Import the CSS file for styling

// const Grid = () => {
//   const [totalSlots, setTotalSlots] = useState(58); // Total number of slots
//   const [slots, setSlots] = useState(generateSlots(totalSlots)); // Initial slots state
//   const [selectedLevel, setSelectedLevel] = useState('Level 1'); // State for selected level
//   const navigate = useNavigate(); // Initialize useNavigate

//   const columns = 5; // Fixed number of columns

//   // Function to generate initial slots
//   function generateSlots(numSlots) {
//     return Array.from({ length: numSlots }, (_, index) => ({
//       id: index,
//       status: 'Available',
//     }));
//   }

//   // Handle booking a slot and redirect
//   const handleBook = (id) => {
//     setSlots(slots.map(slot =>
//       slot.id === id ? { ...slot, status: 'Occupied' } : slot
//     ));
//     navigate(`/booking-details/${id}`); // Redirect to BookingDetails component with the slot ID
//   };

//   // Calculate number of rows based on total slots and columns
//   const rows = Math.ceil(totalSlots / columns);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots(generateSlots(totalSlots)); // Reset slots
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
//             {/* Add more levels if needed */}
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
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }} // Corrected syntax
//       >
//         {slots.map(slot => (
//           <div key={slot.id} className={`grid-item ${slot.status.toLowerCase()}`}>
//             <div className="slot-number">{slot.id + 1}</div> {/* Show slot number */}
//             <div className="slot-status">{slot.status}</div>
//             {slot.status === 'Available' && (
//               <button onClick={() => handleBook(slot.id)} className="book-button">
//                 Book
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Grid;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './GridEmployee.css';

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(58); // Total number of slots
//   const [slots, setSlots] = useState([]); // Initial slots state
//   const [selectedLevel, setSelectedLevel] = useState('Level 1'); // State for selected level
//   const navigate = useNavigate(); // Initialize useNavigate

//   const columns = 5; // Fixed number of columns

//   // Function to generate initial slots
//   function generateSlots(numSlots) {
//     // Assuming that bookedSlot is set to null after booking
//     return Array.from({ length: numSlots }, (_, index) => ({
//       id: index,
//       status: 'Available', // Reset slot status to 'Available' initially
//     }));
//   }

//   // Handle booking a slot and redirect
//   const handleBook = (id) => {
//     setSlots(slots.map(slot =>
//       slot.id === id ? { ...slot, status: 'Occupied' } : slot
//     ));
//     navigate(`/booking-details/${id}`); // Redirect to BookingDetails component with the slot ID

//     // Clear booking status from sessionStorage
//     sessionStorage.removeItem('bookedSlot');
//   };

//   // Update slots when totalSlots or selectedLevel changes
//   useEffect(() => {
//     setSlots(generateSlots(totalSlots));
//   }, [totalSlots, selectedLevel]);

//   // Calculate number of rows based on total slots and columns
//   const rows = Math.ceil(totalSlots / columns);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots(generateSlots(totalSlots)); // Reset slots
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
//             {/* Add more levels if needed */}
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
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }} // Corrected syntax
//       >
//         {slots.map(slot => (
//           <div key={slot.id} className={`grid-item ${slot.status.toLowerCase()}`}>
//             <div className="slot-number">{slot.id + 1}</div> {/* Show slot number */}
//             <div className="slot-status">{slot.status}</div>
//             {slot.status === 'Available' && (
//               <button onClick={() => handleBook(slot.id)} className="book-button">
//                 Book
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './GridEmployee.css';

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(58);
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
//   const navigate = useNavigate();
//   const columns = 5;

//   function generateSlots(numSlots) {
//     return Array.from({ length: numSlots }, (_, index) => ({
//       id: index,
//       status: 'Available',
//     }));
//   }

//   const handleBook = (id) => {
//     setSlots(slots.map(slot =>
//       slot.id === id ? { ...slot, status: 'Occupied' } : slot
//     ));
//     navigate(`/booking-details/${id}`);
//   };

//   useEffect(() => {
//     const bookedSlotId = sessionStorage.getItem('bookedSlot');
    
//     // Update slots based on the booked slot ID
//     setSlots(generateSlots(totalSlots).map(slot =>
//       slot.id === parseInt(bookedSlotId, 10) ? { ...slot, status: 'Booked' } : slot
//     ));
    
//     // Clear sessionStorage after using it
//     sessionStorage.removeItem('bookedSlot');
//   }, [totalSlots, selectedLevel]);

//   const rows = Math.ceil(totalSlots / columns);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots(generateSlots(totalSlots)); // Reset slots
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
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {slots.map(slot => (
//           <div key={slot.id} className={`grid-item ${slot.status.toLowerCase()}`}>
//             <div className="slot-number">{slot.id + 1}</div>
//             <div className="slot-status">{slot.status}</div>
//             {slot.status === 'Available' && (
//               <button onClick={() => handleBook(slot.id)} className="book-button">
//                 Book
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;
import React, { useState, useEffect } from 'react';
import './Grid.css';

const GridComplex = () => {
  const [totalSlots, setTotalSlots] = useState('');
  const [slots, setSlots] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [gridUpdated, setGridUpdated] = useState(false); // State to track if the grid needs to be updated
  const columns = 5;

  useEffect(() => {
    if (gridUpdated) {
      // Generate slots only if totalSlots is valid and non-empty
      if (totalSlots && !isNaN(totalSlots) && totalSlots > 0) {
        const updatedSlots = Array.from({ length: parseInt(totalSlots, 10) }, (_, index) => ({
          id: index,
          status: 'Available', // Initially set all slots to 'Available'
        }));
        setSlots(updatedSlots);
      } else {
        setSlots([]); // Clear slots if totalSlots is invalid or empty
      }
      setGridUpdated(false); // Reset the update flag
    }
  }, [totalSlots, gridUpdated]);

  const handleTotalSlotsChange = (e) => {
    const newTotalSlots = e.target.value;
    // Allow empty input and set the totalSlots value accordingly
    setTotalSlots(newTotalSlots);
  };

  const handleUpdateGrid = (e) => {
    e.preventDefault(); // Prevent form from submitting
    setGridUpdated(true); // Trigger grid update
  };

  const rows = Math.ceil(totalSlots ? parseInt(totalSlots, 10) / columns : 0);

  return (
    <div>
      <form onSubmit={handleUpdateGrid}>
        <label>
          Level:
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">Select a level</option>
            {/* Add actual levels dynamically here */}
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
          </select>
        </label>
        <br />
        <label>
          Total Slots:
          <input
            type="number"
            value={totalSlots}
            onChange={handleTotalSlotsChange}
            min="1"
            step="1"
            placeholder="Enter number of slots"
          />
        </label>
        <button type="submit">Update Grid</button>
      </form>

      <div className="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {slots.map(slot => (
          <div
            key={slot.id}
            className={`grid-item ${slot.status.toLowerCase()}`}
          >
            <div className="slot-number">{slot.id + 1}</div>
            <div className="slot-status">{slot.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComplex;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // For API requests
// import './Grid.css'; // Make sure you have the CSS file for styling

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(0); // Start with 0 and set dynamically
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [levels, setLevels] = useState([]);
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const columns = 5;

//   useEffect(() => {
//     // Fetch total parking levels from the API
//     axios.get('http://localhost:8282/api/getcomplexes')
//       .then(response => {
//         const totalLevels = response.data.map(complex => complex.total_parking_levels);
//         const uniqueLevels = [...new Set(totalLevels)]; // Remove duplicates
//         setLevels(uniqueLevels);
//         if (uniqueLevels.length > 0) {
//           setSelectedLevel(`Level ${uniqueLevels[0]}`); // Set default level if available
//         }
//       })
//       .catch(error => {
//         console.error("There was an error fetching the levels!", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedLevel) {
//       const levelNumber = parseInt(selectedLevel.split(' ')[1], 10);
//       // Fetch slots for the selected level
//       axios.get(`http://localhost:8282/api/parking-levels/${selectedLevel}`, {
//         params: { level: levelNumber } // Adjust query parameter name if needed
//       })
//         .then(response => {
//           const totalCapacity = response.data.parkingLevelCapacity; // Assuming this is returned by API
//           setTotalSlots(totalCapacity); // Update totalSlots
//           const updatedSlots = Array.from({ length: totalCapacity }, (_, index) => ({
//             id: index,
//             status: 'Available',
//           }));
//           setSlots(updatedSlots);
//         })
//         .catch(error => {
//           console.error("There was an error fetching the slots!", error);
//         });
//     }
//   }, [selectedLevel]);

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       localStorage.removeItem('bookedSlot'); // Remove bookedSlotId from localStorage
//     }
//   }, []);

//   const rows = Math.ceil(totalSlots / columns);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//         }}
//       >
//         <label>
//           Level:
//           <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//           >
//             <option value="">Select a level</option>
//             {levels.map(level => (
//               <option key={level} value={`Level ${level}`}>
//                 Level {level}
//               </option>
//             ))}
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
//           >
//             <div className="slot-number">{slot.id + 1}</div>
//             <div className="slot-status">{slot.status}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; // To get the complexId from URL parameters
// import './Grid.css'; // Make sure this file contains appropriate styling

// const GridComplex = () => {
//   const { complexId } = useParams(); // Retrieve complexId from URL parameters
//   const [levels, setLevels] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [levelCapacity, setLevelCapacity] = useState(0);
//   const [slots, setSlots] = useState([]);
//   const columns = 5; // Number of columns for grid layout

//   // Fetch parking levels when component mounts or complexId changes
//   useEffect(() => {
//     if (complexId) {
//       axios.get(`http://localhost:8282/api/parking-levels?complexId=${complexId}`)
//         .then(response => {
//           console.log("Fetched Levels:", response.data); // Debugging output
//           setLevels(response.data); // Set levels data
//         })
//         .catch(error => {
//           console.error("Error fetching parking levels:", error);
//         });
//     }
//   }, [complexId]);

//   // Fetch slots for the selected level when selectedLevel changes
//   useEffect(() => {
//     if (selectedLevel) {
//       axios.get('http://localhost:8282/api/parking-slots', { params: { levelId: selectedLevel } })
//         .then(response => {
//           console.log("Fetched Slots:", response.data); // Debugging output
//           if (response.data) {
//             setLevelCapacity(response.data.capacity || 0); // Handle default value if capacity is not provided
//             setSlots(response.data.slots || []); // Handle default value if slots are not provided
//           } else {
//             console.error("Unexpected slot data format:", response.data);
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching parking slots:", error);
//         });
//     }
//   }, [selectedLevel]);

//   const handleLevelChange = (e) => {
//     setSelectedLevel(e.target.value); // Update selected level
//   };

//   const rows = Math.ceil(levelCapacity / columns); // Calculate the number of rows for grid layout

//   return (
//     <div>
//       <form onSubmit={(event) => event.preventDefault()}>
//         <label>
//           Level:
//           <select value={selectedLevel} onChange={handleLevelChange}>
//             <option value="">Select a level</option>
//             {levels.length > 0 ? (
//               levels.map(level => (
//                 <option key={level.parking_level_id} value={level.parking_level_id}>
//                   Level {level.level_number}
//                 </option>
//               ))
//             ) : (
//               <option value="">No levels available</option>
//             )}
//           </select>
//         </label>
//       </form>

//       <div className="level-info">
//         {selectedLevel && (
//           <>
//             <h2>Level {levels.find(level => level.parking_level_id === parseInt(selectedLevel)).level_number} Details</h2>
//             <p>Capacity: {levelCapacity}</p>
//           </>
//         )}
//       </div>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {slots.map(slot => (
//           <div
//             key={slot.parking_slot_id}
//             className={`grid-item ${slot.availability.toLowerCase()}`}
//           >
//             <div className="slot-number">{slot.slot_number}</div>
//             <div className="slot-status">{slot.availability}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridComplex;
