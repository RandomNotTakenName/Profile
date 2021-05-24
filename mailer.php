<?php
$fullName = $_POST['fullName'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$fullName = trim(urldecode(htmlspecialchars($fullName)));
$email = trim(htmlspecialchars($email));
$subject = ($subject, "\n Full name: ", $fullName, "\n E-mail: ", $email); 
$subject = trim(urldecode(htmlspecialchars($subject)));
$subject = wordwrap($subject, 70, "\r\n");
mail("vitekarlashin@i.ua", "Form", $subject;);
if (mail("vitekarlashin@i.ua", "Form", $subject;))
 {     echo "Sent successfully";
} else {
    echo "Oooops, some errors arrived...";
}?>