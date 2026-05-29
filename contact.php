<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: https://aurelianservices.vercel.app");

// Přijmi pouze POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Nepovolená metoda."]);
    exit();
}

// Načti a ověř data z formuláře
$data    = json_decode(file_get_contents("php://input"), true);
$name    = trim($data["name"]    ?? "");
$email   = trim($data["email"]   ?? "");
$phone   = trim($data["phone"]   ?? "");
$message = trim($data["message"] ?? "");

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Neplatná data."]);
    exit();
}

// Pošli e-mail přes Resend API
$payload = json_encode([
    "from"    => "onboarding@resend.dev",
    "to"      => "info@soukromeostrovy.cz",
    "subject" => "Nová poptávka od $name",
    "text"    => "Jméno: $name\nE-mail: $email\nTelefon: " . ($phone ?: "—") . "\nZpráva: $message",
]);

$ch = curl_init("https://api.resend.com/emails");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . getenv("RESEND_API_KEY"),
    "Content-Type: application/json",
]);

$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Vrať výsledek
if ($status === 200) {
    echo json_encode(["success" => true, "message" => "Zpráva odeslána."]);
} else {
    echo json_encode(["success" => false, "message" => "Odeslání selhalo."]);
}
?>