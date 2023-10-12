// RandomShip1


Parse.Cloud.define("SetBattleShipAllS00", async (request) => {

    var textName = "myName";
    var textAge = 10;
    mypet = new Parse.Object("Pet");
    myships = new Parse.Object("Ships");
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
        isSunk: function(ship) {
            for (var i = 0; i < this.shipLength; i++)  {
                if (ship.hits[i] !== "hit") { // не равно
                    return false;
                }
            }
            return true;
        },

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
    Parse.Cloud.define("GetBattleShipAllS", async (request) => {
        let query = new Parse.Query("Ships");
        // query.equalTo("location1",true);
        // query.descending("title");
        return await query.find();
    });
    
    Parse.Cloud.define("ModelCreatedS01", async (request) => {
    
        function create() {
            myships.set("Name", textName);
            myships.set("agePet", textAge);
            myships.set("ModelCreated", model);
            myships.save().then(function(ship){
                console.log('model created successful with name: ' + ship.get("ModelCreated") + ' and id: ' + ship.id);
                myships.set("ModelSaved", ship.id);
                myships.save()
                
            }).catch(function(error){
                console.log('Error: ' + error.message);
            });
        }
        create();   
    });
    Parse.Cloud.define("ModelReadS02", async (request) => {
        read();
        function read() {
            query = new Parse.Query(myships);
            query.equalTo("Name", textName);
            query.first().then(function(ship){
                if(ship){
                    console.log('ship found successful with model: ' + ship.get("Model") + ' and id: ' + ship.id);
                    myships.set("ModelRead", ship.id);
                    myships.save()
                } else {
                    console.log("Nothing found, please try again");
                }
            }).catch(function(error){
                console.log("Error: " + error.code + " " + error.message);       
            });
        }
    });

    Parse.Cloud.define("ModelFoundForUpdateAndUpdateS03", async (request) => {
        readThenUpdate();
        function readThenUpdate() {
            query = new Parse.Query(myships);
            query.equalTo("Name", textName);
            query.first().then(function (ship) {
            if (ship) {
                console.log('ship found with name1111: ' + ship.get("Name") + ' and age: ' + ship.get("agePet"));
                myships.set("ModelFoundForUpdate", ship.id);
                myships.save()
                update(ship);
            } else {
                console.log("Nothing found, please try again");
            }
            }).catch(function (error) {
            console.log("Error: " + error.code + " " + error.message);
            });
        }
            //update();
        function update(foundship) {
            textName = "myNameUpdated";
            textAge = 20;
            foundship.set('Name', textName);
            foundship.set('agePet', textAge);
            foundship.save().then(function (ship) {
                console.log('ship updated! Name: ' + ship.get("Name") + ' and new age: ' + ship.get("agePet"));
                myships.set("ModelUpdated", ship.id);
                myships.save()
                
            }).catch(function(error) {
                console.log('Error: ' + error.message);
            });
        }
    });
    Parse.Cloud.define("04ModelFoundForDeleteAndDelete04", async (request) => {
        readThenDelete();
        function readThenDelete() {
            query = new Parse.Query(myships);
            query.equalTo("Name", textName);
            query.first().then(function (ship) {
                if (ship) {
                    console.log('ship found with name2222: ' + ship.get("Name") + ' and age: ' + ship.get("agePet"));
                    myships.set("ModelFoundForDelete", ship.id);
                    myships.save()
                    deletePet(ship);
                } else {
                    console.log("Nothing found, please try again");
                    return null;
                }
            }).catch(function (error) {
                console.log("Error: " + error.code + " " + error.message);
                return null;
            });
        }

        //deletePet();
        function deletePet(foundPet) {
            foundPet.destroy().then(function(response) {
                console.log('Pet '+ foundPet.get("Name") + ' erased successfully');
                myships.set("ModelDelete", foundPet.id);
                myships.save()
            }).catch(function(response, error) {
            console.log('Error: '+ error.message);
            });
        }
    });
});
