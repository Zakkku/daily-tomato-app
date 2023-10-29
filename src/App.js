import React, { useState } from 'react';
import './App.css';

/* 
  1. Select day, turn it bold (default will be Monday)
  2. Create a state for each day's tomatoes
  3. Increment / decrement should work based on which day is selected
*/

const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

export default function App() {

  const [selectedDay, setSelectedDay] = useState("Mon");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  }

  return (
    <div className="App">
      <div className="window">
        <h2>🍅 Daily Tomato App 🍅</h2>
        {days.map((day) => (
          <div 
          key={day} 
          className={`tomato-box ${selectedDay === day ? 'selected' : ''}`}
          onClick={() => handleDayClick(day)}
          >
            <h3 >{day}</h3>
            <div className="tomato-day-box"></div>
          </div>
        ))}
        <div className="buttons-container">
          <div  className="button">-</div>
          <div className="button">+</div>
        </div>
      </div>
    </div>
  );
}
