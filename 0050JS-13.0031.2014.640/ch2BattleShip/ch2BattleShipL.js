// 002 BattleShip

async function BattleShipL() {
	const SetShip = await Parse.Cloud.run('SetBattleShipS');

	const GetShip = await Parse.Cloud.run('GetBattleShipS');


	const params2 = {title:"Launch my App", done:true}
	const createToDo = await Parse.Cloud.run('createToDoS', params2);

	const getToDos = await Parse.Cloud.run('getListToDoS');
}
BattleShipL();


async function ViewAllRunner() {
	var GameScore = Parse.Object.extend("Runner");
	var query = new Parse.Query(GameScore);
    //query.EqualTo("txtFirstName", "fff");
	//query.notEqualTo("txtFirstName", "fff");
	var results = await query.find();
    console.log("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
        var object = results[i];
		document.getElementById("runner555").innerHTML += object.get('location1') + '-' + object.get('location2') + ('<br>');		
    }
	var guess;
	var hits = 0;
	var guesses = 0;
	var isSunk = false;

	while (isSunk == false) {
		guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
		if (guess < 0 || guess > 6) {
			alert("Please enter a valid cell number!");
		} else {
			guesses = guesses + 1;
			if (guess == object.get('location1') || guess == object.get('location2') || guess == object.get('location3')) {
				alert("HIT!");
				hits = hits + 1;
				if (hits == 3) {
					isSunk = true;
					alert("You sank my battleship!");
				}
			} else {
				alert("MISS");
			}
		}
	}
	var stats = "You took " + guesses + " guesses to sink the battleship, " +
				"which means your shooting accuracy was " + (3/guesses);
	alert(stats);



}
ViewAllRunner();





// async function BattleShipL() {
// 	var randomLoc = Math.floor(Math.random() * 5);
// 	var location1 = randomLoc;
// 	var location2 = location1 + 1;
// 	var location3 = location1 + 2;
// 	var	guess;
// 	var	hits = 0;
// 	var	guesses =  0;
// 	var	isSunk = false;
// 	let Ship1 = new Parse.Object("Runner");
// 	Ship1.set("location1", location1);
// 	Ship1.set("location2", location2);
// 	Ship1.set("location3", location3);
	
// 	try {
// 		result = await Ship1.save();
// 		if (Ship1 !== null) {
// 			console.log(`New object created with success! ObjectId: 
// 			${Ship1.id}, 
// 			${Ship1.get("location1")}`
// 			);
// 		}
// 	} 
// 	catch (error) {
// 		console.log(`Error: ${error.message}`);
// 	}
// 	var ShipForGet = Ship1.get("location1");
// 	console.log('New object created with objectId111: ' + result.id);
//         console.log('New object created with objectId222: ' + ShipForGet.id);
// 		console.log('New object created with objectId333: ' + Ship1.get("location1"));
//         document.getElementById("runner111").innerHTML += 'New object created with objectId111: ' + '-' + result.id + ('<br>');
// 		document.getElementById("runner111").innerHTML += 'New object created with objectId222: ' + '-' + Ship1.get("location1") + ('<br>');
//         document.getElementById("runner333").innerHTML += 'New object created with objectURL333: ' + '-' + ShipForGet.id + ('<br>');
//         document.getElementById("runner555").innerHTML += ShipForGet.id;
//         $("#myLink111").html('<a href = "' + result.id + '">777</a>')
//         $("#myLink333").html('<a href = "' + ShipForGet.id + '">888</a>')

// }
// document.getElementById("btnSave1").addEventListener("click", async function () {
// 	BattleShipL();
// });
	

