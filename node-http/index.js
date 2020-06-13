const http = require('http');
const fs=require('fs');//allows to read n write file from local file systems

const path=require('path');//to specify the path in localfile sys


const hostname = 'localhost';
const port = 3000;

// req is any incoming http request from any browser to the server
const server = http.createServer((req,res)=>{
    //from the request it gives access to the headers (here)
    console.log("Request for "+ req.url + " by method "+req.method );

    if(req.method == 'GET'){
        var fileUrl;
        if (req.url == '/') fileUrl='/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);//find path of the file
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            //exists method check whether file exists
            fs.exists(filePath, (exists) => {
              if (!exists) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body><h1>Error 404: ' + fileUrl + 
                            ' not found</h1></body></html>');
                return;
              }
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/html');
              //to read in the file and then send the file out
              //from the file system module, we will use the createReadStream, which will take the filePath as a parameter. So this createReadStream method will read in the file from this filePath. And then convert that into stream of bytes, and then they will pipe this through to the response. So that will be included into the response, in the body of the response. So that way we have just taken the file and then constructed it into the response here. And that's it, the file is ready to be sent out, 
              fs.createReadStream(filePath).pipe(res);
            });
          }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                    ' not a HTML file</h1></body></html>');
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method +' not supported</h1></body></html>');
    }
      
        

    

})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
});