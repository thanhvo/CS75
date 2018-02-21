<?php
// Class definition
class Automobile
{
    // Declare  properties
    public $fuel;
    protected $engine;
    private $transmission;
}
class Car extends Automobile
{
    // Constructor
    public function __construct(){
        echo 'The class "' . __CLASS__ . '" was initiated!<br />';
    }
}
 
// Create an object from Automobile class
$automobile = new Automobile;
 
// Attempt to set $automobile object properties
$automobile->fuel = 'Petrol'; // ok
$automobile->engine = '1500 cc'; // fatal error
$automobile->transmission = 'Manual'; // fatal error
 
// Create an object from Car class
$car = new Car;
 
// Attempt to set $car object properties
$car->fuel = 'Diesel'; // ok
$car->engine = '2200 cc'; // fatal error
$car->transmission = 'Automatic'; // undefined
?>
