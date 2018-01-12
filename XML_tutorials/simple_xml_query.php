<?php
$xmlstr = <<<XML
<?xml version='1.0' standalone='yes'?>
<books>
   <book>
      <title>Great American Novel</title>
      <plot>
         Cliff meets Lovely Woman. Loyal Dog sleeps, but
         wakes up to bark at mailman.
      </plot>
      <success type="bestseller">4</success>
      <success type="bookclubs">9</success>
   </book>
</books>
XML;
?>
<?php
 
$xml = new SimpleXMLElement($xmlstr);
echo $xml->book[0]->plot; // "Cliff meets Lovely Woman. ..."

?>
