var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/Tester') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/JSON' });

        var obj = {
            firstname: 'Anthony',
            lastname: 'Larson'
        };

        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');