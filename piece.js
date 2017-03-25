
var pieceSpeed = 250;

//X, Y
var pieceArray = new Array(4, 2);

var pieceId;


function dropBlock(){
	var pieceWidth;
	
	buildPiece();	

	var xAdj = Math.floor(Math.random() * (blockWidth - peiceWidth + 1));

	for(var i=0; i<pieceArray.length; i++){
		pieceArray[i][0] += xAdj;
	}

	pieceID = setInterval(updateBlock, pieceSpeed);
}

function updateBlock(){

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

		clearInterval(pieceID);
		pieceArray = new Array(4, 2);
		dropBlock();

	}else{
		
		for(var i=0; i<pieceArray.length; i++){
			
			if(pieceArray[i][1]< 0){															//Above the screen.
				pieceArray[i][1]++;
				array[pieceArray[i][0]][pieceArray[i][1]] = 3;
			}

			else if(array[pieceArray[i][0]][pieceArray[i][1] + 1] == 1){								//Hits the player.
				array[pieceArray[i][0]][pieceArray[i][1]] = 2;
				clearInterval(pieceID);
				endGame();
			}

			else{																	//Regular
				array[pieceArray[i][0]][pieceArray[i][1]] = 0;
				pieceArray[i][1]++;
				array[pieceArray[i][0]][pieceArray[i][1]] = 3;
			}
		}

	}
}

function buildPiece(){
	var pieceType = Math.floor(Math.random() * 7)

	switch(pieceType){
		case 0:					//The "I" Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [2, -1];
			pieceArray[3] = [3, -1];

			peiceWidth = 4;
			break;
		case 1:					//The "O" Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [0, -2];
			pieceArray[3] = [1, -2];

			peiceWidth = 2;
			break;
		case 2:					//The "T" Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [2, -1];
			pieceArray[3] = [1, -2];

			peiceWidth = 3;
			break;
		case 3:					//The "S" Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [1, -2];
			pieceArray[3] = [2, -2];

			peiceWidth = 3;
			break;
		case 4:					//The "Z" Piece
			pieceArray[0] = [1, -1];
			pieceArray[1] = [2, -1];
			pieceArray[2] = [0, -2];
			pieceArray[3] = [1, -2];

			peiceWidth = 3;
			break;
		case 5:					//The "L" Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [2, -1];
			pieceArray[3] = [0, -2];

			peiceWidth = 3;
			break;
		case 6:					//The "J" Piece
			pieceArray[0] = [0, -1];
			pieceArray[1] = [1, -1];
			pieceArray[2] = [2, -1];
			pieceArray[3] = [2, -2];

			peiceWidth = 3;
			break;
	}
}
