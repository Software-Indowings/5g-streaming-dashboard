const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');
const { createCanvas } = require('canvas');
const jpeg = require('jpeg-js');

const app = express();
const server = http.createServer(app);

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Front-end URL
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Initialize data objects
let gpsData = { lat: 37.7749, lon: -122.4194, alt: 100 }; // Default GPS data
let weatherData = { description: 'Clear Sky' }; // Default weather data

// Socket.IO setup
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Front-end URL
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A client connected');

  // Start video stream
  socket.on('start-stream', () => {
    console.log('Starting video stream');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// MQTT setup to subscribe and stream live images
const MQTT_BROKER_URL = 'mqtt://3.110.177.25:1883'; // Replace with your MQTT broker URL
const TOPIC_GPS = 'drone/gps';
const TOPIC_WEATHER = 'drone/weather';
const TOPIC_IMAGE = 'test'; // Topic for live image data

const mqttClient = mqtt.connect(MQTT_BROKER_URL);

mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  
  // Subscribe to topics
  mqttClient.subscribe(TOPIC_GPS);
  mqttClient.subscribe(TOPIC_WEATHER);
  mqttClient.subscribe(TOPIC_IMAGE);
});

mqttClient.on('message', (topic, message) => {
  if (topic === TOPIC_GPS) {
    const data = JSON.parse(message.toString());
    gpsData = data;
    io.emit('gps-data', gpsData); // Emit GPS data to clients
  } else if (topic === TOPIC_WEATHER) {
    const data = JSON.parse(message.toString());
    weatherData = data;
    io.emit('weather-data', weatherData); // Emit weather data to clients
  } else if (topic === TOPIC_IMAGE) {
    try {
      const rawImage = jpeg.decode(message); // Decode the JPEG image

      if (rawImage) {
        const canvas = createCanvas(rawImage.width, rawImage.height);
        const ctx = canvas.getContext('2d');
        const imgData = ctx.createImageData(rawImage.width, rawImage.height);
        imgData.data.set(rawImage.data);
        ctx.putImageData(imgData, 0, 0);

        // Convert canvas to image data URL
        const dataURL = canvas.toDataURL('image/jpeg');

        // Broadcast the image data to all connected clients via Socket.IO
        io.emit('live-image', { image: dataURL });
      }
    } catch (err) {
      console.error('Error decoding image:', err);
    }
  }
});

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
