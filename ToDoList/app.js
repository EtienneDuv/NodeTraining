var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//DEFINE STATICS
app.use(express.static('./public'))

//FIRE CONTROLLERS
todoController(app);

//RUN
app.listen(3000);
console.log('Listening port 3000');