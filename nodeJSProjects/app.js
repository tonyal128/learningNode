var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
});

app.post('/person', urlencodedParser, function (req, res) {
    res.send('Thanks!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port);