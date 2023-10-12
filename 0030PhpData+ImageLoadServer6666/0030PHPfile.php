<!DOCTYPE html>
<html lang='ru'>
<head>
<title>Простейший сценарий</title>
<meta charset='utf-8'>
</head>
<body>
<h1>Здравствуйте!</h1>
<p>
<?php
  require 'parse-php-sdk/autoload.php';

use Parse\ParseClient;
use Parse\ParseObject;
use Parse\ParseException;
use Parse\ParseFile;
use Parse\ParseCloud;

  Parse\ParseClient::initialize('ozuldPbgHohaEiLI7mE66hYYlNeRItGU2ii7pvXu', 'emBeNkF8CJp6mZV3BMyYVbGyIjgKPmP1wMvLHWYy', 'sEtwy9Yl2vYqYMz2zUsR8JyUu21rOVFd2eaXJ1Lh');
  Parse\ParseClient::setServerURL('https://parseapi.back4app.com','/');


  $soccerPlayers = new Parse\ParseObject("SoccerPlayers");
  $soccerPlayers->set("playerName", "A. Wed");
  $soccerPlayers->set("yearOfBirth", 2005);
  $soccerPlayers->set("emailContact", "a.wed@email.io");
  $soccerPlayers->setArray("attributes", ["fast", "good conditioning"]);
  
  function sayHello($name)
  {
    //$result = ParseCloud::run("hello");
      return "Привет, {$name}!";//. $result;
  }
  echo sayHello('John');
  try {
    $soccerPlayers->save();
    echo 'New object created with objectId 6666: ' . $soccerPlayers->getObjectId();
    
  } catch (ParseException $ex) {  
    // Execute any logic that should take place if the save fails.
    // error is a ParseException object with an error code and message.
    echo 'Failed to create new object, with error message: ' . $ex->getMessage();
  }
  ?>
  <h1>Здравствуйте!2</h1>
<p>
<?php

  if ( isset( $_FILES['image'] ) ) {
  
  // save file to Parse
  $file = ParseFile::createFromData( file_get_contents( $_FILES['image']['tmp_name'] ), $_FILES['image']['name']  );
  $file->save();
  
  // save something to class TestObject
  $testObject = ParseObject::create( "TestObject" );
  $testObject->set( "foo", "bar" );
  // add the file we saved above
  $testObject->set( "image", $file );
  $testObject->save();
  
  // get the object ID
  echo 'Object Saved with ID: <strong>' . $testObject->getObjectId() . '</strong>.<br/>';
  // get the file URL
  echo 'File URL: <a href="' . $file->getURL() . '" target="_blank">' . $file->getURL() . '</a>';
} else {}
?>


<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="image">
  <input type="submit" value="Upload Image" name="submit">
</form>








</p>
</body></html>
