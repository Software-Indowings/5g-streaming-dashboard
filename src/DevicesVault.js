// src/DevicesVault.js
import React from 'react';

const DevicesVault = () => {
  // Dummy device data
  const devices = [
    { name: 'Device A', id: 'DA001', specification: 'Specification A' },
    { name: 'Device B', id: 'DB002', specification: 'Specification B' },
    { name: 'Device C', id: 'DC003', specification: 'Specification C' },
    { name: 'Device D', id: 'DD004', specification: 'Specification D' },
    { name: 'Device E', id: 'DE005', specification: 'Specification E' },
  ];

  // Inline styles with 3D animation
  const styles = {
    container: {
      padding: '60px',
      background: 'linear-gradient(135deg, #000 0%, #ff9800 100%)',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      maxWidth: '1200px',
      margin: '20px auto',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      transition: 'all 0.3s ease',
    },
    heading: {
      fontSize: '32px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#ff9800',
      textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)',
    },
    paragraph: {
      fontSize: '20px',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#ddd',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '30px',
      transition: 'transform 0.2s ease',
    },
    th: {
      backgroundColor: '#ff9800',
      color: 'black',
      padding: '20px',
      border: '1px solid #ddd',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    td: {
      padding: '20px',
      border: '1px solid #ddd',
      textAlign: 'left',
      color: '#fff',
    },
    deviceRow: {
      transition: 'transform 0.6s ease, box-shadow 0.6s ease', // Added smooth transition
      transformStyle: 'preserve-3d', // Enable 3D transformation
    },
    deviceRowHover: {
      backgroundColor: 'rgba(255, 152, 0, 0.3)',
      transform: 'scale(1.05) rotateX(10deg)', // Added 3D rotation and scale
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Added shadow for depth
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Devices Vault</h2>
      <p style={styles.paragraph}>Here you can manage your devices.</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Device Name</th>
            <th style={styles.th}>Device ID</th>
            <th style={styles.th}>Device Specification</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => (
            <tr
              key={index}
              style={styles.deviceRow}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.deviceRowHover.backgroundColor;
                e.currentTarget.style.transform = styles.deviceRowHover.transform;
                e.currentTarget.style.boxShadow = styles.deviceRowHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = ''; // Reset background color
                e.currentTarget.style.transform = ''; // Reset transform
                e.currentTarget.style.boxShadow = ''; // Reset shadow
              }}
            >
              <td style={styles.td}>{device.name}</td>
              <td style={styles.td}>{device.id}</td>
              <td style={styles.td}>{device.specification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DevicesVault;
