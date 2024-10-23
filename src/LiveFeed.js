import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const LiveFeed = () => {
  const [gpsData, setGpsData] = useState({ lat: null, lon: null, alt: null });
  const [liveImage, setLiveImage] = useState(null);
  
  useEffect(() => {
    const socket = io('http://localhost:5000'); // Connect to the backend

    socket.on('gps-data', (data) => {
      setGpsData(data);
    });

    socket.on('live-image', (data) => {
      setLiveImage(data.image);
    });

    // Start the livestream
    socket.emit('start-stream');

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Live Feed</h1>
      <p style={styles.text}>This is the Live Feed page. Display live drone data and video feed here.</p>
      <div style={styles.dataContainer}>
        <h2>GPS Data</h2>
        {gpsData.lat && gpsData.lon ? (
          <p>Latitude: {gpsData.lat}, Longitude: {gpsData.lon}, Altitude: {gpsData.alt}m</p>
        ) : (
          <p>Loading GPS data...</p>
        )}
      </div>
      {liveImage && (
        <div style={styles.frameContainer}>
          <h2>Live Video Feed</h2>
          <div style={styles.frame}>
            <img src={liveImage} alt="Live Feed" style={styles.image} />
          </div>
        </div>
      )}
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
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#4caf50',
  },
  text: {
    fontSize: '1.2rem',
  },
  dataContainer: {
    margin: '20px 0',
  },
  frameContainer: {
    marginTop: '20px',
  },
  frame: {
    display: 'inline-block',
    padding: '10px',
    border: '5px solid #4caf50',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
    backgroundColor: '#333',
    animation: 'pulse 2s infinite, borderGlow 5s infinite',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  '@keyframes pulse': {
    '0%': { boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)' },
    '50%': { boxShadow: '0 0 30px rgba(0, 255, 0, 1)' },
    '100%': { boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)' },
  },
  '@keyframes borderGlow': {
    '0%': { borderColor: '#4caf50' },
    '50%': { borderColor: '#00ff00' },
    '100%': { borderColor: '#4caf50' },
  },
};

export default LiveFeed;
