<?php
 
$doc = new DomDocument;
 
// We must validate the document before referring to the id
$doc->validateOnParse = true;
$doc->Load('books_dtd.xml');
 
echo "The element whose id is php-basics is: " . 
$doc->getElementById('php-basics')->tagName . "\n";
 
?>
