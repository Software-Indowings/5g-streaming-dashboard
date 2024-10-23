// src/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle navigation on hover
  const handleMouseEnter = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="sidebar">
      <h2>live ops</h2>
      <ul>
        <li onMouseEnter={() => handleMouseEnter('/live-feed')}>
          <i className="fas fa-broadcast-tower sidebar-icon"></i>
          <span className="sidebar-button">Live Feed</span>
        </li>
        <li onMouseEnter={() => handleMouseEnter('/dashboard')}>
          <i className="fas fa-tachometer-alt sidebar-icon"></i>
          <span className="sidebar-button">Dashboard</span>
        </li>
        <li onMouseEnter={() => handleMouseEnter('/devices-vault')}>
          <i className="fas fa-archive sidebar-icon"></i>
          <span className="sidebar-button">Devices Vault</span>
        </li>
        <li onMouseEnter={() => handleMouseEnter('/users-and-teams')}>
          <i className="fas fa-users sidebar-icon"></i>
          <span className="sidebar-button">Users and Teams</span>
        </li>
        <li onMouseEnter={() => handleMouseEnter('/resources')}>
          <i className="fas fa-book sidebar-icon"></i>
          <span className="sidebar-button">Resources</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
