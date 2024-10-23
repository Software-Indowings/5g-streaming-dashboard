// src/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import VideoModal from './VideoModal'; // Import the modal component

const VideoFrame = ({ src, onClick }) => {
  return (
    <div className="video-frame" onClick={onClick}>
      <video width="100%" height="100%" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Dashboard = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSources = [
    'https://www.example.com/video1.mp4',
    'https://www.example.com/video2.mp4',
    'https://www.example.com/video3.mp4',
    'https://www.example.com/video4.mp4',
    'https://www.example.com/video5.mp4',
    'https://www.example.com/video6.mp4',
  ];

  const handleVideoClick = (src) => {
    setSelectedVideo(src); // Set the selected video
  };

  const closeModal = () => {
    setSelectedVideo(null); // Close the modal
  };

  return (
    <div className="dashboard">
      {videoSources.map((src, index) => (
        <VideoFrame key={index} src={src} onClick={() => handleVideoClick(src)} />
      ))}
      <VideoModal src={selectedVideo} onClose={closeModal} />
    </div>
  );
};

export default Dashboard;
