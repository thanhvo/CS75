<?php
 $dom = new domDocument;
 $dom->loadXML('<books><book><title>Great American 
Novel</title></book></books>');
 if (!$dom) {
    echo 'Error while parsing the document';
    exit;
 }
  
 $s = simplexml_import_dom($dom);
  
 echo $s->book[0]->title; // Great American Novel
?>
