var http = require('http');
var artistService = require('./lib/artists');
//not sure about connection
var connection = require(' ./lib/connection');
var responder = require('./lib/responseGenerator');
var staticFile = responder.staticFile('/public');
http.createServer(function(req, res) {
    // A parsed url to work with in case there are parameters
    var _url;
    // In case the client uses lower case for methods.
    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);
    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not implemented by this server.');
    }
    if (_url = /^\/artists$/i.exec(req.url)) {
        artistService.getArtists(function(error, data) {
            if (error) {
                return responder.send500(error, res);
            }
            return responder.sendJson(data, res);
        });
    } else if (_url = /^\/artists\/(\d+)$/i.exec(req.url)) {
        artistService.getArtist(_url[1], function(error, data) {
            if (error) {
                return responder.send500(error, res);
            }
            if (!data) {
                return responder.send404(res);
            }
            return responder.sendJson(data, res);
        });
    } else {
        // try to send the static file
        res.writeHead(200);
        res.end('static file maybe');
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
