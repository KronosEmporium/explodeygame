var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port);
var io = require('socket.io').listen(server);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

var game = require(__dirname + '/js/game.js');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
	console.log(game);
});

server.listen(port,function(){
	console.log('listening');
});