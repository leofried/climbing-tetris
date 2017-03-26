function dropFloor(){
	var dead = false;

	for(var i=0; i<array.length; i++){
		if(array[i][array[i].length-1] == 1) dead = true;
		array[i][array[i].length-1] = 0;
	}

	for(var i=0; i<array.length; i++){
		for(var j=array[i].length - 2; j>=0; j--){
			array[i][j+1] = array[i][j];
		}
	}

	playerY++;

	updateFrame();

	if(dead) endGame(true);
	return dead;

}