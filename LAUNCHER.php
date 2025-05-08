<?php

$htmlFile = 'Regalos.html';
if (file_exists($htmlFile)) {

    include $htmlFile;
} else {

    alert("No cargaron el archivo🫤😒");

}
?>
