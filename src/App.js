// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import DevicesVault from './DevicesVault';
import UsersAndTeams from './UsersAndTeams';
import Resources from './Resources';
import LiveFeed from './LiveFeed'; // Import the LiveFeed component

function App() {
  const [position, setPosition] = useState({ top: '20px', left: '20px' });

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{
          position: 'relative',
          textAlign: 'center',
          padding: '20px',
          color: 'white',
          minHeight: '100vh',
          marginLeft: '220px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            fontSize: '1.5rem',
            color: '#4caf50',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
          }}
        >
          Drone Online 6
        </div>

        <img
          src="https://www.indowings.com/images/logo-mobile.svg"
          alt="Indowings Logo"
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginBottom: '20px',
          }}
        />

        <h1
          style={{
            marginBottom: '20px',
            fontSize: '2rem',
          }}
        >
          Drone Cam Livestream
        </h1>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices-vault" element={<DevicesVault />} />
          <Route path="/users-and-teams" element={<UsersAndTeams />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/live-feed" element={<LiveFeed />} /> {/* New Route for Live Feed */}
          <Route path="/" element={<Dashboard />} /> Default route
        </Routes>

        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
