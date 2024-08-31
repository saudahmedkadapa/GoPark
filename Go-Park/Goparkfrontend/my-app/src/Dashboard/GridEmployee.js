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

// //   // Handle booking a slot and redirect
//   const handleBook = (id) => {
//     setSlots(slots.map(slot =>
//       slot.id === id ? { ...slot, status: 'Occupied' } : slot
//     ));
//     navigate(`/booking-details/${id}`); // Redirect to BookingDetails component with the slot ID
//   };

// //   // Calculate number of rows based on total slots and columns
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
// //         </label>
// //         <button type="submit">Update Grid</button>
// //       </form>

// //       <div
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


// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(58);
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
//   const columns = 5;

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');

//     // Generate slots
//     const updatedSlots = Array.from({ length: totalSlots }, (_, index) => ({
//       id: index,
//       status: index === parseInt(bookedSlotId, 10) ? 'Booked' : 'Available',
//     }));

//     setSlots(updatedSlots);

//     // Clear localStorage after updating slots
//     localStorage.removeItem('bookedSlot');
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
//             id: index,
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
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {slots.map(slot => (
//           <div
//             key={slot.id}
//             className={`grid-item ${slot.status.toLowerCase()}`}
//             onClick={() => slot.status === 'Available' && handleBook(slot.id)}
//           >
//             <div className="slot-number">{slot.id + 1}</div>
//             <div className="slot-status">{slot.status}</div>
//             {slot.status === 'Available' && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;


// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(58);
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
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
//             id: index,
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
//         <button type="submit">Update Grid</button>
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
//             {slot.status === 'Available' && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;







// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(58);
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
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

//     // Calculate the number of 2-wheeler and 4-wheeler slots
//     const twoWheelerSlots = Math.floor(totalSlots * 0.8); // 80% for 2-wheelers
//     const fourWheelerSlots = totalSlots - twoWheelerSlots; // 20% for 4-wheelers

//     // Generate slots with type
//     const updatedSlots = Array.from({ length: totalSlots }, (_, index) => {
//       const type = index < twoWheelerSlots ? '2-wheeler' : '4-wheeler';
//       return {
//         id: index,
//         status: index === parseInt(bookedSlotId, 10) ? 'Booked' : 'Available',
//         type,
//       };
//     });

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
//             id: index,
//             status: 'Available',
//             type: index < Math.floor(totalSlots * 0.8) ? '2-wheeler' : '4-wheeler',
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
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {slots.map(slot => (
//           <div
//             key={slot.id}
//             //className={`grid-item ${slot.status.toLowerCase()} ${slot.type.replace('-', '')} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}

//             className={`grid-item ${slot.status.toLowerCase()} ${slot.type} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
//             onClick={() => slot.status === 'Available' && handleBook(slot.id)}
//           >
//             <div className="slot-number">{slot.id + 1}</div>
//             <div className="slot-status">{slot.status}</div>
//             {slot.status === 'Available' && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;














// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';
// import axios from 'axios';

// const GridEmployee = () => {
//   const [totalSlots, setTotalSlots] = useState(58);
//   const [slots, setSlots] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const columns = 5;
//   const [data, setData] = useState([]);
//   //const userId = localStorage.getItem(userId);


//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     if (userId) {
//         axios.get(`http://localhost:8282/api/users/${userId}`)
//             .then(response => {
//               console.log([data]);
//                 setData([response.data]); // Ensure the data is in an array if required by the table
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the data!", error);
//             });
//     } else {
//         console.error("No userId found in local storage");
//     }
// }, []);

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       // Remove bookedSlotId from localStorage
//       localStorage.removeItem('bookedSlot');
//     }

//     // Generate slots
//     const updatedSlots = Array.from({ length: totalSlots }, (_, index) => {
//       return {
//         id: index,
//         status: index === parseInt(bookedSlotId, 10) ? 'Booked' : 'Available',
//         type: '', // Remove type property
//       };
//     });

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
//             id: index,
//             status: 'Available',
//             type: '', // Remove type property
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
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {slots.map(slot => (
//           <div
//             key={slot.id}
//             className={`grid-item ${slot.status.toLowerCase()}`}
//             onClick={() => slot.status === 'Available' && handleBook(slot.id)}
//           >
//             <div className="slot-number">{slot.id + 1}</div>
//             <div className="slot-status">{slot.status}</div>
//             {slot.status === 'Available' && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;









// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';
// import axios from 'axios';

// const GridEmployee = () => {
//   const [complexId, setComplexId] = useState(null);
//   const [selectedLevel, setSelectedLevel] = useState('Level 1');
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const columns = 5;
//   const [data, setData] = useState([]);
//   const [parkingLevels, setParkingLevels] = useState([]);
//   const [totalCapacity, setTotalCapacity] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     if (userId) {
//       axios.get(`http://localhost:8282/api/users/${userId}`)
//         .then(response => {
//           console.log([data]);
//           setData([response.data]); // Ensure the data is in an array if required by the table
//         })
//         .catch(error => {
//           console.error("There was an error fetching the data!", error);
//         });
//     } else {
//       console.error("No userId found in local storage");
//     }
//   }, []);

// useEffect(() => {
//     if (complexId) {
//       setLoading(true);
//       axios.get(`http://localhost:8282/api/parking-levels/${complexId}`)
//         .then(response => {
//           setParkingLevels(response.data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error("There was an error fetching parking levels!", error);
//           setLoading(false);
//         });
//     }
//   }, [complexId]);
//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       // Remove bookedSlotId from localStorage
//       localStorage.removeItem('bookedSlot');
//     }
//   }, []);

//   const handleBook = (id) => {
//     // Navigate to BookingDetails with the selected slotId
//     window.location.href = `/booking-details/${id}`;
//   };

//   const rows = Math.ceil(totalCapacity / columns);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           // Reset slots
//         }}
//       >
//         <label>
//           Complex ID:
//           <input
//             type="number"
//             value={complexId}
//             onChange={(e) => setComplexId(parseInt(e.target.value, 10))}
//             min="1"
//           />
//         </label>
//         <br />
//         <label>
//           Level:
//           {/* <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//           >
//             {parkingLevels.map((level, index) => (
//               <option key={index} value={level.level_number}>{level.level_number}</option>
//             ))}
//           </select> */}
          


          
// <select
//   value={selectedLevel}
//   onChange={(e) => setSelectedLevel(e.target.value)}
// >
//   {loading ? (
//     <option>Loading...</option>
//   ) : Array.isArray(parkingLevels) && parkingLevels.map((level, index) => (
//     <option key={index} value={level.level_number}>{level.level_number}</option>
//   ))}
// </select>
//         </label>
//         <br />
//         <button type="submit">Update Grid</button>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {Array.from({ length: totalCapacity }, (_, index) => (
//           <div
//             key={index}
//             className={`grid-item ${bookedSlotId === index ? 'Booked' : 'Available'}`}
//             onClick={() => bookedSlotId !== index && handleBook(index)}
//           >
//             <div className="slot-number">{index + 1}</div>
//             <div className="slot-status">{bookedSlotId === index ? 'Booked' : 'Available'}</div>
//             {bookedSlotId !== index && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const GridEmployee = () => {
//   const [complexId, setComplexId] = useState('');
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [parkingLevels, setParkingLevels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [totalCapacity, setTotalCapacity] = useState(0);
//   const [columns, setColumns] = useState(5); // adjust this value as needed
//   const [bookedSlotId, setBookedSlotId] = useState(null);

//   useEffect(() => {
    
//       setLoading(true);
//       axios.get(`http://localhost:8282/api/parking-levels/bycomplexid/${complexId}`)
//         .then(response => {
//           setParkingLevels(response.data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error("There was an error fetching parking levels!", error);
//           setLoading(false);
//         });
    
//   }, []);

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       // Remove bookedSlotId from localStorage
//       localStorage.removeItem('bookedSlot');
//     }
//   }, []);

//   const handleBook = (id) => {
//     // Navigate to BookingDetails with the selected slotId
//     window.location.href = `/booking-details/${id}`;
//   };

//   const handleShowLevels = () => {
//     // Show levels dropdown
//     document.getElementById('levels-dropdown').style.display = 'block';
//   };

//   const handleSelectLevel = (level) => {
//     setSelectedLevel(level);
//     // Update grid according to total capacity of complex ID and selected level
//     axios.get(`http://localhost:8282/api/parking-levels/bycomplexid/${complexId}/${level}`)
//       .then(response => {
//         setTotalCapacity(response.data.totalCapacity);
//       })
//       .catch(error => {
//         console.error("There was an error fetching total capacity!", error);
//       });
//   };

//   const rows = Math.ceil(totalCapacity / columns);

//   return (
//     <div>
//       <form>
//         <label>
//           Complex ID:
//           <input
//             type="number"
//             value={complexId}
//             onChange={(e) => setComplexId(parseInt(e.target.value, 10))}
//             min="1"
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleShowLevels}>Show Levels</button>
//         <div id="levels-dropdown" style={{ display: 'none' }}>
//           <select
//             value={selectedLevel}
//             onChange={(e) => handleSelectLevel(e.target.value)}
//           >
//             {loading ? (
//               <option>Loading...</option>
//             ) : Array.isArray(parkingLevels) && parkingLevels.map((level, index) => (
//               <option key={index} value={level.level_number}>{level.level_number}</option>
//             ))}
//           </select>
//         </div>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {Array.from({ length: totalCapacity }, (_, index) => (
//           <div
//             key={index}
//             className={`grid-item ${bookedSlotId === index ? 'Booked' : 'Available'}`}
//             onClick={() => bookedSlotId !== index && handleBook(index)}
//           >
//             <div className="slot-number">{index + 1}</div>
//             <div className="slot-status">{bookedSlotId === index ? 'Booked' : 'Available'}</div>
//             {bookedSlotId !== index && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const GridEmployee = () => {
//   const [complexId, setComplexId] = useState('');
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [parkingLevels, setParkingLevels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [totalCapacity, setTotalCapacity] = useState(0);
//   const [columns, setColumns] = useState(5); // adjust this value as needed
//   const [bookedSlotId, setBookedSlotId] = useState(null);

//   useEffect(() => {
//     if (complexId) {
//       setLoading(true);
//       axios.get(`http://localhost:8282/api/parking-levels/bycomplexid/${complexId}`)
//         .then(response => {
//           setParkingLevels(response.data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error("There was an error fetching parking levels!", error);
//           setLoading(false);
//         });
//     }
//   }, [complexId]);

//   useEffect(() => {
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       localStorage.removeItem('bookedSlot');
//     }
//   }, []);

//   const handleBook = (id) => {
//     window.location.href = `/booking-details/${id}`;
//   };

//   const handleShowLevels = () => {
//     document.getElementById('levels-dropdown').style.display = 'block';
//   };

//   const handleSelectLevel = (level) => {
//     setSelectedLevel(level);
//     axios.get(`http://localhost:8282/api/parking-levels/bycomplexid/${complexId}/${level}`)
//       .then(response => {
//         const newTotalCapacity = response.data.totalCapacity;
//         setTotalCapacity(typeof newTotalCapacity === 'number' && !isNaN(newTotalCapacity) ? newTotalCapacity : 0);
//       })
//       .catch(error => {
//         console.error("There was an error fetching total capacity!", error);
//       });
//   };

//   const rows = totalCapacity > 0 ? Math.ceil(totalCapacity / columns) : 0;

//   const handleComplexIdChange = (e) => {
//     const value = e.target.value;
//     const numericValue = isNaN(value) ? '' : parseInt(value, 10);
//     setComplexId(numericValue);
//   };

//   return (
//     <div>
//       <form>
//         <label>
//           Complex ID:
//           <input
//             type="number"
//             value={complexId || ''}
//             onChange={handleComplexIdChange}
//             min="1"
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleShowLevels}>Show Levels</button>
//         <div id="levels-dropdown" style={{ display: 'none' }}>
//           <select
//             value={selectedLevel}
//             onChange={(e) => handleSelectLevel(e.target.value)}
//           >
//             {loading ? (
//               <option>Loading...</option>
//             ) : Array.isArray(parkingLevels) && parkingLevels.map((level, index) => (
//               <option key={index} value={level.level_number}>{level.level_number}</option>
//             ))}
//           </select>
//         </div>
//       </form>

//       <div
//         className="grid-container"
//         style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//       >
//         {Array.from({ length: totalCapacity }, (_, index) => (
//           <div
//             key={index}
//             className={`grid-item ${bookedSlotId === index ? 'Booked' : 'Available'}`}
//             onClick={() => bookedSlotId !== index && handleBook(index)}
//           >
//             <div className="slot-number">{index + 1}</div>
//             <div className="slot-status">{bookedSlotId === index ? 'Booked' : 'Available'}</div>
//             {bookedSlotId !== index && (
//               <button className="book-button">Book</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridEmployee;












// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';

// const LEVEL_SLOT_COUNTS = {
//   'Level 1': 58,
//   'Level 2': 63
// };

// const GridEmployee = () => {
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [slots, setSlots] = useState([]);
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const [showGrid, setShowGrid] = useState(false); // State to control grid visibility

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       localStorage.removeItem('bookedSlot');
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedLevel) {
//       const totalSlots = LEVEL_SLOT_COUNTS[selectedLevel];
//       const twoWheelerSlots = Math.floor(totalSlots * 0.8); // 80% for 2-wheelers
//       const fourWheelerSlots = totalSlots - twoWheelerSlots; // 20% for 4-wheelers

//       const updatedSlots = Array.from({ length: totalSlots }, (_, index) => {
//         const type = index < twoWheelerSlots ? '2-wheeler' : '4-wheeler';
//         return {
//           id: index,
//           status: index === bookedSlotId ? 'Booked' : 'Available',
//           type,
//         };
//       });

//       setSlots(updatedSlots);
//       setShowGrid(true); // Show the grid after level selection
//     }
//   }, [selectedLevel, bookedSlotId]);

//   const handleBook = (id) => {
//     // Navigate to BookingDetails with the selected slotId
//     window.location.href = `/booking-details/${id}`;
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots([]); // Clear slots on form submit
//         }}
//       >
//         <label>
//           Level:
//           <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//           >
//             <option value="">Select Level</option>
//             <option value="Level 1">Level 1</option>
//             <option value="Level 2">Level 2</option>
//           </select>
//         </label>
//       </form>

//       {showGrid && (
//         <div
//           className="grid-container"
//           style={{ gridTemplateColumns: `repeat(5, 1fr)` }}
//         >
//           {slots.map(slot => (
//             <div
//               key={slot.id}
//               className={`grid-item ${slot.status.toLowerCase()} ${slot.type.replace('-', '')} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
//               onClick={() => slot.status === 'Available' && handleBook(slot.id)}
//             >
//               <div className="slot-number">{slot.id + 1}</div>
//               <div className="slot-status">{slot.status}</div>
//               {slot.status === 'Available' && (
//                 <button className="book-button">Book</button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GridEmployee;



// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';

// const LEVEL_SLOT_COUNTS = {
//   'Level 1': 67,
//   'Level 2': 76
// };

// const GridEmployee = () => {
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [slots, setSlots] = useState([]);
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const [showGrid, setShowGrid] = useState(false); // State to control grid visibility

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       localStorage.removeItem('bookedSlot');
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedLevel) {
//       const totalSlots = LEVEL_SLOT_COUNTS[selectedLevel];
//       const twoWheelerSlots = Math.floor(totalSlots * 0.6); // 60% for 2-wheelers
//       const fourWheelerSlots = Math.floor(totalSlots * 0.3); // 30% for 4-wheelers
//       const hatchedSlots = totalSlots - twoWheelerSlots - fourWheelerSlots; // Remaining for hatched cars

//       const updatedSlots = Array.from({ length: totalSlots }, (_, index) => {
//         let type;
//         if (index < twoWheelerSlots) {
//           type = '2-wheeler';
//         } else if (index < twoWheelerSlots + fourWheelerSlots) {
//           type = '4-wheeler';
//         } else {
//           type = 'hatched';
//         }
//         return {
//           id: index,
//           status: index === bookedSlotId ? 'Booked' : 'Available',
//           type,
//         };
//       });

//       setSlots(updatedSlots);
//       setShowGrid(true); // Show the grid after level selection
//     }
//   }, [selectedLevel, bookedSlotId]);

//   const handleBook = (id) => {
//     // Navigate to BookingDetails with the selected slotId
//     window.location.href = `/booking-details/${id}`;
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots([]); // Clear slots on form submit
//         }}
//       >
//         <label>
//           Level:
//           <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//           >
//             <option value="">Select Level</option>
//             <option value="Level 1">Level 1</option>
//             <option value="Level 2">Level 2</option>
//           </select>
//         </label>
//       </form>

//       {showGrid && (
//         <div
//           className="grid-container"
//           style={{ gridTemplateColumns: `repeat(5, 1fr)` }}
//         >
//           {slots.map(slot => (
//             <div
//               key={slot.id}
//               className={`grid-item ${selectedLevel.replace(' ', '-').toLowerCase()} ${slot.type} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
//               onClick={() => slot.status === 'Available' && handleBook(slot.id)}
//             >
//               <div className="slot-number">{slot.id + 1}</div>
//               <div className="slot-status">{slot.status}</div>
//               {slot.status === 'Available' && (
//                 <button className="book-button">Book</button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GridEmployee;

// import React, { useState, useEffect } from 'react';
// import './GridEmployee.css';

// const LEVEL_SLOT_COUNTS = {
//   'Level 1': 58,
//   'Level 2': 63
// };

// const GridEmployee = () => {
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [slots, setSlots] = useState([]);
//   const [bookedSlotId, setBookedSlotId] = useState(null); // State to track booked slot ID
//   const [showGrid, setShowGrid] = useState(false); // State to control grid visibility

//   useEffect(() => {
//     // Retrieve booked slot from localStorage
//     const bookedSlotId = localStorage.getItem('bookedSlot');
//     if (bookedSlotId) {
//       setBookedSlotId(parseInt(bookedSlotId, 10)); // Set booked slot ID
//       localStorage.removeItem('bookedSlot');
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedLevel) {
//       const totalSlots = LEVEL_SLOT_COUNTS[selectedLevel];
//       const twoWheelerSlots = Math.floor(totalSlots * 0.6); // 60% for 2-wheelers
//       const fourWheelerSlots = Math.floor(totalSlots * 0.3); // 30% for 4-wheelers
//       const hatchedSlots = totalSlots - twoWheelerSlots - fourWheelerSlots; // Remaining for hatched cars

//       const updatedSlots = Array.from({ length: totalSlots }, (_, index) => {
//         let type;
//         if (index < twoWheelerSlots) {
//           type = '2-wheeler';
//         } else if (index < twoWheelerSlots + fourWheelerSlots) {
//           type = '4-wheeler';
//         } else {
//           type = 'hatched';
//         }
//         return {
//           id: index,
//           status: index === bookedSlotId ? 'Booked' : 'Available',
//           type,
//         };
//       });

//       setSlots(updatedSlots);
//       setShowGrid(true); // Show the grid after level selection
//     }
//   }, [selectedLevel, bookedSlotId]);

//   const handleBook = (id) => {
//     // Update slot status to 'Booked' and update state
//     const updatedSlots = slots.map(slot =>
//       slot.id === id
//         ? { ...slot, status: 'Booked' }
//         : slot
//     );
//     setSlots(updatedSlots);
//     setBookedSlotId(id);

//     // Store the booked slot ID in localStorage (if needed for navigation or other purposes)
//     localStorage.setItem('bookedSlot', id);

//     // Optionally, you can navigate to BookingDetails
//     window.location.href = `/booking-details/${id}`;
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSlots([]); // Clear slots on form submit
//         }}
//       >
//         <label>
//           Level:
//           <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//           >
//             <option value="">Select Level</option>
//             <option value="Level 1">Level 1</option>
//             <option value="Level 2">Level 2</option>
//           </select>
//         </label>
//       </form>

//       {selectedLevel && (
//         <div className="color-legend">
//           <p><span className="color-box twowheeler"></span> 2-Wheeler Slots</p>
//           <p><span className="color-box fourwheeler"></span> 4-Wheeler Slots</p>
//           <p><span className="color-box hatched"></span> Hatched Cars</p>
//           {/* <p><span className="color-box booked-slot"></span> Booked Slots</p> */}
//         </div>
//       )}

//       {showGrid && (
//         <div
//           className="grid-container"
//           style={{ gridTemplateColumns: `repeat(5, 1fr)` }}
//         >
//           {slots.map(slot => (
//             <div
//               key={slot.id}
//               className={`grid-item ${selectedLevel.replace(' ', '-').toLowerCase()} ${slot.type} ${slot.status.toLowerCase()} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
//               onClick={() => slot.status === 'Available' && handleBook(slot.id)}
                
//             >
                
//               <div className="slot-number">{slot.id + 1}</div>
//               <div className="slot-status">{slot.status}</div>
//               {slot.status === 'Available' && (
//                 <button className="book-button">Book</button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GridEmployee;












import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GridEmployee.css';

const GridEmployee = () => {
  const [totalSlots, setTotalSlots] = useState(58);
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();
  const columns = 5;

  // Function to generate initial slots
  function generateSlots(numSlots) {
    return Array.from({ length: numSlots }, (_, index) => ({
      id: index,
      status: 'Available',
    }));
  }

  // Load slots from localStorage or generate new ones
  useEffect(() => {
    const savedSlots = localStorage.getItem('slots');
    if (savedSlots) {
      setSlots(JSON.parse(savedSlots));
    } else {
      const generatedSlots = generateSlots(totalSlots);
      setSlots(generatedSlots);
      localStorage.setItem('slots', JSON.stringify(generatedSlots));
    }
  }, [totalSlots]);

  // Handle booking a slot and redirect
  const handleBook = (id) => {
    const updatedSlots = slots.map(slot =>
      slot.id === id ? { ...slot, status: 'Occupied' } : slot
    );
    setSlots(updatedSlots);
    localStorage.setItem('slots', JSON.stringify(updatedSlots)); // Save updated slots to localStorage
    //navigate('/slot-grid/${id}');
  navigate(`/booking-details/${id}`);
  };

  // Handle grid update on form submission
  const handleGridUpdate = (event) => {
    event.preventDefault();
    const generatedSlots = generateSlots(totalSlots);
    setSlots(generatedSlots);
    localStorage.setItem('slots', JSON.stringify(generatedSlots)); // Reset slots in localStorage
  };

  const rows = Math.ceil(totalSlots / columns);

  return (
    <div>
      {/* <form onSubmit={handleGridUpdate}>
        <label>
          Total Slots:
          <input
            type="number"
            value={totalSlots}
            onChange={(e) => setTotalSlots(parseInt(e.target.value, 10))}
            min="1"
          />
        </label>
        <button type="submit">Update Grid</button>
      </form> */}
 <div className="color-legend">
          <p><span className="color-box twowheeler"></span> 2-Wheeler Slots</p>
          <p><span className="color-box fourwheeler"></span> 4-Wheeler Slots</p>
           <p><span className="color-box hatched"></span> Hatched Cars</p>
           {/* <p><span className="color-box booked-slot"></span> Booked Slots</p> */}
         </div>

      <div
        className="grid-container"
        style={{ gridTemplateColumns: 'repeat(${columns}, 1fr)' }}
      >
        {slots.map(slot => (
          <div key={slot.id} className={'grid-item ${slot.status.toLowerCase()}'}>
            <div className="slot-number">{slot.id + 1}</div>
            <div className="slot-status">{slot.status}</div>
            {slot.status === 'Available' && (
              <button onClick={() => handleBook(slot.id)} className="book-button">
                Book
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridEmployee;