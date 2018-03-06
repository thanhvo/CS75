<?php
$array1 = array(
    "foo" => "bar",
    "bar" => "foo",
);

// as of PHP 5.4
$array2 = [
    "foo" => "bar",
    "bar" => "foo",
];

var_dump($array1);
var_dump($array2);
?>
