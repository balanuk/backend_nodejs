var http = require('http');

http.createServer(function(request,response){
	console.log(request.url);
	response.writeHead(200);
	response.write('<h2>Hello, this is the Http server<h2>');
	response.end();
}).listen(8080, function(){ console.log("Listening on port 8080..."); });