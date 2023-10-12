<?php
	date_default_timezone_set('America/Los_Angeles');

$conn = new mysqli("127.0.0.1", "Alex", "1");

  if ($conn->connect_error) {
    die("Ошибка: не удается подключиться: " . $conn->connect_error);
  }
  mysqli_select_db($conn, "sightings");

if($_POST){
	if ($_POST['action'] == 'addSighting') {
	
		$date = $_POST['sighting_date'] ;
		$type = htmlspecialchars($_POST['creature_type']);
		$distance = htmlspecialchars($_POST['creature_distance']);
		$weight = htmlspecialchars($_POST['creature_weight']);
		$height = htmlspecialchars($_POST['creature_height']);
		$color = htmlspecialchars($_POST['creature_color_rgb']);
		$lat = htmlspecialchars($_POST['sighting_latitude']);
		$long = htmlspecialchars($_POST['sighting_longitude']);
		
		$my_date = date('Y-m-d', strtotime($date));
		
		if($type == ''){
			$type = "Other";
		}
		
		$sql  = "INSERT INTO sightings (sighting_date, creature_type, creature_distance, creature_weight, creature_height, creature_color, sighting_latitude, sighting_longitude)
		          VALUES ('$my_date', '$type', '$distance', '$weight', '$height', '$color', '$lat', '$long') ";

		$result = mysqli_query($conn, $sql);
		
		if ($result) {
			$msg = "Creature added successfully";
			success($msg);
		} else {
			fail('Insert failed.');
		}
		exit;
	}
}	
	// function db_connection($query) {
	// 	mysqli_connect('127.0.0.1', 'Alex', '1', 'sightings')
	// 		OR die(fail('Could not connect to database.'));

	// }
	
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>