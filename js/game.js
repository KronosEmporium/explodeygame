module.exports = {
	init : function(){
    	Game.canvas = document.createElement('canvas');
    	Game.canvas.height = 600;
    	Game.canvas.width = 600;
    	document.body.appendChild(Game.canvas);
    }
};

// Game.create = function(){
// 
//     Client.askNewPlayer();
// };
// 
// Game.addNewPlayer = function(id,x,y){
//     Game.playerMap[id] = game.add.sprite(x,y,'sprite');
// };
// 
// Game.movePlayer = function(id,x,y){
//     var player = Game.playerMap[id];
//     var distance = Phaser.Math.distance(player.x,player.y,x,y);
//     var tween = game.add.tween(player);
//     var duration = distance*10;
//     tween.to({x:x,y:y}, duration);
//     tween.start();
// };
// 
// Game.removePlayer = function(id){
//     Game.playerMap[id].destroy();
//     delete Game.playerMap[id];
// };