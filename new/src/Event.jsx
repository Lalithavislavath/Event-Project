import { useState } from "react";

function Event() {
    const [events, setEvents] = useState([
        {
          id: 1,
          name: "React Workshop",
          date: "2024-12-15",
          location: "New York",
          category: "Workshop",
          description: "react course",
          remainingSpots: 5,
        },
        {
          id: 2,
          name: "Tech Conference",
          date: "2024-12-20",
          location: "San Francisco",
          category: "Conference",
          description: "learn technology",
          remainingSpots: 3,
        },
      ]);
  return (
    <div>
      <h1>Event Management System</h1>


      <div className="filter-container">
        <select
          className="filter-input"
          onChange={(e) => setFilters({ ...filters, category: e.target.value })} >
         <option value="">All Categories</option>
        <option value="Workshop">Workshop</option>
        <option value="Conference">Conference</option>
        </select>


</div>
    </div>
  )
}

export default Event