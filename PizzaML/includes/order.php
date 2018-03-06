<?php
	include_once("lib.php");
	class Order {
		public $item;
		public $size;
		public $quantity;
		public $extra_cheese;
		
		public function __construct($item, $size, $extra_cheese, $quantity) {
			$this->item = $item;
			$this->size = $size;
			$this->extra_cheese = $extra_cheese;
			$this->quantity = $quantity;
		}
		
		public function printAsTable() {
			echo "<tr align=\"center\">";
			$itemName = getItemName($this->item);
			echo "<td>$itemName</td>";
			echo "<td>$this->size</td>";
			echo "<td>$this->extra_cheese</td>";
			echo "<td>$this->quantity</td>";
			$charge = $this->cost(); 
			echo "<td>$charge</td>";
			echo "</tr>";		
		}
		
		public function cost() {
				// Parsing XML file of the menu with XMLReader with Expand - DOM/DOMXpath 
				$reader = new XMLReader();
 				$reader->open("../data/menu.xml");
				$sum = 0;
				while ($reader->read()) {
					switch ($reader->nodeType) {
						case (XMLREADER::ELEMENT):
							if ($reader->localName == "item" && 
							$reader->getAttribute("name") == $this->item) {
								$node = $reader->expand();
								foreach ($node->childNodes as $child) {									
									if ($child->hasAttributes() && 
									$child->attributes["size"]->nodeValue == $this->size) {
										$sum += $child->nodeValue * $this->quantity;
									}									
								}								
							}
							if ($reader->localName == "item" && 
							$reader->getAttribute("name") == "extra_cheese") {
								$node = $reader->expand();
								foreach ($node->childNodes as $child) {									
									if ($child->hasAttributes() && 
									$child->attributes["size"]->nodeValue == $this->size) {
										$sum += $child->nodeValue * $this->quantity;
									}									
								}								
							}
							
					}
				}
				return $sum;
		}
	}
?>
