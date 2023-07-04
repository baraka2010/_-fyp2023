const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set up static file serving
app.use(express.static("public"));

// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected.");

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});
