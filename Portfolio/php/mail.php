<?php

//$.POST = json_decode(file_get_contents(“php://input"), true)

$name = $_POST["user_name"];
$email = $_POST["user_email"];
$telegram = $_POST["user_telegram"];
$message = $_POST["user_message "];
//
$to = "artem.cherednychenko.@gmail.com";
$subject = "Portfolio email";
$message = " name : $name, email : $email, telegram : $telegram, message : $message ";

$success = mail($to, $subject, $message);

if(!$success){

    echo "error";
}else{

    echo "send!";
}