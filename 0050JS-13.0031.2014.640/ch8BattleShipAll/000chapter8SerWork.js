// RandomShip1
Parse.Cloud.define("SetBattleShipAllS", async (request) => {
	function randomShip() {
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
            generateShipLocations0: function() {
                var locations =0;
                for (var i = 0; i < this.numShips; i++) {
                    do {
                        locations = this.generateShip();
                    } while (this.collision(locations));
                    this.ships[i].locations = locations;
                }
                console.log("Ships array: ");
                console.log(this.ships);
                return this.ships;
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
            
        }
        return model;
    }
    

    function displayShip(model) {
        console.log("Your new Ship is a makeShip7777" + model);
        var Code1 = new Parse.Object("Runner");
        Code1.set("Ship8888", model);
        Code1.set("Ship9999", model.ships);
        Code1.set("Ship0001", model.generateShipLocations0());
        Code1.set("Ship0002", model.generateShip());
        Code1.save();
    }
    
    var carToSell = randomShip();
    displayShip(carToSell);
    Parse.Cloud.define("GetBattleShipAllS", async (request) => {
        let query = new Parse.Query("Runner");
        // query.equalTo("location1",true);
        // query.descending("title");
        return await query.find();
    });

});