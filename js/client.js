// var Client = {};
// Client.socket = io.connect();
// 
// Client.sendTest = function(){
//     console.log("test sent");
//     Client.socket.emit('test');
// };
// 
// Client.askNewPlayer = function(){
//     Client.socket.emit('newplayer');
// };
// 
// Client.socket.on('newplayer',function(data){
//     playerId = data.id;
//     playerX = data.x;
//     playerY = data.y;
// });
// 
// Client.socket.on('allplayers',function(data){
//     for(var i = 0; i < data.length; i++){
//         Game.addNewPlayer(data[i].id,data[i].x,data[i].y);
//     }
// 
//     Client.socket.on('move',function(data){
//         Game.movePlayer(data.id,data.x,data.y);
//     });
// 
//     Client.socket.on('remove',function(id){
//         Game.removePlayer(id);
//     });
// });
// 
// 