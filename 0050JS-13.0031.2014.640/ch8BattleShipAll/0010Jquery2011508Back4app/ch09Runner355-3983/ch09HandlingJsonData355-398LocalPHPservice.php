<?php

$conn = new mysqli("127.0.0.1", "Alex", "1");

  if ($conn->connect_error) {
    die("Ошибка: не удается подключиться: " . $conn->connect_error);
  }
  mysqli_select_db($conn, "race_info");

if($_POST){	
	if ($_POST['action'] == 'addRunner') {
	
		$fname = htmlspecialchars($_POST['txtFirstName']);
		$lname = htmlspecialchars($_POST['txtLastName']);
		$gender = htmlspecialchars($_POST['ddlGender']);
		$minutes = htmlspecialchars($_POST['txtMinutes']);
		$seconds = htmlspecialchars($_POST['txtSeconds']);
		if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)) {
			fail('Invalid name provided.');
		}
		if( empty($fname) || empty($lname) ) {
			fail('Please enter a first and last name.');
		}
		if( empty($gender) ) {
			fail('Please select a gender.');
		}
		if( empty($minutes) || empty($seconds) ) {
			fail('Please enter minutes and seconds.');
		}
		
		$time = $minutes.":".$seconds;

		$sql = "INSERT INTO runners (first_name, last_name, gender, finish_time)
									VALUES ('$fname', '$lname', '$gender', '$time')";
		$result = mysqli_query($conn, $sql);
		
		if ($result) {
			$msg = "Runner: ".$fname." ".$lname." added successfully" ;
			success($msg);
		} else {
			fail('Insert failed.');
		}
		exit;
	}
}

if($_GET){
	if($_GET['action'] == 'getRunners'){
		$query = "SELECT first_name, last_name, gender, finish_time FROM runners order by finish_time ASC ";
		$result = mysqli_query($conn, "SELECT * FROM runners");
		
		$runners = array();

		while ($row = mysqli_fetch_array($result)) {
			array_push($runners, array('fname' => $row['first_name'], 'lname' => $row['last_name'], 'gender' => $row['gender'], 'time' => $row['finish_time']));
		}
		echo json_encode(array("runners" => $runners));
		exit;
	}
}	
	// function db_connection($query) {
	// 	mysqli_connect('127.0.0.1', 'Alex', '1')
	// 		OR die(fail('Could not connect to database.'));
	// 	mysqli_select_db('race_info');

	// 	return mysqli_query($query);
	// }
	
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>