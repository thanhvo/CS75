<?php
 
// Parsing a large document with Expand and SimpleXML
$reader = new XMLReader();
 
$reader->open("books.xml");
 
while ($reader->read()) {
    switch ($reader->nodeType) {
        case (XMLREADER::ELEMENT):
        if ($reader->localName == "title") {
            $node = $reader->expand();
            $dom = new DomDocument();
            $n = $dom->importNode($node,true);
            $dom->appendChild($n);
            $sxe = simplexml_import_dom($n);
            //echo $sxe->title;
            echo $sxe;             
        }
    }
}
     
?>
