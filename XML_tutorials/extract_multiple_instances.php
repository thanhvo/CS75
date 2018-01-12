<?php
$xmlstr = <<<XML
<?xml version='1.0' standalone='yes'?>
<books>
   <book>
      <title>Great American Novel</title>
      <plot>
         Cliff meets Lovely Woman.
      </plot>
      <success type="bestseller">4</success>
      <success type="bookclubs">9</success>
   </book>
   <book>
      <title>Man Bites Dog</title>
      <plot>
         Reporter invents a prize-winning story.
      </plot>
      <success type="bestseller">22</success>
      <success type="bookclubs">3</success>
   </book>
</books>
XML;
?>
<?php
 
$xml = new SimpleXMLElement($xmlstr);
 
foreach ($xml->book as $book) {
   echo $book->plot, '<br />';
}
?>
