//The X and Y coordinates of the player.
var playerX;
var playerY;

function newPlayer(){
	playerX = Math.floor(blockWidth / 2);
	playerY = blockHeight - 1;

	array[playerX][playerY] = 1;
}


//Move the player to the left.
function playerLeft() {
	adjustPlayer(0, -1);
}


//Move the player to the right.
function playerRight() {
	adjustPlayer(blockWidth - 1, 1);
}


function adjustPlayer(start, adjust){
	if(playerX != start){
		array[playerX][playerY] = 0;

		var x = array[playerX + adjust][playerY];
		if(x == 0) {
			playerX += adjust;

			while(playerY != blockHeight - 1 && array[playerX][playerY + 1] == 0){
				playerY++;
			}

		} else if(x == 2){
			if(array[playerX + adjust][playerY - 1] == 0){
				playerX += adjust;
				playerY --;
			}
		}

		array[playerX][playerY] = 1;
	}
}
