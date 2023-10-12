var FREQ = 10000 ;
var repeat = true; 

document.getElementById("freq").innerHTML += "Page refreshes every " + FREQ/1000 + " second(s)." + ('<br>');
getDBRacers();
startAJAXcalls();
	 
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
			alert(
			  `New object created with success! ObjectId: ${
				runner.id
			  }, ${runner.get("txtFirstName")}`
			);
		  }
		} 
		catch (error) {
		  alert(`Error: ${error.message}`);
		}
}
	  
async function getDBRacers() {
			var GameScore = Parse.Object.extend("Runner");
			var query = new Parse.Query(GameScore);
        	var results = await query.find();
			console.log("results" + results);
			console.log("results length" + results.length);
			$('#finishers_m').empty();
				$('#finishers_f').empty();
				$('#finishers_all').empty();
        
        
        for (var i = 0; i < results.length; i++) {
            var object = results[i];
			var info = '<li>Name: ' +  object.get('txtFirstName') + ' ' +  object.get('txtLastName') + '. Time: ' +  object.get('txtMinutes') + '</li>';
			if(object.get('ddlGender') == 'm'){
				document.getElementById("finishers_m").innerHTML += info;
			}else if(object.get('ddlGender') == 'f'){
				document.getElementById("finishers_f").innerHTML += info;
			}else{}
			$('#finishers_all').append( info );
			console.log("object" + object);
			document.getElementById("finishers_all").innerHTML += object.get('txtFirstName') + '-' + object.get('txtLastName') + ('<br>');
			
        }
		getTimeAjax();
}
function getTimeAjax(){
		var time = "";
		$.ajax({
			url: "time.php",
			cache: false,
			success: function(data){
				$('#updatedTime').html(data);
			}
		});
}	   

function clearInputs(){
		$("#txtFirstName").val('');
		$("#txtLastName").val('');
		$("#ddlGender").val('');
		$("#txtMinutes").val('');
		$("#txtSeconds").val('');
};

function startAJAXcalls(){
	if(repeat){
		setTimeout( function() {
				getDBRacers();
				startAJAXcalls();
			},
			FREQ
		);
	}
}


$("#btnStart").click(function(){
	repeat = true;
	startAJAXcalls();
	document.getElementById("freq").innerHTML += "Page refreshes every " + FREQ/1000 + " second(s)." + ('<br>');
});

$("#btnStop").click(function(){
	repeat = false;
	$("#freq").html( "Updates paused." );
});


// Add on click listener to call the create parse user function
	  
	  
document.getElementById("btnSave").addEventListener("click", async function () {
			createParseRunner();
			clearInputs();
});
	  
document.getElementById("btnSave2").addEventListener("click", async function () {
	QueryRunner();
});

// function showFrequency(){
// 	document.getElementById("freq").innerHTML += "Page refreshes every " + FREQ/1000 + " second(s)." + ('<br>');
// 	//$("#freq").html( "Page refreshes every " + FREQ/1000 + " second(s)."); //Jquery
// }


//end doc ready