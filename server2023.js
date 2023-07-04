const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set up static file serving
app.use(express.static('public'));

// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected.');

  // Send initial location data to the client
  socket.emit('location', { lat: -34.397, lng: 150.644 });

  // Simulate location updates every 3 seconds
  setInterval(() => {
    const lat = -34.397 + Math.random() * 0.1;
    const lng = 150.644 + Math.random() * 0.1;
    socket.emit('location', { lat, lng });
  }, 3000);

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});
