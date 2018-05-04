var Game = {
	init : function(){
    	var url = 'https://localhost:8080';
		var socket = io.connect(url);
		console.log("i did something");
    }
};

Game.init();