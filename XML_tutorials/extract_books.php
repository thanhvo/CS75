<?php
 
 include 'books.php';
  
 $xml = new SimpleXMLElement($xmlstr);
  
 /* For each <book> node, echo a separate <plot>. */
 foreach ($xml->book as $book) {
   echo $book->plot, '<br />';
 }
  
 ?>
