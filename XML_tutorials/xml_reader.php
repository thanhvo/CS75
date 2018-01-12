<?php
 
$reader = new XMLReader();
$reader->open("books.xml");
while ($reader->read()) {
   switch ($reader->nodeType) {
   case (XMLREADER::ELEMENT):
      if ($reader->localName == "book") {
         while ($reader->read()) {
			if ($reader->nodeType == XMLREADER::ELEMENT) {
				if ($reader->localName == "title") {
					$reader->read();
                    echo $reader->value;
                    break;
				}
                if ($reader->localName == "book") {
                    break;
                }
              }
		}         
      }
   }
}
?>
