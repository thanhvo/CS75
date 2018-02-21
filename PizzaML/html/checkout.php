<!DOCTYPE html>
<html>
	<head>
		<title>Checkout</title>	
	</head>
	<body>
		<p>Here is the information of your order</p>
		<?php
			include "cart.php";
			if (isset($_POST["checkout"])) {
				$item = $_POST["checkout"];
				$size = $_POST["size"];
				$quantity = $_POST["quantity"];
				$order = new Order($item, $size, $quantity);
				$order->print();
			}
		?>
	</body>
</html>
