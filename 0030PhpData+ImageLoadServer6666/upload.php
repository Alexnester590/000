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
//6666 TestObject
  Parse\ParseClient::initialize('ozuldPbgHohaEiLI7mE66hYYlNeRItGU2ii7pvXu', 'emBeNkF8CJp6mZV3BMyYVbGyIjgKPmP1wMvLHWYy', 'sEtwy9Yl2vYqYMz2zUsR8JyUu21rOVFd2eaXJ1Lh');
  Parse\ParseClient::setServerURL('https://parseapi.back4app.com','/');


  if ( isset( $_FILES['image'] ) ) {
  
  // save file to Parse
  $file = ParseFile::createFromData( file_get_contents( $_FILES['image']['tmp_name'] ), $_FILES['image']['name']  );
  $file->save();
  //$result = ParseCloud::run("hello");
  // save something to class TestObject
  $testObject = ParseObject::create( "TestObject" );
  $testObject->set( "foo", "bar" );
  // add the file we saved above
  $testObject->set( "image", $file );
  $testObject->save();
  
  // get the object ID
  echo 'Object Saved with ID: <strong>' . $testObject->getObjectId() . '</strong>.<br/>';
  // get the file URL
  echo 'File URL: <a href="' . $file->getURL() . '" target="_blank">' . $file->getURL() . '</a><br/>';
  echo 'File URL: <img src="' . $file->getURL() . '">';
} else {}
?>