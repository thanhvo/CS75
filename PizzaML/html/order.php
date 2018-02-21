<!DOCTYPE html>
<html>
Please place your order.<br>

<?php
	if (isset($_POST["order"])) {
		$item = $_POST["order"];
		echo "<img src=\"images/$item.jpeg\"></img>";
		echo "<form action=\"checkout.php\" method=\"post\">";
		echo "<table>";
		echo "<tr>";
		echo "<td>Size: </td>";
		echo "<td>";
		$size_select = "<select name=\"size\">";
		$size_select .= "<option value=\"small\">Small</option>";
		$size_select .= "<option value=\"large\">Large</option>";
		$size_select .= "</select>";
		echo $size_select;
		echo "</td>";
		echo "<td>Quantity:</td>";
		echo "<td>";
		echo "<input type=\"number\" name=\"quantity\" min=\"1\" max=\"10\">";
		echo "</td>";
		echo "</tr>";
		echo "<tr>";
		echo "<td colspan=\"4\" align=\"center\"><button name=\"checkout\" type=\"submit\" value=$item>Checkout</button></td>";
		echo "</tr>";
		echo "</table>";
		echo "</form>";						
	}
?> 


</html>
