var net = require('net');

var server = net.createServer(function(client){
	console.log('client connected');
	client.on('data', function(data){
		console.log('data received: ' + data.toString());
	});
	client.on('end', function(){
		console.log('client disconnected')
	});
});

server.listen(3000, function(){
	console.log('server started');
});