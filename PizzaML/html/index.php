<?php
	require_once('../includes/lib.php');
	include_once('../includes/cart.php');
	if(!isset($_SESSION)) 
    {
		session_start();
	}
?>

<?php

$_SESSION["cart"] = new Cart();

?>


<?php load('header'); ?>
<?php load('body'); ?>
<?php load('footer'); ?>
