	  async function createParseRunner() {
		// Creates a new Parse "Runner" object, which is created by default in your Parse app
		let runner = new Parse.Object("Runner");

		// Set the input values to the new "User" object
		runner.set("txtFirstName", document.getElementById("txtFirstName").value);
		runner.set("txtLastName", document.getElementById("txtLastName").value);
		runner.set("ddlGender", document.getElementById("ddlGender").value);
		runner.set("txtMinutes", document.getElementById("txtMinutes").value);
		runner.set("txtSeconds", document.getElementById("txtSeconds").value);
		try {
		  // Call the save method, which returns the saved object if successful
		  runner = await runner.save();
		  if (runner !== null) {
			// Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
			console.log(
			  `New object created with success! ObjectId: ${
				runner.id
			  }, ${runner.get("txtFirstName")}`
			);
		  }
		} 
		catch (error) {
		  console.log(`Error: ${error.message}`);
		}
	  }
	  async function retrieveRunner() {
		//Create your Parse Query, and define the class it will be searched
		const query = new Parse.Query("Runner");
	
		try {
		//Query the soccerPlayers object using the objectId you've copied
		const runner = await query.get("egvLbDs2ED");
		//access each object property using the get method
		const FirstName = runner.get("txtFirstName");
		const LastName = runner.get("txtLastName");
		const Gender = runner.get("ddlGender");
		const Minutes = runner.get("txtMinutes");
		
	
		console.log(`Name: ${FirstName}, email: ${LastName}, gender: ${Gender}, minutes: ${Minutes}`);
		} catch (error) {
		console.log(`Failed to retrieve the object, with error code: ${error.message}`);
		}
	  }  
	  async function retrieveRunner2() {
			var GameScore = Parse.Object.extend("Runner");
			var query = new Parse.Query(GameScore);
        //query.EqualTo("txtFirstName", "fff");
		//query.notEqualTo("txtFirstName", "fff");
			var results = await query.find();
        console.log("Successfully retrieved " + results.length + " scores.");
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
            var object = results[i];
			document.getElementById("runner5").innerHTML += object.get('txtFirstName') + '-' + object.get('txtLastName') + ('<br>');
			//console.log(object.id + ' - ' + object.get('txtFirstName'));
             
			 
        }
       }
	   
	  // Add on click listener to call the create parse user function
	  
	  
	  document.getElementById("btnSave").addEventListener("click", async function () {
			createParseRunner();
	  });
	  document.getElementById("btnSave1").addEventListener("click", async function () {
		retrieveRunner();
  });
  document.getElementById("btnSave2").addEventListener("click", async function () {
	retrieveRunner2();
}); 

//end doc ready