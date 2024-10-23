import React from 'react';
import Dashboard from './Dashboard';

function App() {
  return (
    <div 
      className="App" 
      style={{ 
        textAlign: 'center', 
        padding: '20px', 
        backgroundColor: 'black',  // Set background color to black
        color: 'white',  // Set text color to white for better contrast
        minHeight: '100vh' // Ensure the background covers the full viewport height
      }}
    >
      <img 
        src="https://www.indowings.com/images/logo-mobile.svg" 
        alt="Indowings Logo" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          marginBottom: '20px' 
        }} 
      />
      <h1 style={{ 
        marginBottom: '20px', 
        fontSize: '2rem' 
      }}>
        Drone Cam Livestream
      </h1>
      <Dashboard />
    </div>
  );
}

export default App;
