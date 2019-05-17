var data = [{item: 'bread'}, {item: 'Mawie'}, {item: 'Hello there !'}, ];

var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var ajax = require("../public/ajax.js");

module.exports = function(app){

    app.get('/todo', (req, res) => {
        res.status(200);
        res.setHeader('Content-type', 'text/html');
        res.render('todo', {list: data});
    });

    app.post('/todo', urlEncodedParser, (req, res) => {
        data.push(req.body);
        res.json(data); 
        console.log(ajax.xhr);
        // ajax.xhr.open('POST', 'http://localhost:3000/todo');
        // xhr.send();
        // res.render('todo', { list: data });
        
    });

    app.delete('/todo', function(req, res){

    });
};
