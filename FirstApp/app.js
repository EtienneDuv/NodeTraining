const fs = require('fs');
const path = require('path');

if (fs.existsSync('Example')) {
    fs.readdirSync('Example').forEach(file => {
        fs.unlinkSync(path.join(__dirname, 'Example\\'+file), err => {
            console.log(file);
            if (err) throw err;
        });
        fs.rmdirSync('Example');
        console.log('Example folder deleted with its content')
    });
};

if (!fs.existsSync('Example')) {
    fs.mkdirSync('Example');
    console.log(`Example folder created`);
};

fs.readFile('readme.txt', 'utf8', function (err, data) {
    fs.writeFile('./Example/writeme.txt', data, function(err) {
        if (err) console.log(err);
        console.log(`Text written`);
    });
});


