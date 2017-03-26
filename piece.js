var pieceSize = 3;

var pieceSpeed = 250;

//X, Y
var pieceArray = new Array(pieceSize, 2);

var pieceId;

var moving = false;

function dropBlock(){
	var pieceWidth = buildPiece();	

	var xAdj = Math.floor(Math.random() * (blockWidth - pieceWidth + 1));

	for(var i=0; i<pieceArray.length; i++){
		pieceArray[i][0] += xAdj;
	}

	pieceId = setInterval(updateBlock, pieceSpeed);
}

function blockLeft(){
	moveBlock(0, -1);
}

function blockRight(){
	moveBlock(blockWidth-1, 1);
}

function moveBlock(start, adjust){
	while(moving){}
	moving = true;

	for(var i=0; i<pieceArray.length; i++){
		if(pieceArray[i][0] == start ||
			array[pieceArray[i][0] + adjust][pieceArray[i][1]] == 2 ||
			array[pieceArray[i][0] + adjust][pieceArray[i][1]] == 1){
			
			moving = false;
			return;
		}
	}

	for(var i=0; i<pieceArray.length; i++){
		if(array[pieceArray[i][0]][pieceArray[i][1]] != 4){
			array[pieceArray[i][0]][pieceArray[i][1]] = 0;
		}
		pieceArray[i][0] += adjust;
		array[pieceArray[i][0]][pieceArray[i][1]] = 4;
	}

	for(var i=0; i<pieceArray.length; i++){
		if(array[pieceArray[i][0]][pieceArray[i][1]] == 4){
			array[pieceArray[i][0]][pieceArray[i][1]] = 3;
		}
	}

	moving = false;

}

function updateBlock(){
	while(moving){}
	moving = true;

	var ground = false;

	for(var i=0; i<pieceArray.length; i++){
		if(pieceArray[i][1] == blockHeight - 1 || array[pieceArray[i][0]][pieceArray[i][1] + 1] == 2){		//Hit the ground.
			ground = true;
		}
	}

	if(ground){
		for(var i=0; i<pieceArray.length; i++){
			array[pieceArray[i][0]][pieceArray[i][1]] = 2;
		}

		endUpdate();
		pieceArray = new Array(4, 2);
		dropBlock();

	}else{
		
		for(var i=0; i<pieceArray.length; i++){
			if(array[pieceArray[i][0]][pieceArray[i][1] + 1] == 1){								//Hits the player.
				array[pieceArray[i][0]][pieceArray[i][1]] = 2;
				endGame(true);
			}

			else{																				//Regular
				if(array[pieceArray[i][0]][pieceArray[i][1]] != 4){
					array[pieceArray[i][0]][pieceArray[i][1]] = 0;
				}
				pieceArray[i][1]++;
				array[pieceArray[i][0]][pieceArray[i][1]] = 4;
			}
		}

		for(var i=0; i<pieceArray.length; i++){
			if(array[pieceArray[i][0]][pieceArray[i][1]] == 4){
				array[pieceArray[i][0]][pieceArray[i][1]] = 3;
			}
		}
	}

	moving = false;
}

function endUpdate(){
	clearInterval(pieceId);
}

function buildPiece(){
	var pieceType = Math.floor(Math.random() * 6);

	switch(pieceType){
		case 0:					//The Top Left Piece
			pieceArray[0] = [0, -2];
			pieceArray[1] = [0, -1];
			pieceArray[2] = [1, -1];

			return 2;
		case 1:					//The Top Right Piece
			pieceArray[0] = [1, -2];
			pieceArray[1] = [0, -1];
			pieceArray[2] = [1, -1];

			return 2;
		case 2:					//The Bottom Left Piece
			pieceArray[0] = [0, -2];
			pieceArray[1] = [1, -2];
			pieceArray[2] = [0, -1];

			return 2;
		case 3:					//The Bottom Right Piece
			pieceArray[0] = [0, -2];
			pieceArray[1] = [1, -2];
			pieceArray[2] = [1, -1];

			return 2;
		case 4:					//The Horizontal Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [2, -1];

			return 3;
		case 5:					//The Vertical Piece
			pieceArray[0] = [0, -3];
			pieceArray[1] = [0, -2];
			pieceArray[2] = [0, -1];

			return 1;
	}
}
