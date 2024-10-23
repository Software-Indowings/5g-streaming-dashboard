// src/UsersAndTeams.js
import React, { useState } from 'react';
import './UsersAndTeams.css';

const UserDetailPopup = ({ user, onClose }) => {
  return (
    <div style={styles.popupOverlay} onClick={onClose}>
      <div style={styles.popupCard} onClick={(e) => e.stopPropagation()}>
        <h2>{user.name}</h2>
        <p>ID: {user.id}</p>
        <p>Team: {user.team}</p>
        <p>Password: {user.password}</p>
        <button style={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const UsersAndTeams = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'User 1', team: 'Alpha', password: 'pass123' },
    { id: 2, name: 'User 2', team: 'Bravo', password: 'pass234' },
    { id: 3, name: 'User 3', team: 'Charlie', password: 'pass345' },
    { id: 4, name: 'User 4', team: 'Delta', password: 'pass456' },
  ];

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container">
      <h1 className="heading">Users and Teams</h1>
      <div className="content">
        {users.map((user) => (
          <div className="card" key={user.id} onClick={() => handleCardClick(user)}>
            <h2 className="cardTitle">{user.name}</h2>
            <p className="cardDescription">Team: {user.team}</p>
          </div>
        ))}
      </div>
      {selectedUser && <UserDetailPopup user={selectedUser} onClose={handleClosePopup} />}
    </div>
  );
};

const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeIn 0.3s ease-in-out',
  },
  popupCard: {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    animation: 'popupFadeIn 0.3s ease-in-out',
    maxWidth: '300px',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4caf50',
    color: 'black',
    cursor: 'pointer',
  },
};

export default UsersAndTeams;
