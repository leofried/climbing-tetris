
var pieceSpeed = 100;

var pieceX;
var pieceY;

var pieceId;


function dropBlock(){
	pieceX = Math.floor(Math.random() * blockWidth);
	pieceY = -1;

	pieceID = setInterval(updateBlock, pieceSpeed);
}


function updateBlock(){

	if(pieceY == -1){
		pieceY = 0;

		array[pieceX][pieceY] = 3;
	}

	else if(pieceY == blockHeight - 1 || array[pieceX][pieceY + 1] == 2){
		array[pieceX][pieceY] = 2;
		clearInterval(pieceID);
		dropBlock();
	}

	else if(array[pieceX][pieceY + 1] == 1){
		array[pieceX][pieceY] = 2;
		clearInterval(pieceID);
		endGame();
	}

	else{
		array[pieceX][pieceY] = 0;
		pieceY++;
		array[pieceX][pieceY] = 3;
	}

}