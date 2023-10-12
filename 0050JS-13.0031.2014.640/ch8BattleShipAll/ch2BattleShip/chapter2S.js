// RandomShip1
Parse.Cloud.define("SetBattleShipS", async (request) => {
	function makeShip() {
        var randomLoc = Math.floor(Math.random() * 5);
		console.log(randomLoc + 'randomLoc')
		var location1 = randomLoc;
		var location2 = location1 + 1;
		var location3 = location1 + 2;
		console.log(location1 + ' ' + location2 + ' ' + location3 + ' ')
		// var	guess;
		// var	hits = 0;
		// var	guesses =  0;
		// var	isSunk = false;
		var Ship = {
            location1: location1,
            location2: location2,
            location3: location3,
            
        };
		console.log(Ship)
		// Ship1.set("location1", location1);
		// let Ship1 = new Parse.Object("Runner");
		
        return Ship;
    }
	function displayShip(Ship) {
        console.log("Your new Ship is a makeShip11111" + Ship.location1 + " " + Ship.location2 + " " + Ship.location3);
        var Ship1 = new Parse.Object("Runner");
        Ship1.set("location1", Ship.location1);
        Ship1.set("location2", Ship.location2);
        Ship1.set("location3", Ship.location3);
        Ship1.save();
    }
    
var carToSell = makeShip();
displayShip(carToSell);
    
Parse.Cloud.define("GetBattleShipS", async (request) => {
    let query = new Parse.Query("Runner");
    // query.equalTo("location1",true);
    // query.descending("title");
    return await query.find();
});
	
   
});


