<?php
// Defining function
function customFont($font, $size=1.5){
    echo "<p style=\"font-family: $font; font-size: {$size}em;\">Hello, world!</p>";
}
 
// Calling function
customFont("Arial", 2);
customFont("Times", 3);
customFont("Courier");
?>
