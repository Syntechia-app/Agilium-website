<?php
// contact.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}
// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Read input
$data = json_decode(file_get_contents("php://input"), true);

// Basic validation
$name    = htmlspecialchars($data["name"]);
$company = htmlspecialchars($data["company"]);
$service = htmlspecialchars($data["service"]);
$message = nl2br(htmlspecialchars($data["message"]));

$body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9f9;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background: #ffffff;
      margin: 0 auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      font-size: 20px;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
    }
    .row {
      margin-bottom: 15px;
    }
    .label {
      font-weight: bold;
      color: #555;
    }
    .value {
      margin-top: 4px;
      color: #222;
    }
    .footer {
      margin-top: 25px;
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>New Contact Form Submission</div>

    <div class='row'>
      <div class='label'>Name:</div>
      <div class='value'>$name</div>
    </div>

    <div class='row'>
      <div class='label'>Company:</div>
      <div class='value'>$company</div>
    </div>

    <div class='row'>
      <div class='label'>Service:</div>
      <div class='value'>$service</div>
    </div>

    <div class='row'>
      <div class='label'>Message:</div>
      <div class='value'>$message</div>
    </div>

    <div class='footer'>
      This email was sent from your website contact form.
    </div>
  </div>
</body>
</html>
";

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address"]);
    exit;
}

// Email settings
$to = "info@agiliumtech.com"; // Change to your email
$subject = "New Contact Form website";
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: no-reply@yourdomain.com\r\n";
$headers .= "Reply-To: $name <$email>\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send message"]);
}