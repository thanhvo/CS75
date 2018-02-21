<?php
// Defining recursive function
function printValues($arr) {
    global $count;
    global $items;
    
    // Check input is an array
    if(!is_array($arr)){
        die("ERROR: Input is not an array");
    }
    
    /*
    Loop through array, if value is itself an array recursively call the
    function else add the value found to the output items array,
    and increment counter by 1 for each value found
    */
    foreach($arr as $a){
        if(is_array($a)){
            printValues($a);
        } else{
            $items[] = $a;
            $count++;
        }
    }
    
    // Return total count and values found in array
    return array('total' => $count, 'values' => $items);
}
 
// Define nested array
$species = array(
    "birds" => array(
        "Eagle",
        "Parrot",
        "Swan"
    ),
    "mammals" => array(
        "Human",
        "cat" => array(
            "Lion",
            "Tiger",
            "Jaguar"
        ),
        "Elephant",
        "Monkey"
    ),
    "reptiles" => array(
        "snake" => array(
            "Cobra" => array(
                "King Cobra",
                "Egyptian cobra"
            ),
            "Viper",
            "Anaconda"
        ),
        "Crocodile",
        "Dinosaur" => array(
            "T-rex",
            "Alamosaurus"
        )
    )
);
 
// Count and print values in nested array
$result = printValues($species);
echo $result['total'] . ' value(s) found: ';
echo implode(', ', $result['values']);
?>
 
