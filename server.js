// Node.js imports
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const http = require('http');

// Server specific imports
const cards = require('./utils/cards');
const makeId = require('./utils/makeid');

// Server specific variables
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000;

let rooms = [];

// Set static folder
app.use(
  express.static(path.join(__dirname, './client'))
);

// Connection listener
io.on('connection', client => {
  // "Host game" button listener
  client.on('host-click', msg => {
    const id = makeId(5);
    rooms.push({ id: id, players: [client.id]});
    client.emit('id-generate', id);
  });

  // "Submit" button listener for "join game" input
  client.on('idsubmit-click', idInput => {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].id === idInput) {
        rooms[i].players.push(client.id);
      }
    }
    console.log(rooms);
  });
});

// Disconnect listener
io.on('disconnect', client => {
  console.log('User has disconnected.');
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}.`);
});
