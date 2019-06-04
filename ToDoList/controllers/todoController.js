var data = [{ item: 'bread' }, { item: 'Mawie' }, { item: 'Hello there !' }, ];

var bodyParser = require("body-parser");
var ajax = require("../public/ajax");

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    app.get('/todo', (req, res) => {
        console.log("GET");
        res.status(200);
        res.setHeader('Content-type', 'text/html');
        res.render('todo', { list: data, title: 'Todo List' });
    });

    app.post('/todo', urlEncodedParser, (req, res) => {
        console.log("POST");
        data.push(req.body);
        const form = {url: req.path, data: req.body};
        const renderTodo = () => { res.render('todo', { list: data, title: 'Todo List' }) };
        ajax.makeAjaxRequest(form.url, 'POST', JSON.stringify(form.data),  renderTodo);
    });

    app.delete('/todo', function (req, res) {
        console.log("DELETE");
        
    });    
}

