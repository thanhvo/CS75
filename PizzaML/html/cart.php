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
		}
	}
?>
