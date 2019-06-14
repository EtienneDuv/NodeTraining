const express = require('express');
const controller = require('./controllers/controller');
const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//DEFINE STATICS
app.use('/', express.static('./public'))

//FIRE CONTROLLERS
controller(app);

//RUN
const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
});