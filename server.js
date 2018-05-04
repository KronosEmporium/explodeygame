var app = require('express')();
var http = require('http');
var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
});

http.listen(port,function(){
	console.log('listening');
});