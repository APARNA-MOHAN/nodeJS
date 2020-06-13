const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));//this is the development version so it print outs additional information to the screen as required

app.use(express.static(__dirname + '/public'));//static tells the server to serve upfrom the static files,__dirname says the root of the project and we'll find it in the public folder

app.use((req,res,next)=>{
    
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
});