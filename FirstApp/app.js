var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/Example/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/Example/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [
            {name: 'Etienne', age: 22},
            {name: 'Mary', age: 20},
        ];
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/Example/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');