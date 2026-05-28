<?php
// Extrémně jednoduchý skript pro uložení kontaktního formuláře

// 1. Nastavíme hlavičku, aby prohlížeč věděl, že vracíme JSON
header('Content-Type: application/json');

// 2. Přijmeme data z Next.js formuláře (ten je posílá jako JSON)
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Nebyly přijaty žádné údaje.']);
    exit;
}

// 3. Ošetříme vstupy proti záškodnickým skriptům (XSS)
$name = htmlspecialchars($input['name'] ?? 'Neznámé');
$email = htmlspecialchars($input['email'] ?? 'Neznámý');
$phone = htmlspecialchars($input['phone'] ?? 'Neznámý');
$message = htmlspecialchars($input['message'] ?? 'Neznámá');

// 4. Připravíme textový zápis
$date = date('Y-m-d H:i:s');
$entry = "[$date]\nJméno: $name\nE-mail: $email\nTelefon: $phone\nZpráva: $message\n-----------------------------------\n\n";

// 5. Zapíšeme zprávu nakonec souboru kontakty.txt (pokud neexistuje, vytvoří se)
file_put_contents('kontakty.txt', $entry, FILE_APPEND | LOCK_EX);

// 6. Odpovíme frontend formuláři, že je to úspěšně uloženo
echo json_encode(['success' => true, 'message' => 'Zpráva uložena.']);
