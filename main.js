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

for(var i=0; i<blockWidth; i++){
	array[i] = new Array(blockHeight);
	for(var j=0; j<blockHeight; j++){
		array[i][j] = 0;
	}
}
array[0][blockHeight - 1] = 1;




//Starts the game, sets the intervals, adds the listeners, etc.
function startGame() {
	setInterval(updateFrame, 1);
	document.addEventListener("click", mouseClick, false);
}


//What happens when the mouse gets clicked. The mouse getting clicked is the main source of user input.
function mouseClick(event) {
	var rect = canvas.getBoundingClientRect();
	var clickX = event.clientX - rect.left;

	if (clickX < pixelWidth / 3) {
		playerLeft();
	} else if (clickX > 2 * pixelWidth / 3) {
		playerRight();
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
			if (x == 2 | x == 3) {
				context.fillStyle = "red";
			}

			context.fillRect(i * pbWidth, j * pbHeight, pbWidth, pbHeight);
		}
	}

}