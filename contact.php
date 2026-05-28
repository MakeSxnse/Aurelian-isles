<?php
// Nastav kódování odpovědi na UTF-8 a formát JSON
header("Content-Type: application/json; charset=utf-8");

// Povol přístup z tvé domény (CORS) – uprav na svou skutečnou doménu
header("Access-Control-Allow-Origin: https://www.soukromeostrovy.cz");
header("Access-Control-Allow-Methods: POST");

// Přijmi pouze POST požadavky, vše ostatní odmítni
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Nepovolená metoda."]);
    exit();
}

// Načti JSON data odeslaná z formuláře
$data = json_decode(file_get_contents("php://input"), true);

// Vyber jednotlivá pole a odstraň mezery na začátku/konci
$name    = trim($data["name"]    ?? "");
$email   = trim($data["email"]   ?? "");
$phone   = trim($data["phone"]   ?? "");
$message = trim($data["message"] ?? "");

// Zkontroluj, zda jsou vyplněna povinná pole
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Vyplňte jméno, e-mail a zprávu."]);
    exit();
}

// Ověř platnost e-mailové adresy
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Zadejte platný e-mail."]);
    exit();
}

// Sestav tělo e-mailu
$body = "Jméno: $name\n";
$body .= "E-mail: $email\n";
$body .= "Telefon: " . ($phone ?: "—") . "\n\n";
$body .= "Zpráva:\n$message\n";

// Nastav hlavičky e-mailu – Reply-To zajistí, že odpověď půjde přímo klientovi
$headers  = "From: web@soukromeostrovy.cz\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Odešli e-mail a vrať výsledek
$sent = mail("info@soukromeostrovy.cz", "Nová poptávka – Aurelian Isles", $body, $headers);

echo json_encode([
    "success" => $sent,
    "message" => $sent
        ? "Zpráva odeslána. Ozveme se vám co nejdříve."
        : "Odeslání selhalo. Zkuste to prosím znovu."
]);
?>
