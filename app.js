const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(8000);
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', function(socket) {
    socket.emit('connection', { msg: 'Connected to Server' });
    socket.on('posting_form', function(data) {
        io.emit('number',  {number: Math.floor(Math.random() * 1000) + 1,
                            name:  data.name} );
    });
});