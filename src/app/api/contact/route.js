import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Vyplňte prosím všechna povinná pole." },
      { status: 400 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "vasikrolnik@gmail.com",
      subject: `Nový dotaz od ${name}`,
      text: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone || "—"}\nZpráva: ${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { success: false, message: "Nepodařilo se odeslat zprávu." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
