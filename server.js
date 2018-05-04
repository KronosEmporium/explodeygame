var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
});

http.listen(process.env.PORT || 8080,function(){
	console.log('listening');
});