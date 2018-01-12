<?php
    
include 'books.php';
 
$xml = new SimpleXMLElement($xmlstr);
 
if ((string) $xml->book->title == 'Great American Novel') {
   print 'My favorite book: ';
}
 
echo htmlentities((string) $xml->book->title);
?>
