// RandomShip1
function init() {
	// Fire! button onclick handler
	
	document.getElementById("fireButton").onclick = BattleShipL;

	// handle "return" key press
	//window.addEventListener('keydown', handleKeyPress);
	document.getElementById("guessInput").onkeydown  = handleKeyPress;
	//const SetShip09 = Parse.Cloud.run('SetBattleShipAllS09');

	const SetShip00 = Parse.Cloud.run('SetBattleShipAllS00');
	const SetShip01 = Parse.Cloud.run('ModelCreatedS01');
	const SetShip02 = Parse.Cloud.run('ModelReadS02');
	const SetShip03 = Parse.Cloud.run('ModelFoundForUpdateAndUpdateS03');
	//const SetShip04 = Parse.Cloud.run('04ModelFoundForDeleteAndDelete04');
	//const SetShip05 = Parse.Cloud.run('ModelCreatedS05');
	// place the ships on the game board
	//model.generateShipLocations();
}

window.onload = init;

async function BattleShipL() {

	var guessInput = document.getElementById("guessInput");
	
	console.log("guessInput: " + guessInput);
	var guess = guessInput.value.toUpperCase();
	console.log("guess: " + guess); //Наример А2

	//controller.processGuess(guess); //Передаем  А2 в  обьект контролер методу processGuess
 
	guessInput.value = "";

	const params = { number1: guess }
	
	const SetShip = Parse.Cloud.run('SetBattleShipAllS1', params);

	const GetShip = await Parse.Cloud.run('GetBattleShipAllS');

}

function handleKeyPress(e) {
	if (e.keyCode === 13) { //строгое равенство
		document.getElementById("fireButton").click();
		return false;
	}
}
getAllTypes1();
async function getAllTypes1(){
	const query = new Parse.Query("Ships");
	//var results2 = await query.distinct('creature_type');
	const results2 = await query.find();

		console.log("results2" + results2);
		console.log("results2 length" + results2.length);
		for (var i = 0; i < results2.length; i++) {
			var object = results2[i];
			const arr = Object.keys(object);
			console.log(arr);
				
				var info = '<li>' + results2[i] + '</li>';
				console.log("info" + info);
				var $li = $("<option />");
				$li.html(info);
				$li.appendTo("#ddlTypes");	
				
			}
	
}

async function getSightingsByType3(X){
	query = new Parse.Query("Ships");
	//query.equalTo("creature_type", X); //creature_type Колонка в классе "Sightings", textName1 Значение в колонке 
	const results = await query.find();
	console.log("Successfully retrieved " + results + " scores.");
	console.log("Successfully retrieved " + results.length + " scores.");
		$('#sight_list').empty();
		for (var i = 0; i < results.length; i++) {
		var object = results[i];
		var json = JSON.stringify(object);
		console.log("json "+ json);
		var object1 = JSON.parse(json);
		console.log("object1 "+ object1);
		const arr = Object.keys(object1);
		console.log("arr "+ arr);
		document.getElementById("runner5").innerHTML += (arr[i]);
		console.log("object " + object);
		console.log(Object.keys(object));
		var info =    'agePet: ' +  object.get('agePet') + '<br>';
			info += ' Name: ' +  object.get('Name') + ', ModelCreated: ' +  object.get('ModelCreated') + ', ModelSaved: ' +  object.get('ModelSaved') + '<br>';
			info += 'Latitude: ' +  object.get('latitude') + ', Longitude: ' +  object.get('longitude');
		console.log("info " + info);
		var $li = $("<li />");
		//$li.html('agePet: ' +  object.get('agePet') + '<br>' + 'Name: ' +  object.get('Name'));
		$li.html(arr[i]);
		$li.addClass("sightings");
		$li.appendTo("#sight_list");
		var $td = $("<td />");
		//$td.html('agePet: ' +  object.get('agePet') + '<br>' + 'Name: ' +  object.get('Name'));
		$td.html(arr[i]);
		$td.addClass("sightings");
		$td.appendTo("#sight_list2");
		
		
		//return marker;
			
	}
}

$('#ddlTypes').change(function() {
	if($(this).val() != ""){
		console.log( $(this).val() );
		//clearOverlays();
		var X =  $(this).val();
		console.log( X );
		getSightingsByType3(X);
	  }
});
function Delete() {
	
	const SetShip04 = Parse.Cloud.run('04ModelFoundForDeleteAndDelete04');
	
}
document.getElementById("btnDelet001").addEventListener("click", async function () {
    Delete();
});