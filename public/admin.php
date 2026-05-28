<?php
// Jednoduchá administrace pro čtení zpráv
$file = 'kontakty.txt';
$content = file_exists($file) ? file_get_contents($file) : 'Zatím žádné zprávy. Až někdo vyplní formulář, objeví se to tady.';
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Administrace Zpráv - Soukromé Ostrovy</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f4f5; padding: 40px; color: #18181b; }
        .container { max-width: 900px; margin: auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        h1 { color: #001B3A; margin-top: 0; }
        pre { background: #f8fafc; padding: 20px; border-left: 4px solid #C5A059; white-space: pre-wrap; font-family: monospace; font-size: 14px; color: #334155; border-radius: 0 8px 8px 0; }
        .footer { margin-top: 40px; font-size: 12px; color: #94a3b8; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📨 Přijaté zprávy z webu</h1>
        <p style="color: #64748b; margin-bottom: 30px;">Zde vidíte hrubý výpis všech zpráv odeslaných přes váš kontaktní formulář.</p>
        <pre><?= htmlspecialchars($content) ?></pre>
        
        <div class="footer">
            Systém pro správu kontaktů • Soukromé Ostrovy
        </div>
    </div>
</body>
</html>
