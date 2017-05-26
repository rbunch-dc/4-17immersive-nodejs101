
// require is a built-in nodejs method, that includes a module
// that module can be:
// 1. Part of core, in which case we do nothing. (HTTP is an an example)
// 2. From the npm store, written by someone else. require will look inside of node_modules
// 3. A module WE wrote, which requires a path.
var http = require("http");
// console.log(http);
var server = http.createServer(function(request, response){
	// console.log(request);
	response.writeHead(500,{
		'content-type': 'text/html'
	});
	response.write("<h1>Hello, visitor. This is YOUR node server.</h1>");
	response.end();
});

// server is created above. It came from http object, the createServer meethod.
// It includse a request a a response in teh callback... but ALSO has a listen method.

server.listen(8000);
console.log("NodeJS is listening for connections on port 8000...")