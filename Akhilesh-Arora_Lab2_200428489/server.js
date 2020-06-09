'use strict';
var http = require('http');
var url = require('url');
//Calculator which calculate using url method and values
var server = http.createServer(function (request, response) {
    var URLData = url.parse(request.url, true).query;
    response.writeHead(200, { "Content-Type": "text/plain" });

    function calculate(method, x, y) {

        console.log(method);
        console.log(x);
        console.log(y);
        var result = 0;
        switch (method) {
            case "add":
                result = parseInt(x) + parseInt(y);
                response.write(x + " + " + y + "  = " + result);
                response.end();
            case "subtract":
                result = parseInt(x) - parseInt(y);
                response.write(x + " + " + y + "  = " + result);
                response.end();
            case "multiply":
                result = parseInt(x) * parseInt(y);
                response.write(x + " + " + y + "  = " + result);
                response.end();
            case "divide":
                result = parseInt(x) / parseInt(y);
                response.write(x + " + " + y + "  = " + result);
                response.end();
            default:
                response.write("Wrong method name");
        }

    }
    calculate(URLData.method, URLData.x, URLData.y)
});

server.listen(3000);