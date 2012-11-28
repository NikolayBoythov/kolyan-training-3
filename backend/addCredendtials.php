<?php
sleep(5);
if( isset($_POST["first"]) && isset($_POST["second"]) && $_POST["first"] != "" && $_POST["second"] != "" ) {
    echo "Your name: " . $_POST["first"] . " and your password is: " . $_POST["second"];
} else {
   echo "You've missed required fields, please try <a href=\"/ajax/ajax.html\">again</a>";
}

?>