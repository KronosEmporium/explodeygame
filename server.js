var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var game = require('./js/game');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
	game.init();
});

http.listen(process.env.PORT || 8081,function(){
	console.log('listening');
});