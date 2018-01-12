<?php
 
// Parsing a large document with XMLReader with Expand - DOM/DOMXpath 
$reader = new XMLReader();
 
$reader->open("books.xml");
 
while ($reader->read()) {
    switch ($reader->nodeType) {
        case (XMLREADER::ELEMENT):
        if ($reader->localName == "character") {
            $node = $reader->expand();
            $dom = new DomDocument();
            $n = $dom->importNode($node,true);
            $dom->appendChild($n);
            $xp = new DomXpath($dom);
            $res = $xp->query("name");
            echo $res->item(0)->nodeValue . "\n";            
        }
    }
}
     
?>
