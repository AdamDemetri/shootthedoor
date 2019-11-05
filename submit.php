<?php
$secret_key = '6Lc9YYkUAAAAAKJZNTrZzalOL3W8iWXm-fb_kh88'; // Your Google reCaptcha secret key

if(!empty($_POST['g-recaptcha-response']))
{
 // Request the Google server to validate our captcha
 $request = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key.'&response='.$_POST['g-recaptcha-response']);
 // The result is in a JSON format. Decoding..
 $response = json_decode($request);

 if($response->success)
 {
  // Here goes your code.
  $to = "shootthedoorstudio@gmail.com";
  $subject = "Správa z webu STD";
  $message = "Meno: " . $_POST['firstName'] . "\n\n Email: " . $_POST['email'] . "\n\nDátum a miesto: " . $_POST['dateAndPlace'] . "\n\nMáte už fotografa?: " . $_POST['fotograf'] . "\n\nVaša predstava:  " . $_POST['idea'];
  if (@mail($to, $subject, $message)) {
     // echo 'Congratulations! It has been sent';
    header('Location: index.html');
    exit;
  } else {
    echo 'There was a problem!';
  }

 //  // // end
 //  echo 'Congratulations! You have passed the reCaptcha!';
 // }
 // else
 // {
 //  echo 'Please, try again. You must complete the Captcha!';
 // }
}
}

?>
