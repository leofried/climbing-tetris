//The X and Y coordinates of the player.
var playerX = 0;
var playerY = blockHeight - 1;

//Move the player to the left.
function playerLeft() {
	if(playerX != 0){
		array[playerX][playerY] = 0;
		playerX -= 1;
		array[playerX][playerY] = 1;
	}
}

//Move the player to the right.
function playerRight() {
	if(playerX != blockWidth - 1){
		array[playerX][playerY] = 0;
		playerX += 1;
		array[playerX][playerY] = 1;
	}
}