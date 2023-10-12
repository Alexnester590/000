$(document).ready(function(){



    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());
       
    var pois = new OpenLayers.Layer.Text( "My Points",
                    { location:"./textfile.txt",
                      projection: map.displayProjection
                    });
    map.addLayer(pois);
 // create layer switcher widget in top right corner of map.
    var layer_switcher= new OpenLayers.Control.LayerSwitcher({});
    map.addControl(layer_switcher);
    //Set start centrepoint and zoom    
    var lonLat = new OpenLayers.LonLat( 9.5788, 48.9773 )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
    var zoom=11;
    map.setCenter (lonLat, zoom);  

//
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


	var map;
	var info_window = new google.maps.InfoWindow({content: ''});
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

		if ( $('#ddlTypes1').length ) {
			// Populate the dropdown list
			getAllTypes();
		}else{
			// Populate the list of sightings
			getAllSightings();
		}
    }
   
        function getAllSightings(){
    	$.getJSON("service.php?action=getAllSightings", function(json) {
			if (json.creature_type.length > 0) {
				$('#sight_list').empty();
				$('#sight_list2').empty();	
				
				
				$.each(json.creature_type,function() {

					var info = 'Type: ' +  this['creature_type'];
					var info3 = this['creature_type'];
					var $li = $("<li />");
					$li.html(info);
					$li.addClass("sightings");
					$li.appendTo("#sight_list");
					var $li2 = $("<li />");
					$li2.html(info);
					$li2.addClass("sightings");
					$li2.appendTo("#sight_list2");
					var $li3 = $("<option />");
					$li3.html(info3);
					$li3.appendTo("#ddlTypes1");
				});
			}
		});
    }
	function getSightingsByType(type){
		$.getJSON("service.php?action=getSightingsByType&type="+type, function(json)
		{
			if (json.sightings.length > 0) {
				$('#sight_list4').empty();

					$.each(json.sightings ,function() {
						var loc = new google.maps.LatLng(this['lat'], this['long']);
				
						var my_marker = new google.maps.Marker({
						position: loc, 
						map: map,
						title:this['type'] 
						}); 
						markersArray.push(my_marker);
						var info = 'Distance: ' +  this['distance'] + '<br>';

						var my_infowindow = new google.maps.InfoWindow({
							content: info
						});
						google.maps.event.addListener(my_marker, 'click', function() {
						my_infowindow.open(map,my_marker);
						});
						var info4 = 'Type: ' +  this['creature_type'];
						alert(info4);

						var $li4 = $("<li />");
						$li4.html(info4);
						$li4.addClass("sightings");
						$li4.appendTo("#sight_list4");
						bounds.extend(loc);
					});
				map.fitBounds(bounds);
			}
		});
    }

	function getAllTypes(){
    	$.getJSON("service.php?action=getSightingsTypes", function(json_types) {
			if (json_types.creature_type.length > 0) {
				
				$.each(json_types.creature_type,function() {
					var info =  this['creature_type'];
					var $li = $("<option />");
					$li.html(info);
					$li.appendTo("#ddlTypes1");	
				});
			}
		});
    }	
	
	
	
	$('#ddlTypes1').change(function() {
    	if($(this).val() != ""){
  			alert( $(this).val() );
			clearOverlays();
			getSightingsByType( $(this).val() );
  		}
	});
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
    getAllSightings()
    initialize();
});//end doc ready

