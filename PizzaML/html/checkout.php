<?php
	include_once('../includes/cart.php');
	if(!isset($_SESSION)) 
    { 
		session_start();
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Checkout</title>	
	</head>
	<body>
		<p>Here is the information of your order</p>		
		<?php			
			global $cart;
			echo "<table>";
			echo "<tr>";
			echo "<th>Item</th>";
			echo "<th>Size</th>";
			echo "<th>Extra Cheese</th>";
			echo "<th>Quantity</th>";
			echo "<th>Charge</th>";
			echo "</tr>";
			if (isset($_POST["checkout"]) && $_POST["checkout"] != "checkout") {
				$item = $_POST["checkout"];
				$size = $_POST["size"];
				$extra_cheese = $_POST["extra_cheese"];
				$quantity = $_POST["quantity"];
				$order = new Order($item, $size, $extra_cheese, $quantity);
				$_SESSION["cart"]->addOrder($order); 
			}
			$_SESSION["cart"]->print();				
			echo "<tr>";
			echo "<td align=\"left\" colspan=4>Total charge is: </td>";
			echo "<td align=\"center\">";
			echo $_SESSION["cart"]->cost();
			echo "</td>";
			echo "</tr>";
			echo "</table>";
			echo "<form action=\"index.php\" method=\"POST\">";
			echo "<button align=\"center\" type=\"submit\" name=\"index\" value=\"index\">Go back</button>";
			echo "</form>";
		?>
	</body>
</html>
