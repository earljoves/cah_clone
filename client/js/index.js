const socket = io();

const hostBtn = document.getElementById('hostBtn');
const joinBtn = document.getElementById('joinBtn');
const joinInput = document.getElementById('joinInput');
const idInput = document.getElementById('idInput');
const idSubmit = document.getElementById('idSubmit');
const hostDisplay = document.getElementById('hostDisplay');
const roomDisplay = document.getElementById('roomDisplay');
const usersInRoom = document.getElementById('usersInRoom');
const startGameBtn = document.getElementById('startGameBtn');
const nameDiv = document.getElementById('nameDiv');

hostBtn.addEventListener('click', e => {
  socket.emit('host-click');
  hostDisplay.style.display = 'block';
  nameDiv.style.display = 'none';
  socket.on('id-generate', id => {
    roomDisplay.innerHTML += id;
  });
});

joinBtn.addEventListener('click', e => {
  joinInput.style.display = 'block';
  nameDiv.style.display = 'none';
});

idSubmit.addEventListener('click', e => {
  const id = idInput.value;
  socket.emit('idsubmit-click', id);
});
