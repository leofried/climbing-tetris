window.onload = function() {
	var button = document.getElementById("startButton");
	button.setAttribute("onClick", "startGame();");

	canvas = document.getElementById("gameCanvas");
	canvas.setAttribute("width", pixelWidth);
	canvas.setAttribute("height", pixelHeight);

	context = canvas.getContext("2d");
}


var canvas;
var context;

var blockWidth = 10;
var blockHeight = 20;

var pixelWidth = 300;
var pixelHeight = 500;

var pbWidth = pixelWidth / blockWidth;
var pbHeight = pixelHeight / blockHeight;

var playerX = 0;


function startGame() {
	setInterval(updateFrame, 1);
	document.addEventListener("click", mouseClick, false);
}


function mouseClick(event) {
	var rect = canvas.getBoundingClientRect();
	var clickX = event.clientX - rect.left;

	if (clickX < pixelWidth / 3) {
		context.clearRect(playerX * pbWidth, pixelHeight - pbHeight, pbWidth, pbHeight);
		playerX = Math.max(playerX - 1, 0);

	} else if (clickX > 2 * pixelWidth / 3) {
		console.log("Asdfasd");
		context.clearRect(playerX * pbWidth, pixelHeight - pbHeight, pbWidth, pbHeight);
		playerX = Math.min(playerX + 1, blockWidth - 1);
	}

}


function updateFrame() {
	context.fillStyle = "#20d";
	context.fillRect(playerX * pbWidth, pixelHeight - pbHeight, pbWidth, pbHeight);
}