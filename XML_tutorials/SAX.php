<?php
 
//This class contains all the callback methods that will actually
//handle the XML data.
class SaxClass {
   private $hit = false;
   private $titleHit = false;
 
   //callback for the start of each element
   function startElement($parser_object, $elementname, $attribute) {
      if ($elementname == "entry") {
         if ( $attribute['ID'] == 5225) {
            $this->hit = true;
         } else {
            $this->hit = false;
         }
      }
      if ($this->hit && $elementname == "title") {
         $this->titleHit = true;
      } else {
         $this->titleHit =false;
      }
   }
 
   //callback for the end of each element
   function endElement($parser_object, $elementname) {
   }
 
   //callback for the content within an element
   function contentHandler($parser_object,$data)
   {
      if ($this->titleHit) {
         echo trim($data)."<br />";
      }
   }
}
 
//Function to start the parsing once all values are set and
//the file has been opened
function doParse($parser_object) {
   if (!($fp = fopen("toobig.xml", "r")));
 
   //loop through data
   while ($data = fread($fp, 4096)) {
      //parse the fragment
      xml_parse($parser_object, $data, feof($fp));
   }
}
 
$SaxObject = new SaxClass();
$parser_object = xml_parser_create();
xml_set_object ($parser_object, $SaxObject);
 
//Don't alter the case of the data
xml_parser_set_option($parser_object, XML_OPTION_CASE_FOLDING, false);
 
xml_set_element_handler($parser_object,"startElement","endElement");
xml_set_character_data_handler($parser_object, "contentHandler");
 
doParse($parser_object);
 
?>
