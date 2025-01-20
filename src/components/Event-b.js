import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Main.css';

function Events() {
  // Initialize the state for active item
  const [activeItem, setItem] = useState('up');  // Default active item is 'up'

  // Handle the click event to update the active item
  const handleItemClick = (item) => {
    setItem(item);
  };

  return (
    <>
      <div className="events-containerr">
        <nav className="pill-navbar">
          <ul className="navbar-list">
            {/* Dynamically add the 'active' class based on the state */}
            <li
              className={`nav-item ${activeItem === 'up' ? 'active' : ''}`}
              onClick={() => handleItemClick('up')}
            >
              Ecard
            </li>
            <li
              className={`nav-item ${activeItem === 'mu' ? 'active' : ''}`}
              onClick={() => handleItemClick('mu')}
            >
              Ecard Brown
            </li>
            <li
              className={`nav-item ${activeItem === 'cat' ? 'active' : ''}`}
              onClick={() => handleItemClick('cat')}
            >
              Category
            </li>
          </ul>
        </nav>

        {/* Conditionally render content based on activeItem */}
        {activeItem === 'up' && (
          <div className="Ecard">
            <Link to="/Events">
              <h2 className="events-title">Upcoming <br /> Events</h2>
            </Link>
          </div>
        )}

        {activeItem === 'mu' && (
          <div className="Ecardbrown">
            <Link to="/Events">
              <button className="btnDark mar">Musics</button>
            </Link>
            <div className="blackmusic">
              <h5 className="events-title">Music Events Info</h5>
            </div>
          </div>
        )}

        {activeItem === 'cat' && (
          <div className="categoryBoxes flex-evenly flex-column">
            <div className="firstwhitebox flex-left flex-column">
              <h5 className="events-title df">Category</h5>
              <h3 className="events-title df">Event Name</h3>
              <h6 className="events-title df">Event Orginizer</h6>
            </div>
            <div className="secondwhitebox col flex-left flex-column">
              <h5 className="events-title df">Category</h5>
              <h3 className="events-title df">Event Name</h3>
              <h6 className="events-title df">Event Orginizer</h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Events;
