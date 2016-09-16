//document.body.style.background = "green";

var http = require('http');
var heapdump = require('heapdump');

var server = http.createServer(function(req,res){
	if(req.url === '/') {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write('Hello, this is the <h2>Http server<h2>');
		res.end();
	} else if(req.url === '/test'){
		if(req.method === 'POST') {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write('Posted test message');
			res.end();
		}
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end('Got: <h2>Http server<h2>');
	}

});

server.listen(8080);