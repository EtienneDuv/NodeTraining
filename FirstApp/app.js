const fs = require('fs');

fs.readFile('README.txt', 'utf8', function(err, data) {
    fs.writeFileSync('WRITEME.txt', data)
});

console.log('This happened !');
