<?php

/**
 * Renders template.
 *
 * @param array $data
 */

function load($template)
{
	$path = __DIR__ . '/../html/' . $template . '.php';
	if (file_exists($path))
    {
        require($path);
    }
}

function order($item)
{
	echo $item;
}

?>
