<?php
if( isset($_POST["first-summand"]) && isset($_POST["second-summand"]) && $_POST["first-summand"] != "" && $_POST["second-summand"] != "" ) {
    echo "Summ is " . ($_POST["first-summand"] + $_POST["second-summand"]);
} else {
   echo "You've missed required fields, please try <a href=\"/ajax/ajax.html\">again</a>";
}
?>