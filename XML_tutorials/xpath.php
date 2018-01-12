<?php
 
$doc = new DOMDocument;
 
// We don't want to bother with white spaces
$doc->preserveWhiteSpace = false;
 
$doc->Load('books.xml');
 
$xpath = new DOMXPath($doc);
 
// We start from the root element
//$query = '//book/chapter/para/informaltable/tgroup/tbody/row/entry[. = "en"]';
$query = '//book/characters/character/name';
 
$entries = $xpath->query($query);
 
foreach ($entries as $entry) {
   echo "Found {$entry->nodeValue}"."\n";
}
?>
