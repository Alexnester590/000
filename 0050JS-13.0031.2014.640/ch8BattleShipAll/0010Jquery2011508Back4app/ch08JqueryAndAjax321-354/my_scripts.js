$(document).ready(function(){

	var FREQ = 10000 ;
	var repeat = true;
	
	function showFrequency(){
		$("#freq").html( "Page refreshes every " + FREQ/1000 + " second(s).");
	}
	
	function startAJAXcalls(){
	
		if(repeat){
			setTimeout( function() {
					getXMLRacers();
					startAJAXcalls();
				}, 	
				FREQ
			);
		}
	}
	
	function getXMLRacers(){
		$.ajax({
			url: "https://parsefiles.back4app.com/kza8RK6DdjO0fmGSHUnPkNmxOHdftAc9968sVMAM/20e55e8a1f4ed9133015f647d9e46e63_finishers.xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#finishers_m').empty();
				$('#finishers_f').empty();
				$('#finishers_all').empty();
				
				$(xml).find("runner").each(function() {
					var info = '<li>Name: ' + $(this).find("fname").text() + ' ' + $(this).find("lname").text() + '. Time: ' + $(this).find("time").text() + '</li>';
					if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }
					$('#finishers_all').append( info );
				});
				
				getTimeAjax();
			}
		});
	}

	function getTimeAjax(){
	//$('#updatedTime').load("time.php");
		
		var time = "";
		$.ajax({
			url: "https://parsefiles.back4app.com/ozuldPbgHohaEiLI7mE66hYYlNeRItGU2ii7pvXu/5689358b8fc950931da017cdb5921c50_time.php",
			cache: false,
			success: function(data){
				$('#updatedTime').html(data);
			}
		});
		
	}
	
	$("#btnStop").click(function(){
		repeat = false;
		$("#freq").html( "Updates paused." );
	});

	$("#btnStart").click(function(){
		repeat = true;
		startAJAXcalls();
		showFrequency();
	});	

	showFrequency();
	getXMLRacers();
	startAJAXcalls();
});
