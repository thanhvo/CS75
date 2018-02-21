<?php include("class_lib.php"); ?>

<?php 
	$stefan = new person("Stefan Mischook");
	$jimmy = new person("Jimmy Carter");

	echo "Stefan's full name: " .$stefan->get_name();
	echo "<br>";
	echo "Nick's full name: " .$jimmy->get_name();
	$james = new employee("Johnny Fingers");
	echo "<br>";
	echo "--->" .$james->get_name();
?>
