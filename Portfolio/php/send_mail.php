<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "../PHPMailer-master/src/PHPMailer.php";
require "../PHPMailer-master/src/Exception.php";

$mail =  new PHPMailer(true);
$mail -> CharSet = "UTF-8";

$name =  $_POST["name"];
$email =  $_POST["email"];
$telegram =  $_POST["telegram"];
$message =  $_POST["message"];

$body = $name . '' . $email . '' . $telegram . '' . $message;

$theme = "[Заявка с формы]";

$mail -> addAddress('artem.cherednychenko.k@gmail.com');

$mail -> Subject = $theme;
$mail -> Body = $body;

$mail -> send();


