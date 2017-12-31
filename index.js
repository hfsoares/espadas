const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
const server = app.listen(port);

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('join', function(data) {
        console.log(data);
    });
    socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', { hora: new Date().toTimeString()} ) , 1000);

console.log(`Servidor Espadas listening on ${port}`);