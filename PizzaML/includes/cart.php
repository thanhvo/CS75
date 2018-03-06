<?php
	include('order.php');	
	class Cart {
		public $orderList;
		
		public function __construct() {
			$this->orderList = array();
		}
		
		public function addOrder($newOrder) {
			foreach ($this->orderList as &$order) {
				if ($order->item == $newOrder->item && 
					$order->size == $newOrder->size && 
					$order->extra_cheese == $newOrder->extra_cheese) {
					$order->quantity += $newOrder->quantity;
					return;
				}
			}
			array_push($this->orderList, $newOrder);			
		}
		
		public function print() {
			foreach ($this->orderList as $order) {
				$order->printAsTable();
			}
		}
		
		public function cost() {
			$sum = 0;
			foreach ($this->orderList as &$order) {
				$sum += $order->cost();
			}
			return $sum;
		} 	
	}
?>
