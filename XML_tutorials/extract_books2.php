 <?php
  include 'books.php';
   
  $xml = new SimpleXMLElement($xmlstr);
   
  /* Access the <success> nodes of the first book.
  * Output the success indications, too. */
  foreach ($xml->book[0]->success as $success) {
     switch((string) $success['type']) { 
         // Get attributes as element indices
     case 'bestseller':
         echo $success, ' months on bestseller list';
         echo "\r\n";
         break;
     case 'bookclubs':
         echo $success, ' bookclub listings';
         echo "\r\n";
         break;
     }
  }
  ?>
