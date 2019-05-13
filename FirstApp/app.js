var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');
app.use('/css', express.static(__dirname + '/public'));

/* ##### ROUTING ##### */
//Index page
app.get('/', function (req, res) {
    console.log("Index page");
    res.render('index');
});
//Contact page with form POST
app.get('/contact', urlEncodedParser, function (req, res) {
    res.render('contact');
});
app.post('/contact', urlEncodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact_success', {data: req.body});
});
//Profile page
app.get('/profile/:id', function(req, res) {
    var data = {status: 'member', activities: ['cooking', 'skiing', 'camping']}
    res.render('profile', {id: req.params.id, data: data});    
});

app.listen(3000);
