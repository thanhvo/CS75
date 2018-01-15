<?php

/**
 * Renders template.
 *
 * @param array $data
 */
function render($template, $data = array())
{
    $path = __DIR__ . '/../templates/' . $template . '.php';
    if (file_exists($path))
    {
        extract($data);
        require($path);
    }
}

function load($template)
{
	$path = __DIR__ . '/../templates/' . $template . '.php';
    if (file_exists($path))
    {
        require($path);
    }
}

?>
