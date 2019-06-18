const express = require('express');
const controller = require('./controllers/controller.js');
const app = express();
const http = require('http').createServer(app); 
const io = require('socket.io')(http);

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//DEFINE STATICS
app.use('/', express.static('./public'))

//FIRE CONTROLLERS
controller(app, io);

//RUN
const server = http.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
});