<?php
// Include class definition
require "Rectangle.php";
 
// Create a new object from Rectangle class
$obj = new Rectangle;
 
// Get the object properties values
echo $obj->length; // 0utput: 0
echo "\r\n";
echo $obj->width; // 0utput: 0
echo "\r\n";
 
// Set object properties values
$obj->length = 30;
$obj->width = 20;
 
// Read the object properties values again to show the change
echo $obj->length; // 0utput: 30
echo "\r\n";
echo $obj->width; // 0utput: 20
echo "\r\n";
 
 
// Call the object methods
echo $obj->getPerimeter(); // 0utput: 100
echo "\r\n";
echo $obj->getArea(); // Output: 600
echo "\r\n";
?>
