var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	
	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],



	fire: function(guess) { //медод fire получил координаты 02 из обьекта controller метода processGuess и теперь его обрабатыват
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			console.log("ship: " + ship);
			console.log("guess: " + guess);
			var index = ship.locations.indexOf(guess);
			console.log("index: " + index); // -1 если координат 02 нет в массиве locations если есть то индекс массива( 0 или 1 или 2).


			// here's an improvement! Check to see if the ship
			// has already been hit, message the user, and return true.
			if (ship.hits[index] === "hit") { // например корабль 0 и индекс равен 1 мы проверяем еть ли там же значение hit если есть выводим сообщение ниже
				view.displayMessage("Oops, you already hit that location!");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess); // Передаем туда 02 и там присваивается setAttribute("class", "hit");
				view.displayMessage("HIT!"); //в messageArea появляется текст HIT!

				if (this.isSunk(ship)) { //передаем в обьект model методу isSunk корабль I,... если this.isSunk(ship) равно тру 
					//пишем сообщение и прибовляем один потопленый корабль если нет ничего не происходит
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess); //
		view.displayMessage("You missed.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") { // не равно
				return false;
			}
		}
	    return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
		console.log("Ships array: ");
		console.log(this.ships);
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
	
}; 


var view = {
	displayMessage: function(msg) {
		document.getElementById("messageArea").innerHTML = msg;
	},

	displayHit: function(location) { // передаем сюда 02 из model.fire()
		
		document.getElementById(location).setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		
		document.getElementById(location).setAttribute("class", "miss");
	}

}; 

var controller = {
	guesses: 0,

	processGuess: function(guess) { // guess = А2 например
		var location = parseGuess(guess); //передаем в location функцию изменения А на 0
		console.log("location111: " + location); //получаем 02

		if (location) {
			this.guesses++; 
			var hit = model.fire(location); // передаем в обьект model методу fire координаты 02
			console.log("hit: " + hit); // возврааем тру или фелс

			if (hit && model.shipsSunk === model.numShips) { //если hit тру и 3 равно 3 тру вызываем сообщение.
					view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
			}
		}
	}
}


// helper function to parse a guess from the user

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var firstChar = guess.charAt(0); //Извлекаем первый символ строки
		console.log("firstChar: " + firstChar);
		var row = alphabet.indexOf(firstChar); // При помощи метода indexOf получаем цифру в диапазоне от 0 до 6, соответствующую букве.
		console.log("row: " + row);
		var column = guess.charAt(1);
		console.log("column: " + column);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			console.log("guess1: " + row + column);
			return row + column;
		}
	}
	return null;
}


// event handlers

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	
	console.log("guessInput: " + guessInput);
	var guess = guessInput.value.toUpperCase();
	console.log("guess: " + guess); //Наример А2

	controller.processGuess(guess); //Передаем  А2 в  обьект контролер методу processGuess
 
	guessInput.value = "";
}

function handleKeyPress(e) {
	if (e.keyCode === 13) { //строгое равенство
		document.getElementById("fireButton").click();
		return false;
	}
}


// init - called when the page has completed loading

window.onload = init;

function init() {
	// Fire! button onclick handler
	
	document.getElementById("fireButton").onclick = handleFireButton;

	// handle "return" key press
	//window.addEventListener('keydown', handleKeyPress);
	document.getElementById("guessInput").onkeydown  = handleKeyPress;

	// place the ships on the game board
	model.generateShipLocations();
}





