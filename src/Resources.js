// src/Resources.js
import React from 'react';

const Resources = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Drone Specifications</h1>

      {/* Drone Specifications */}
      <div style={styles.specsContainer}>
        <h2 style={styles.subHeader}>Specifications</h2>
        <ul style={styles.specsList}>
          <li>Model: ACH135P3H</li>
          <li>Maximum Speed: 150 km/h</li>
          <li>Range: 600 km</li>
          <li>Endurance: 4 hours</li>
          <li>Service Ceiling: 20,000 ft</li>
          <li>Weight: 700 kg</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#1c1c1c',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    animation: 'fadeIn 2s ease-in-out',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    textTransform: 'uppercase',
    color: '#4caf50',
    letterSpacing: '2px',
  },
  specsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
    animation: 'slideUp 1.5s ease-in-out',
  },
  subHeader: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#ff6f61',
  },
  specsList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    lineHeight: '2rem',
    color: '#fff',
  },
};

// Keyframe Animations
const styleSheet = document.styleSheets[0];

const fadeIn = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`;

const slideUp = `
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`;

styleSheet.insertRule(fadeIn, styleSheet.cssRules.length);
styleSheet.insertRule(slideUp, styleSheet.cssRules.length);

export default Resources;
