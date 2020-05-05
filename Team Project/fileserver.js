
// Creating your own Web server with nodejs.

var http = require('http');     // Alternate mechanisim: import * as http from 'http';
var fs = require('fs');         // import * as fs from 'fs';
var url = require('url');       // import * as url from 'url';
var path = require('path');     // import * as path from 'path';

var fileExtensions = {
     ".html":    "text/html",
     ".css":     "text/css",
     ".js":      "text/javascript",
     ".jpeg":    "image/jpeg",
     ".jpg":     "image/jpeg",
     ".png":     "image/png"
 };

var server = http.createServer(function(request, response) { 
    var pathname = url.parse(request.url).pathname;
    var filename;

    if(pathname === "/") {
        filename = "UserInterface.html"; 
        
 
    }
    else
        filename = path.join(process.cwd(), pathname);

    try {
        fs.accessSync(filename, fs.F_OK);
        var fileStream = fs.createReadStream(filename);
        var typeAttribute = fileExtensions[path.extname(filename)];


        response.writeHead(200, {'Content-Type': typeAttribute});
        fileStream.pipe(response);
    }
    catch(e) {
            console.log("\n\n");
            console.log('File does not exist: ' + filename);
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('404 - File Not Found (' + filename + ')');
            response.end();
            return;
    }
    return;
    
});

server.listen(5000);

console.log("\nThe Web server is alive!!!\n"  + 
    "It's listening on http://127.0.0.1:5000 or http://localhost:5000");
