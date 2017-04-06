'use strict';

let path = require('path');
let http = require('http');
let fs = require('fs');
let url=require('url');
let mine=require('./mine').types;

let port = 9020;

function mockServer(){
  var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join(__dirname, pathname);
    console.log(realPath);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
  });
  server.listen(port);
  console.log("Server runing at port: " + port + ".");
}

mockServer();