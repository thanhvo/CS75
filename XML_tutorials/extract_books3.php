<?php
 
  include 'books.php'; 
  $xml = new SimpleXMLElement($xmlstr); 
 
  $xml->book[0]->characters->character[0]->name = 'Big Cliff'; 
 
  echo $xml->asXML(); 
  ?>
