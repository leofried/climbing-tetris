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








function mouseClick(event) {
	var rect = canvas.getBoundingClientRect();
	var clickX = event.clientX - rect.left;

	if (clickX < pixelWidth / 3) {
		playerLeft();
	} else if (clickX > 2 * pixelWidth / 3) {
		playerRight();
	}
}

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
