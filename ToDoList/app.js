var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//DEFINE STATICS
app.use('/', express.static('./public'))

//FIRE CONTROLLERS
todoController(app);

//RUN
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
});