import React from 'react';
import './VideoModal.css'; // Ensure this CSS file is in place

const VideoModal = ({ src, onClose }) => {
  if (!src) return null; // If no src is provided, return null
// 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content medium-size" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <video controls autoPlay>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};


export default VideoModal;
