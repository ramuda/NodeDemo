var http = require("http");

http.createServer(function(req,res){
res.writeHead(200, {'Content-Type':'text/plain'});
res.end("Hello World");
}).listen(3200);

console.log("On port 3200");