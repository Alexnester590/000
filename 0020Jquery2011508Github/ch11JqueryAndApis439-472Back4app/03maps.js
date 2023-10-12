	$(document).ready(function(){
	// 1
	var map;
	var contentString;
	let infowindow = new google.maps.InfoWindow({content: contentString,});
	var markersArray = [];
	var bounds = new google.maps.LatLngBounds();
	function initialize(){
		var lat = 17.525044;
		var lng = 78.486671;
		var loc = new google.maps.LatLng(lat,lng);
		var mapOpts = {
			zoom: 13,
			center: loc,
			mapTypeId: google.maps.MapTypeId.HYBRID
						};
				map = new google.maps.Map(document.getElementById("map_canvas"), mapOpts);

		
			getAllTypes1();
		
    }
	

	// 2
	var mapOptions = {
	center: [17.385044, 78.486671],
	zoom: 10
	}
	var map = new L.map('map', mapOptions);

	var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	map.addLayer(layer);
    var marker = L.marker([17.385044, 78.486671]);
    		marker.bindPopup('Hi Welcome to Tutorialspoint').openPopup();
			marker.addTo(map);
		var marker1 = L.marker([17.455044, 78.486671]);
    	    	marker1.bindPopup('Hi Welcome to Tutorialspoint1').openPopup();
				marker1.addTo(map);
		var marker2 = L.marker([17.525044, 78.486671]);
        		marker2.bindPopup('Hi Welcome to Tutorialspoint2').openPopup();
		 		marker2.addTo(map);

	async function getAllTypes1(){
		const query = new Parse.Query("Sightings");
		var results2 = await query.distinct('creature_type');
			console.log("results2" + results2);
			console.log("results2 length" + results2.length);
			for (var i = 0; i < results2.length; i++) {
					
					var info = '<li>' + results2[i] + '</li>';
					console.log("info" + info);
					var $li = $("<option />");
					$li.html(info);
					$li.appendTo("#ddlTypes");	
					
				}
	    
	}
	async function getSightingsByType3(X){
		query = new Parse.Query("Sightings");
    	query.equalTo("creature_type", X); //creature_type Колонка в классе "Sightings", textName1 Значение в колонке 
    	
		const results = await query.find();
		console.log("Successfully retrieved " + results + " scores.");
		console.log("Successfully retrieved " + results.length + " scores.");
			$('#sight_list').empty();
			// $.each(results,function() {
			// 	add_sighting(this);
			// });
			for (var i = 0; i < results.length; i++) {
				
				
			var object = results[i];
			console.log("object " + object);
		  	var loc = new google.maps.LatLng(object.get('latitude'), object.get('longitude'));
			console.log("loc " + loc);
			var info =    'Distance: ' +  object.get('distance') + '<br>';
				info += ' Height: ' +  object.get('height') + ', Weight: ' +  object.get('weight') + ', Color: ' +  object.get('color') + '<br>';
			  	info += 'Latitude: ' +  object.get('latitude') + ', Longitude: ' +  object.get('longitude');
			var opts = {
				map: map, 
				position: loc, 
				clickable: true
			};
			console.log("opts " + opts);
			const contentString = info;
			let marker = new google.maps.Marker(opts);
		   	marker.note = 'Date: ' +  object.get('datepicker') + '<br>' + 'Type: ' +  object.get('creature_type');
		   	markersArray.push(marker);
			console.log("markersArray" + markersArray);
			console.log("info " + info);
			google.maps.event.addListener(marker, 'click', function() {
				console.log("marker " + marker);
				console.log("loc " + loc);
				infowindow.close();
				infowindow = new google.maps.InfoWindow({
					content: contentString,});
				infowindow.open(map, marker);	
						
			});	
			var $li = $("<li />");
			//var info2 = 'Date: ' +  object.get('datepicker') + '<br>' + 'Type: ' +  object.get('creature_type');
			$li.html('Date: ' +  object.get('datepicker') + '<br>' + 'Type: ' +  object.get('creature_type'));
			$li.addClass("sightings");
			$li.click (function(){
					infowindow.close();
					infowindow = new google.maps.InfoWindow({
						content: contentString,});
					
					infowindow.open(map, marker);	
				});
			$li.appendTo("#sight_list");
			bounds.extend(loc);
			//return marker;
				
        }
    
		
				map.fitBounds(bounds);
	}
	
	$('#ddlTypes').change(function() {
    	if($(this).val() != ""){
			console.log( $(this).val() );
			clearOverlays();
			var X =  $(this).val();
			console.log( X );
			getSightingsByType3(X);
  		}
	});
	function add_sighting() {
		var object = results[i];
		var loc = new google.maps.LatLng(object.get('latitude'), object.get('longitude'));
			console.log("loc " + loc);
			var info =    'Distance: ' +  object.get('distance') + '<br>';
				info += ' Height: ' +  object.get('height') + ', Weight: ' +  object.get('weight') + ', Color: ' +  object.get('color') + '<br>';
			  	info += 'Latitude: ' +  object.get('latitude') + ', Longitude: ' +  object.get('longitude');
			var opts = {
				map: map, 
				position: loc, 
				clickable: true
			};
			console.log("opts " + opts);
			const contentString = info;
			var marker = new google.maps.Marker(opts);
		   	marker.note = 'Date: ' +  object.get('datepicker') + '<br>' + 'Type: ' +  object.get('creature_type');
		   	markersArray.push(marker);
			console.log("markersArray" + markersArray);
			console.log("info " + info);
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.close();
				infowindow = new google.maps.InfoWindow({
					content: contentString,});
				infowindow.open(map, marker);	
						
			});	
			var $li = $("<li />");
			//var info2 = 'Date: ' +  object.get('datepicker') + '<br>' + 'Type: ' +  object.get('creature_type');
			$li.html('Date: ' +  object.get('datepicker') + '<br>' + 'Type: ' +  object.get('creature_type'));
			$li.addClass("sightings");
			$li.click (function(){
					infowindow.close();
					infowindow = new google.maps.InfoWindow({
						content: contentString,});
					
					infowindow.open(map, marker);	
				});
			$li.appendTo("#sight_list");
			bounds.extend(loc);
			//return marker;
	}
	function clearOverlays() {
		if (markersArray) {
			for (i in markersArray) {
				markersArray[i].setMap(null);
			}
			markersArray.length = 0;
			bounds = null;
			bounds = new google.maps.LatLngBounds();
		}
	}
    initialize();

	//end doc ready

	// 3 карта
    // map = new OpenLayers.Map("mapdiv");
    // map.addLayer(new OpenLayers.Layer.OSM());
       
    // var pois = new OpenLayers.Layer.Text( "My Points",
    //                 { location:"./textfile.txt",
    //                   projection: map.displayProjection
    //                 });
    // map.addLayer(pois);
    // var layer_switcher= new OpenLayers.Control.LayerSwitcher({});
    // map.addControl(layer_switcher);
    // //Set start centrepoint and zoom    
    // var lonLat = new OpenLayers.LonLat( 9.5788, 48.9773 )
    //       .transform(
    //         new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
    //         map.getProjectionObject() // to Spherical Mercator Projection
    //       );
    // var zoom=11;
    // map.setCenter (lonLat, zoom);  
});//end doc ready

