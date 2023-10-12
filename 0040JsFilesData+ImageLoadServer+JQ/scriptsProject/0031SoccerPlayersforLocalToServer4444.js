async function saveNewPlayer() {
    //Create your Parse Object
    var soccerPlayers = new Parse.Object("SoccerPlayers");

    //Define its attributes
    soccerPlayers.set("playerName", "A. Wed");
    soccerPlayers.set("yearOfBirth", 1997);
    soccerPlayers.set("emailContact", "a.wed@email.io");
    soccerPlayers.set("attributes", ["fast","good conditioning"])
    try{
        //Save the Object
        var result = await soccerPlayers.save()
        console.log('New object created on SoccerPlayers with objectId: ' + result.id + 'from 0031js ');
    }catch(error){
        console.log('Failed to create new object, with error code: ' + error.message);
    }
}
async function retrievePlayer() {
    //Create your Parse Query, and define the class it will be searched
    var results;    
    var GameScore = Parse.Object.extend("SoccerPlayers");
    var query = new Parse.Query(GameScore);
    var results = await query.find();
    console.log("Successfully retrieved SoccerPlayers" + results.length + " scores. from 0031js ");
    
    console.log(results.length + " results.length");

    // for (var i = 0; i < results.length; i++) {
    //     var object = results[i];
    //     //console.log('object' + object);
    //     //console.log('object' + object);
    //     var object1 = object.get("playerName");
    //     console.log('object1' + object1);
    //     var object2 = object.get("emailContact")
    //     console.log('object1' + object1 + 'object2' + object2);
    //     document.getElementById("runner5").innerHTML += object1 + '-' + object2 + ('<br>');
	// 		//console.log(object.id + ' - ' + object.get('txtFirstName'));
    // }
    
  } 

//   setTimeout(wakeUpUser, 5000);
//   function wakeUpUser() {
//     console.log(results);
//     }
document.getElementById("createButton3").addEventListener("click", async function () {
saveNewPlayer();

retrievePlayer();


});