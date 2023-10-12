// RandomShip1


Parse.Cloud.define("SetBattleShipAllS0", async (request) => {
    
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
    async function displayShip1() {
        // var Code0 = {
        //     player: "Jake Cutter",
        //     diceRoll: 2
        //   };
        var Code1 = new Parse.Object("Ships");
        //Code1.set("Ship6666", controller.processGuess(guess));
        // Code1.set("Ship7777", request.params.number1);
         Code1.set("Ship8888", model);
         Code1.set("Ship9999", model.ships);
        // Code1.set("Ship0001", model.generateShipLocations0());
        Code1.save();
        var result = await Code1.save();
        
        console.log("query.get4444" + result.id);
        var result2 = result.id;
        console.log("query.get5555" + result2);
        var Code2 = new Parse.Object("Ships");
        Code2.set("Ship99991111", result2);
        Code2.save();
        var Code3 = new Parse.Object("Ships");
        let query = new Parse.Query(Code3);
        
        query.get(result2,
            {
            success: function(yourObj) {
              console.log('here')
              yourObj.destroy({})
            },
            error: function(object, error) {
                console.log('here2')
            }
        });
        
    }
     
    
    

    // function displayShip4() {
        
    //     let query = new Parse.Query("Ships");
    //     query.equalTo("objectId", "result.id");
    //     query.find()
    //         // {
    //         // success: function(yourObj) {
    //         //   console.log('here')
    //         //   yourObj[0].destroy({})
    //         // },
    //         // error: function(object, error) {
    //         //     console.log('here2')
    //         // }
    //         // });
        
        
    
    // }
    
    // displayShip4(displayShip1());



        
        // Code1.save(Code0, {
        //     success: function(result){
        //         console.log("Code1.save" + result.id);
        //         var query = new Parse.Query("Ships");
        //         query.get(Code1.id, {
        //             success: function(obj) {
        //                 console.log("query.get4444" + obj.id);
        //                 obj.set("Ship0002", "AAAAAAAAAAAAAAAA");
        //                 obj.increment("BBBBBBBBBBBBBBBBBBB");
        //                 obj.add("tags", "Udated-post");
        //                 obj.save(null, {
        //                     success: function(obj) {
        //                         console.log("query.get5555" + obj.id);
        //                     },
                
        //                     error: function(obj, err) {
        //                         console.error(err);
        //                     }
        //                 });

        //             },
                
        //             error: function(obj, err) {
        //                 console.error(err);
        //             }
        //         });
        //     }, 
        //     error: function(obj, err){
        //         console.error(err);
        //     }
        // })
        
        
    
    
    displayShip1(model);

}); 
// Parse.Cloud.define("GetBattleShipAllS", async (request) => {
//     let query = new Parse.Query("Ships");
//     // query.equalTo("location1",true);
//     // query.descending("title");
//     return await query.find();
// });

    
    

    
    //передать в контролер значение А2
    
    // var view = {
    //     displayMessage: function(msg) {
    //         //document.getElementById("messageArea").innerHTML = msg;
    //         var displayMessage1 = 1;

    //         return displayMessage1;
            

    //     },
    
    //     displayHit: function(location) { // передаем сюда 02 из model.fire()
    //         //document.getElementById(location).setAttribute("class", "hit");
    //         var displayHit2 = location + 100 ;

    //         return displayHit2;
    //     },
    
    //     displayMiss: function(location) {
            
    //         //document.getElementById(location).setAttribute("class", "miss");
    //         var displayMiss3 = location +200;

    //         return displayMiss3;
    //     }
    
    // }; 
    // function displayview() {
        
    //     var Code1 = new Parse.Object("Ships");
    //     Code1.set("Ship01", view.displayMessage(msg));
    //     Code1.set("Ship02", view.displayHit(location));
    //     Code1.set("Ship03", view.displayMiss(location));
    //     Code1.save();
    // }
    
    // displayview(view);
   


// Parse.Cloud.define("SetBattleShipAllS00", async (request) => {
    
    
//     function displayShip2() {
//         var data = "Ship5555";
        
//         var query = new Parse.Query("Ships");
//         // query.get(myid, {
//         //     success: function(obj) {
//         //       // object is an instance of parse.object.
//         //     },
          
//         //     error: function(object, error) {
//         //       // error is an instance of parse.error.
//         //     }
//         //   });

//         Code1.set(data, "model.ships");
//         Code1.save({
//             success: function(obj){
//                 console.log("Your new Ship is a makeShip9999" + obj.id);
//             }, 
//             error: function(obj, err){
//                 console.error(err);
//               }


//         });
        
        
        
//     }
    
//     displayShip2();

// });

Parse.Cloud.define("GetBattleShipAllS", async (request) => {
    let query = new Parse.Query("Ships");
    query.equalTo("location1",true);
    // query.descending("title");
    return await query.find();
}); 


Parse.Cloud.define("SetBattleShipAllS1", async (request) => {
    var guess = request.params.number1;
    var controller1 = {
            
            guesses: 0, 

            processGuess: function(guess) { // guess = А2 например
                var location = parseGuess(guess); //передаем в location функцию изменения А на 0
                console.log("location111: " + location); //получаем 02
                
                if (location) {
                    this.guesses++; 
                    var hit = fire(location); // передаем в обьект model методу fire координаты 02
                    console.log("hit: " + hit); // возврааем тру или фелс

                    // if (hit && model.shipsSunk === model.numShips) { //если hit тру и 3 равно 3 тру вызываем сообщение.
                    //         view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
                    // }
                }
                return location + hit;
            }
    }
    function parseGuess() {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            console.log("Oops, please enter a letter and a number on the board.");
        } else {
            var firstChar = guess.charAt(0); //Извлекаем первый символ строки
            console.log("firstChar: " + firstChar);
            var row = alphabet.indexOf(firstChar); // При помощи метода indexOf получаем цифру в диапазоне от 0 до 6, соответствующую букве.
            console.log("row: " + row);
            var column = guess.charAt(1);
            console.log("column: " + column);
            
            if (isNaN(row) || isNaN(column)) {
                console.log("Oops, that isn't on the board.");
            } else if (row < 0 || row >= 7 || //model.boardSize
                    column < 0 || column >= 7) { //model.boardSize
                console.log("Oops, that's off the board!");
            } else {
                console.log("guess1: " + row + column);
                return row + column;
            }
        }
        return null;
    }
    function fire() { //медод fire получил координаты 02 из обьекта controller метода processGuess и теперь его обрабатыват
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            console.log("ship: " + ship);
            console.log("guess: " + guess);
            var index = ship.locations.indexOf(guess);
            console.log("index: " + index); // -1 если координат 02 нет в массиве locations если есть то индекс массива( 0 или 1 или 2).


            // here's an improvement! Check to see if the ship
            // has already been hit, message the user, and return true.
            if (ship.hits[index] === "hit") { // например корабль 0 и индекс равен 1 мы проверяем еть ли там же значение hit если есть выводим сообщение ниже
                //view.displayMessage("Oops, you already hit that location!");
                return true;
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                // view.displayHit(guess); // Передаем туда 02 и там присваивается setAttribute("class", "hit");
                // view.displayMessage("HIT!"); //в messageArea появляется текст HIT!

                if (this.isSunk(ship)) { //передаем в обьект model методу isSunk корабль I,... если this.isSunk(ship) равно тру 
                    //пишем сообщение и прибовляем один потопленый корабль если нет ничего не происходит
                    //view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        // view.displayMiss(guess); //
        // view.displayMessage("You missed.");
        return false;
    }
    function displayShip2() {
        console.log("Your new Ship is a makeShip7777" + controller1.processGuess(guess));
        var Code1 = new Parse.Object("Ships");
        Code1.set("Ship6666333", controller1.processGuess());
        Code1.set("Ship666611", controller1.processGuess());
        Code1.save();
    }
    
    displayShip2(controller1);
});

// Parse.Cloud.define("GetBattleShipAllS", async (request) => {
//     let query = new Parse.Query("Ships");
//     // query.equalTo("location1",true);
//     // query.descending("title");
//     return await query.find();
// });

Parse.Cloud.define("GetBattleShipAllS", async (request) => {
    var Code1 = new Parse.Object("Ships");
    let query = new Parse.Query(Code1);
    
    return await query.find();
});

