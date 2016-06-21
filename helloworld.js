var http = require('http');
var http = require('http');
var server = http.createServer(function(request, response){

	response.writeHead(200, {
		'Content-type': 'text/plain'
	});

	response.write('Hello World! ');

	response.end();
});

server.listen(8000);

console.log('Server running on port 8000');

//read eval print loop

