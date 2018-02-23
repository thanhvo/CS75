<?php
	class Order {
		public $item;
		public $size;
		public $quantity;
		
		public function __construct($item, $size, $quantity) {
			$this->item = $item;
			$this->size = $size;
			$this->quantity = $quantity;
		}
		
		public function print() {
			echo $this->item . "\t" . $this->size . "\t" . $this->quantity; 
			echo "<br>";
			echo "The total cost is: " . $this->cost();
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
					}
				}
				return $sum;
		}
	}
?>
