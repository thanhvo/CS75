<?php
 
include 'books.php'; 
 
$xml = new SimpleXMLElement($xmlstr); 
 
echo $xml->book[0]->plot; // "Cliff meets Lovely Woman. ..." 
?>
