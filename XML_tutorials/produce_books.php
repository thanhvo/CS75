<?php
 
 //Creates XML string and XML document using the DOM 
 $dom = new DomDocument('1.0'); 
 
 //add root - <books> 
 $books = $dom->appendChild($dom->createElement('books')); 
 
 //add <book> element to <books> 
 $book = $books->appendChild($dom->createElement('book')); 
 
 //add <title> element to <book> 
 $title = $book->appendChild($dom->createElement('title')); 
 
 //add <title> text node element to <title> 
 $title->appendChild( 
                 $dom->createTextNode('Great American Novel')); 
 
 //generate xml 
 $dom->formatOutput = true; // set the formatOutput attribute of 
                            // domDocument to true 
 // save XML as string or file 
 $test1 = $dom->saveXML(); // put string in test1 
 $dom->save('test1.xml'); // save as file 
 
?>
