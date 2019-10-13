
var numberOfSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButton();
	setUpSquares();
	}

function setUpModeButton(){
	//Use the same ID for 2 button Easy- Hard Mode
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Hard" ? numberOfSquare = 6: numberOfSquare = 3;
			reset();
			//figure out how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes
			});
		}
	}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		// squares[i].style.backgroundColor = colors[i]; ->already had reset function
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				rightColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
	}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquare);
	//pick new
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change color
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelbue";
	}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquare);
	//pick new
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		}
	h1.style.background = "steelbue";
	});

	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				rightColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

function rightColor(color){
	//loop though all squares
	for (var i=0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
		}
	}

function pickColor(){
	var random = Math.floor(Math.random() *colors.length);
	return colors[random];
	}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num time
	for (var i=0; i<num; i++){
		//get random color
		arr.push(randomColor())
	}
	//return that array
	return arr;
	}

function randomColor(){
	//pick from 0 -255
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" +red+", "+green+", "+blue+")";
	}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquare = 3;
// 	colors = generateRandomColors(3);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquare = 6;
// 	colors = generateRandomColors(numberOfSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for (var i = 0; i < squares.length; i++){
		
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });



//Guessing number game
function guessGame(){
	//creat secret number
	var secretNumber = Math.floor(Math.random()*10);

	//ask user for guess
	var guess = Number(prompt("Guess a number from 1 to 9"));

	//compare
	if(guess === secretNumber) {
		alert("You got it right!");
	}else if (guess > secretNumber){
		alert("Too high");
	}else {
		alert("Too low");
		}
	}

document.querySelector("#guess").addEventListener("click",guessGame);