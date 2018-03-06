<?php

/**
 * Renders template.
 *
 * @param array $data
 */

function load($template)
{
	$path = __DIR__ . '/../html/' . $template . '.php';
	if (file_exists($path))
    {
        require($path);
    }
}

function getItemName($item) {
	switch($item) {
		case "tomato_cheese_pizza": return "Tomato and Cheese Pizza";
		case "onion_pizza": return "Onion Pizza";
		case "pepper_pizza": return "Peppers Pizza";
		case "garlic_pizza": return "Fresh Garlic Pizza";
		case "mushrooms_pizza": return "Mushrooms Pizza";
		case "spinach_pizza": return "Fresh Spinach Pizza";
		case "anchovies_pizza": return "Anchovies Pizza"; 
		case "hamburg_pizza": return "Humburg Pizza"; 
		case "pepperoni_pizza": return "Pepperoni Pizza"; 
		case "sausage_pizza": return "Sausage Pizza"; 
		case "meatball_pizza": return "Meatball Pizza"; 
		case "bacon_pizza": return "Bacon Pizza"; 
		case "ham_pizza": return "Ham Pizza"; 
		case "olives_pizza": return "Olives Pizza"; 
		case "grilled_chicken_pizza": return "Grilled Chicken Pizza"; 
		case "hawaiian_pizza": return "Hawaiian Pizza"; 
		case "2way_combo_pizza": return "2 Way Combo Pizza";
		case "3way_combo_pizza": return "3 Way Combo Pizza";  
	}
	return $item;
}


?>
