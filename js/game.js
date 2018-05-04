var Game = {
	init : function(){
		var ctx = document.getElementById('screen').getContext('2d');
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.fillRect(100,100,100,100);
		ctx.closePath();
    }
};

Game.init();