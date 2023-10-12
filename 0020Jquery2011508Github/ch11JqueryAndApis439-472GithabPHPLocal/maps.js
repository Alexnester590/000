$(document).ready(function(){

	var map;
	var contentString;
	var infowindow = new google.maps.InfoWindow({content: contentString,});
	var markersArray = [];
	var bounds = new google.maps.LatLngBounds();

	function initialize(){
		var lat = 45.519098;
		var lng = -122.672138;
		
		var latlng = new google.maps.LatLng(lat,lng);
		var mapOpts = {
			zoom: 13,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOpts);
		
		if ( $('#ddlTypes').length ) {
			// Populate the dropdown list
			getAllTypes();
		}else{
			// Populate the list of sightings
			getAllSightings();
		}
    }
    
	function getAllTypes(){
    	$.getJSON("service.php?action=getSightingsTypes", function(json) {
			if (json.creature_type.length > 0) {
				
				$.each(json.creature_type,function() {
					var info =  this['type'];
					var $li = $("<option />");
					$li.html(info);
					$li.appendTo("#ddlTypes");	
				});
			}
		});
    }	

    function getAllSightings(){
    	$.getJSON("service.php?action=getAllSightings", function(json) {
			if (json.sightings.length > 0) {
				$('#sight_list').empty();	
				
				$.each(json.sightings,function() {
					var info = 'Date: ' +  this['date'] + ', Type: ' +  this['type'];
					
					var $li = $("<li />");
					$li.html(info);
					$li.addClass("sightings");
					$li.attr('id', this['id']) ;
					$li.click(function(){
						getSingleSighting( this['id'] );		
					});
					$li.appendTo("#sight_list");	
				});
			}
		});
    }
	
	function getSingleSighting(id){
	
    	$.getJSON("service.php?action=getSingleSighting&id="+id, function(json) {
			if (json.sightings.length > 0) {
				
				$.each(json.sightings,function() {
					var loc = new google.maps.LatLng(this['lat'], this['long']);
				
					var my_marker = new google.maps.Marker({
						position: loc, 
						map: map,
						title:this['type'] 
					}); 
					map.setCenter(loc, 20);
				});
			}
		});	
	}

    

    function getSightingsByType(type){
    	$.getJSON("service.php?action=getSightingsByType&type="+type, function(json) {
			if (json.sightings.length > 0) {
				$('#sight_list').empty();	
				
				$.each(json.sightings,function() {
					add_sighting(this);
				});
				map.fitBounds(bounds);
			}
		});
    }	
    
    $('#ddlTypes').change(function() {
    	if($(this).val() != ""){
  			clearOverlays();
  			getSightingsByType( $(this).val() );
  		}
	});
	
	function add_sighting(sighting) {
	
		var loc = new google.maps.LatLng(sighting['lat'], sighting['long']);
		
		var info = 'Distance: ' +  sighting['distance'] + '<br>';
		info += ' Height: ' +  sighting['height'] + ', Weight: ' +  sighting['weight'] + ', Color: ' +  sighting['color'] + '<br>';
		info += 'Latitude: ' +  sighting['lat'] + ', Longitude: ' +  sighting['long'];
		
		var opts = {
			map: map, 
			position: loc, 
			clickable: true
		};
		const contentString = info;
		var marker = new google.maps.Marker(opts);
		marker.note = 'Date: ' +  sighting['date'] + ', Type: ' +  sighting['type'];
		markersArray.push(marker);
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.close();
			
			infowindow = new google.maps.InfoWindow({
				content: contentString,});
				
			infowindow.open(map, marker);
		});
		
		var $li = $("<li />");
		$li.html('Date: ' +  sighting['date'] + ', Type: ' +  sighting['type']);
		$li.addClass("sightings");
		$li.click(function(){
			infowindow.close();
			infowindow = new google.maps.InfoWindow({
				content: contentString,});
			
			infowindow.open(map, marker);		
		});
		$li.appendTo("#sight_list");	
		bounds.extend(loc);
		return marker;
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
    
});//end doc ready