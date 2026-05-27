import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}]\nJméno: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nZpráva: ${message}\n-----------------------------------\n\n`;

    // Cesta k textovému souboru v hlavní složce projektu
    const filePath = path.join(process.cwd(), 'kontakty.txt');
    await fs.appendFile(filePath, logEntry, 'utf8');

    return Response.json({ success: true, message: 'Zpráva byla úspěšně uložena.' }, { status: 200 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return Response.json({ success: false, message: 'Došlo k chybě při ukládání zprávy.' }, { status: 500 });
  }
}
