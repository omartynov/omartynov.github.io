<?php 

$dir = "./"; //default to root directory
if (strlen($_GET['images']) > 0){$dir = $_GET['images'];}
getList($dir);

function getList($name) {
    $path = addslashes(realpath($name));
    $objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS), RecursiveIteratorIterator::CATCH_GET_CHILD);
    foreach($objects as $name => $object){
        if (filetype($name) == "dir") {
            print "<br/><a href='javascript:void' onClick='do_it(\"" . $path . "/" . basename($name) . "\")'><b>" . basename($name) . "</b></a>";
        } else {
            print "<br/><a><b>" . basename($name) . "</b></a>";
        }
    }
}

?>