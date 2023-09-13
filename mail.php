<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require('PHPMailer/Exception.php');
require('PHPMailer/PHPMailer.php');
require('PHPMailer/SMTP.php');
//Create an instance; passing `true` enables exceptions
if(isset($_POST['submit'])){
$firstname= $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$phone= $_POST['phone'];

$mail = new PHPMailer(true);
$mailsender = new PHPMailer(true);
try {
    //Server settings
                        //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ranjeetmadhaviitd@gmail.com';                     //SMTP username
    $mail->Password   = 'iewjcqpjqvwiggrf';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;    
                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


                                    $mailsender->isSMTP();                                            //Send using SMTP
                                    $mailsender->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                                    $mailsender->SMTPAuth   = true;                                   //Enable SMTP authentication
                                    $mailsender->Username   = 'ranjeetmadhaviitd@gmail.com';                     //SMTP username
                                    $mailsender->Password   = 'iewjcqpjqvwiggrf';                               //SMTP password
                                    $mailsender->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                                    $mailsender->Port       = 465;   
    //Recipients
    $mail->setFrom('ranjeetmadhaviitd@gmail.com', 'RM site Hempdesk');
    $mail->addAddress('ranjeetmadhaviitd@gmail.com');     //Add a recipient
    //Recipients
    $mailsender->setFrom('ranjeetmadhaviitd@gmail.com', 'RM site helpdesk');
    $mailsender->addAddress($email);     //Add a recipient

    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Portfolio Query';
    $mail->Body    = "Name: $firstname <br> Email: $email <br> Phone: $phone <br> Message: $message";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mailsender->isHTML(true);                                  //Set email format to HTML
    $mailsender->Subject = 'no reply';
    $mailsender->Body    = "Thanks for visiting our website www.madhav.com, we will come back to you soon.<br> Thanks <br> Ranjeet Madhav";
    $mailsender->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mailsender->send();


    $mail->send();

  
    header("Location:index.html");
} catch (Exception $e) {
    echo "  Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>