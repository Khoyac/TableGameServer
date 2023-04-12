const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on("connection", (socket) => {
    const idHandShake = socket.id;
    const { nameRoom } = socket.handshake.query;

    console.log(`Socket ${idHandShake} has connected`);

    // Enviamos una respuesta al evento "mensaje"
    socket.emit('mensaje_respuesta', '¡Hola, cliente! Recibí tu mensaje.');
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
