import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GridEmployeeUser.css';

const GridEmployee = () => {
  const [totalSlots, setTotalSlots] = useState(58);
  const [slots, setSlots] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('Level 1');
  const [bookedSlotId, setBookedSlotId] = useState(null);
  const columns = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const bookedSlotId = localStorage.getItem('bookedSlot');
    if (bookedSlotId) {
      setBookedSlotId(parseInt(bookedSlotId, 10));
      localStorage.removeItem('bookedSlot');
    }

    const updatedSlots = Array.from({ length: totalSlots }, (_, index) => ({
      id: index,
      status: index === parseInt(bookedSlotId, 10) ? 'Booked' : 'Available',
    }));

    setSlots(updatedSlots);
  }, [totalSlots, selectedLevel]);

  const handleBook = (id) => {
    navigate(`/EmployeeUserBookingDetails/${id}`);
  };

  const rows = Math.ceil(totalSlots / columns);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSlots(Array.from({ length: totalSlots }, (_, index) => ({
            id: index,
            status: 'Available',
          })));
        }}
      >
        <label>
          Level:
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
          </select>
        </label>
        <br />
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
      </form>

      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {slots.map(slot => (
          <div
            key={slot.id}
            className={`grid-item ${slot.status.toLowerCase()} ${slot.id === bookedSlotId ? 'booked-slot' : ''}`}
            onClick={() => slot.status === 'Available' && handleBook(slot.id)}
          >
            <div className="slot-number">{slot.id + 1}</div>
            <div className="slot-status">{slot.status}</div>
            {slot.status === 'Available' && (
              <button className="book-button">Book</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridEmployee;
