<?php
  include 'books.php'; 
  $xml = new SimpleXMLElement($xmlstr); 
 
  $character = $xml->book[0]->characters->addChild('character'); 
  $character->addChild('name', 'Yellow Cat'); 
  $character->addChild('desc', 'aloof'); 
 
  $success = $xml->book[0]->addChild('success', '2'); 
  $success->addAttribute('type', 'reprints'); 
 
  echo $xml->asXML(); 
  ?>
