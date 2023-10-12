$(document).ready(function(){

	//1. Build a date picker for users to enter the date of the sighting.
		$("#datepicker").datepicker({ changeMonth: true, changeYear: true});


	//2. Build more engaging radio buttons for users to choose the creature type.
		$( "#type_select" ).buttonset();
		
	//3. Build number entry sliders for users to enter distance from creature, creature weight, and creature height.

		//3a. slide_dist
		$( "#slide_dist" ).slider({
			value:0,
			min: 0,
			max: 500,
			step: 10,
			slide: function( event, ui ) {
				$( "#distance" ).val( ui.value);
			}
		});
	$( "#distance" ).val( $( "#slide_dist" ).slider( "value" ));
		
		
		
		//3b. slide_weight
		
		$( "#slide_weight" ).slider({
			value:0,
			min: 0,
			max: 5000,
			step: 5,
			slide: function( event, ui ) {
				$( "#weight" ).val( ui.value);
			}
		});
		
		$( "#weight" ).val( $( "#slide_weight" ).slider( "value" ));
        
		//3c.  slide_height
		$( "#slide_height" ).slider({
			value:0,
			min: 0,
			max: 20,
			step: 1,
			slide: function( event, ui ) {
				$( "#height" ).val( ui.value);
			}
		});
		
        $( "#height" ).val( $( "#slide_height" ).slider( "value" ));
        
		//3d. latitude
		
		$( "#slide_lat" ).slider({
			value:0,
			min: -90,
			max: 90,
			step: 0.00001,
			slide: function( event, ui ) {
				$( "#latitude" ).val( ui.value);
			}
		});
		
			//3e. longitude
		
		$( "#slide_long" ).slider({
			value:0,
			min: -180,
			max: 180,
			step: 0.00001,
			slide: function( event, ui ) {
				$( "#longitude" ).val( ui.value);
			}
		});

	//4. Build a color mixer interface component for the user to enter creature color.
	
	function refreshSwatch() {

		var	red = $( "#red" ).slider( "value" );
		var	green = $( "#green" ).slider( "value" );
		var	blue = $( "#blue" ).slider( "value" );
		var	my_rgb = "rgb(" + red + "," + green + "," + blue + ")"; 
			
			$( "#swatch" ).css( "background-color", my_rgb );
			$( "#red_val" ).val(red );
			$( "#blue_val" ).val( blue);
			$( "#green_val" ).val( green);
			$( "#color_val" ).val( my_rgb);		
	}
	async function createParseSightings() {
		let sightings = new Parse.Object("Sightings");

		// Set the input values to the new "User" object
		sightings.set("datepicker", document.getElementById("datepicker").value);
		var CreatureTypes2 = document.getElementsByName('creature_type');
		var option_value;
		for(var i = 0; CreatureTypes2.length; i++){
			if(CreatureTypes2[i].checked){
				option_value = CreatureTypes2[i].value;
				sightings.set("creature_type", option_value);

				break;
			}
		}
		sightings.set("distance", document.getElementById("distance").value);
		sightings.set("weight", document.getElementById("weight").value);
		sightings.set("height", document.getElementById("height").value);
		sightings.set("color", document.getElementById("color_val").value);
		sightings.set("latitude", document.getElementById("latitude").value);
		sightings.set("longitude", document.getElementById("longitude").value);
		try {
		  // Call the save method, which returns the saved object if successful
		  sightings = await sightings.save();
		  if (sightings !== null) {
			// Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
			console.log(`New object created with success! ObjectId: ${sightings.get("datepicker")}`);
			console.log(`New object created with success! ObjectId: ${sightings.get("creature_type")}`);
			console.log(`New object created with success! ObjectId: ${sightings.get("distance")}`);
			console.log(`New object created with success! ObjectId: ${sightings.get("weight")}`);
			console.log(`New object created with success! ObjectId: ${sightings.get("height")}`);
			console.log(`New object created with success! ObjectId: ${sightings.get("color_val")}`);
			console.log(`New object created with success! ObjectId: ${sightings.get("latitude")}`);
		  }
		} 
		catch (error) {
		  alert(`Error: ${error.message}`);
		}
	}
	

	$( "#red, #green, #blue" ).slider({
		orientation: "horizontal",	
		range: "min", 
		max: 255, 
		value: 127, 
		slide: refreshSwatch,
		change: refreshSwatch
	});
						
	

	$( "#red" ).slider( "value", 127 );
	$( "#green" ).slider( "value", 127 );
	$( "#blue" ).slider( "value", 127 );



	//5. Build a nicer-looking “submit“ button for the Sightings form..
	$("button:submit").button();
		
	$("#frmAddSighting").submit(function(){
		return false;
	});
	
	document.getElementById("btnSave").addEventListener("click", async function () {
		createParseSightings();
		
	});
	
});//end doc ready
