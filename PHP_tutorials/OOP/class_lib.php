<?php 
	class person {
		var $name;
		public $height;
		protected $social_insurance;
		private $pin_number;
		function __construct($person_name) {
			$this->name = $person_name;
		}
	    function set_name($new_name) {
			$this->name = $new_name;
		}
		function get_name() {
			return $this->name;
		}	
	}
	class employee extends person {
		function __construct($employee_name) {
			$this->set_name($employee_name);
		}
	}
?>
