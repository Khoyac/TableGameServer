const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: true
});
const card = require('classes/card');
const game = require('classes/game');

io.on("connection", (socket) => {
    const idHandShake = socket.id;
    const { nameRoom } = socket.handshake.query;

    console.log(`Socket ${idHandShake} has connected`);

    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });

    socket.on('move_card', (data) => {
        console.log('Me llega un Drop en ' + JSON.stringify(data));
        // Extraer los valores x e y del objeto data
        const x = data.x;
        const y = data.y;
        const id = data.id;
        // Emitir el evento de movimiento a todos los clientes conectados
        io.emit('card_moved', {id: id, x: x, y: y});
    });

});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
