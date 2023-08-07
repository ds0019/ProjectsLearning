// Create web server

var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    
    if(resource == '/comments') {
        if(request.method == 'GET') {
            fs.readFile('./html/comments.html', 'utf-8', function (error, data) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            });
        }
        else if(request.method == 'POST') {
            request.on('data', function (data) {
                var parsedStr = qs.parse(data.toString());
                var comment = parsedStr.comment;
                console.log(comment);
                fs.appendFile('comment.txt', comment + "\n", 'utf-8', function (error) {
                    response.writeHead(302, {'Location': '/comments'});
                    response.end();
                });
            });
        }
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Page Not Found');
    }
});

server.listen(8080, function () {
    console.log('Server is running...');
})