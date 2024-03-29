const http = require('http'); //server
var config = require('./config/config'); //config
var fs = require('fs'); //file or folder 

var express = require('express');
var app = express();
var routes = require('./routes/routes');
/* create a server 
const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hey !!');
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);
*/
 

/* read and write stream
var myReadStream = 
    fs.createReadStream(`${__dirname}/readme.txt`, `utf8`);
var myWriteStream = 
    fs.createWriteStream(`${__dirname}/writeme.txt`);

myReadStream.on('data', function(chunk){
    console.log(`new chunk received`);
    console.log(chunk);
    myWriteStream.write(chunk);
}) 
*/


/* pipe
myReadStream.pipe(myWriteStream);
 */


 /* server and pipe 
const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/html'})
    var myReadStream = 
        fs.createReadStream(`${__dirname}/index.html`, `utf8`);
    myReadStream.pipe(res);
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);
*/ 


/*server json 
const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'application/json'})
    var object = {
        name:'alvin',
        job:'programmer',
        age:21
    };

    res.end(JSON.stringify(object));
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);
*/


/*basic rounting
const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/html'})
    if(req.url==='/home'||req.url==='/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    var myReadStream = 
        fs.createReadStream(`${__dirname}/index.html`, `utf8`);
    myReadStream.pipe(res);
    }else{
        res.end("test");
    }
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);
*/

app.set('view engine', 'ejs');

app.use('/', routes);

app.use('/public', express.static('public'));

app.listen(config.port);
