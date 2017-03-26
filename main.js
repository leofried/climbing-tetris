//When the window loads, define the canvas and the context.
window.onload = function() {
	var button = document.getElementById("startButton");
	button.setAttribute("onClick", "startGame();");

	canvas = document.getElementById("gameCanvas");
	canvas.setAttribute("width", pixelWidth);
	canvas.setAttribute("height", pixelHeight);

	context = canvas.getContext("2d");
}

//Canvas and context. These represent the canvas that we are drawing on.
var canvas;
var context;

var frameID;

/*Variables to do with the size of the screen. The width and height of the canvas in blocks,
the width and height of the canvas in pixels, and the width and height of a block in pixels.*/
var blockWidth = 10;
var blockHeight = 20;

var pixelWidth = 300;
var pixelHeight = 500;

var pbWidth = pixelWidth / blockWidth;
var pbHeight = pixelHeight / blockHeight;


//An array that contains the canvas as represented in blocks, (0, 0) is the bottom left corner (1, 0) is still in the floor.
//0 is empty, 1 is player, 2 is ground, 3 is piece.
var array = new Array(blockWidth);


//Starts the game, sets the intervals, adds the listeners, etc.
function startGame() {
	endGame(false);

	for(var i=0; i<blockWidth; i++){
		array[i] = new Array(blockHeight);
		for(var j=0; j<blockHeight; j++){
			array[i][j] = 0;
		}
	}
	
	document.addEventListener("click", mouseClick, false);
	frameID = setInterval(updateFrame, 1);

	newPlayer();
	dropBlock();
}


//What happens when the mouse gets clicked. The mouse getting clicked is the main source of user input.
function mouseClick(event) {
	var rect = canvas.getBoundingClientRect();
	var adjX = (event.clientX - rect.left) / pixelWidth;
	var adjY = (event.clientY - rect.top) / pixelHeight;

	if (adjY > 1/2){
		if(adjX < 1/2){
			playerLeft();
		}else{
			playerRight();
		}
	}else{
		if(adjX < 1/2){
			blockLeft();
		}else{
			blockRight();
		}
	}

}

//Update the canvas frame.
function updateFrame() {

	for(var i=0; i<array.length; i++){
		for(var j=0; j<array[i].length; j++){
			var x = array[i][j];

			if(x == 0) {
				context.fillStyle = "white";
			}
			if(x == 1) {
				context.fillStyle = "blue";
			}
			if (x == 2 || x == 3) {
				context.fillStyle = "red";
			}

			context.fillRect(i * pbWidth, j * pbHeight, pbWidth, pbHeight);
		}
	}

	context.fillStyle = "grey";
	context.fillRect(0, pixelHeight / 2 - 1, pixelWidth, 2);
	context.fillRect(pixelWidth / 2 - 1, 0, 2, pixelHeight);

}


function endGame(playerLost){
	document.removeEventListener("click", mouseClick, false);
	clearInterval(frameID)
	endUpdate();
	if(playerLost) alert("Sorry, you lost.");
}