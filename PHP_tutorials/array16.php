<?php
// This:
$a = array( 'color' => 'red',
            'taste' => 'sweet',
            'shape' => 'round',
            'name'  => 'apple',
            4        // key will be 0
          );

var_dump($a);

$b = array('a', 'b', 'c');

var_dump($b);

// . . .is completely equivalent with this:
$c = array();
$c['color'] = 'red';
$c['taste'] = 'sweet';
$c['shape'] = 'round';
$c['name']  = 'apple';
$c[]        = 4;        // key will be 0
var_dump($c);

$d = array();
$d[] = 'a';
$d[] = 'b';
$d[] = 'c';
var_dump($d);

// After the above code is executed, $a will be the array
// array('color' => 'red', 'taste' => 'sweet', 'shape' => 'round', 
// 'name' => 'apple', 0 => 4), and $b will be the array 
// array(0 => 'a', 1 => 'b', 2 => 'c'), or simply array('a', 'b', 'c').
?>
