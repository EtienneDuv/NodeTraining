var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/README.txt', 'utf8');
var myWriteStream = fs.WriteStream(__dirname + '/WRITEME.txt', 'utf8');

myReadStream.on('data', function (chunk) {
    console.log(chunk);
    myWriteStream.write(chunk);
});
