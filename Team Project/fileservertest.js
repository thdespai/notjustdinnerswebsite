
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
        // change the 'filename' to the homepage of your website (e.g. "index.html") 
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
      //   var mySQLpointer, connObj;
      //   var foodArray = [];

      //   mySQLpointer = require("mysql");

      //   connObj = mySQLpointer.createConnection( 
      //         { 
      //           host:     "sql.wpc-is.online", 
      //           user:     "sychang4",
      //           password: "sych6438",
      //           database: "db_test_TeamA05"
      //         } );

      //   connObj.connect( function(err) {
      //     if (err) 
      //       console.log("Connection Error: " + err.stack);
      //     else 
      //       console.log("Connected to Db! :-)  ID= " + connObj.threadId);
      //   });

      //   let sqlStmt;
      //   sqlStmt = "SELECT * FROM Food_List";

      //   connObj.query(sqlStmt, 
      //     function(err, dataSet, colSet) {
      //       if (err) 
      //         throw err;
            
      //       else {
      //         console.log(dataSet[0].Name, dataSet[0].Picture_Num);
      //         //for (i=0; i<dataSet.length; i++) {
      //           //console.log(dataSet[i].Name, dataSet[i].Picture_Num);
      //           // foodArray.append([dataSet[i].Name, dataSet[i].Picture_Num]);
      //         //}
      //         // foodArray.append([dataSet, colSet]);
      //       }
      // });

      // connObj.end();
    return;


    
});

server.listen(5000);

console.log("\nThe Web server is alive!!!\n"  + 
    "It's listening on http://127.0.0.1:5000 or http://localhost:5000");

