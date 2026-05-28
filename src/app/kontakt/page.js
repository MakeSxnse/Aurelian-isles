"use client";

import { useState } from "react";
import Image from "next/image";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Odešli data formuláře na PHP skript jako JSON
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // PHP vrátilo chybu – zobraz ji uživateli
        setStatus("error");
        setErrorMessage(result.message || "Odeslání selhalo.");
      }
    } catch {
      // Síťová chyba nebo PHP nedostupné
      setStatus("error");
      setErrorMessage("Nepodařilo se spojit se serverem. Zkuste to prosím znovu.");
    }
  };

  return (
    <PageTransition>
      {/* Hero */}
      <div className="relative min-h-[50vh] flex flex-col justify-center items-center overflow-hidden bg-[#001B3A]">
        <div className="absolute inset-0">
          <Image
            src="/about_quote_office.png"
            alt="Kontakt"
            fill
            className="object-cover opacity-50 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A] via-[#001B3A]/60 to-[#001B3A]/20 pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-20">
          <AnimatedSection>
            <p className="text-[10px] md:text-xs font-sans text-[#C5A059] tracking-[0.4em] font-bold uppercase mb-4 drop-shadow-md">
              DISKRÉTNÍ PŘÍSTUP
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
              Spojte se s námi
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <AnimatedSection className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-serif text-[#001B3A] mb-6">Osobní setkání</h2>
              <p className="text-sm font-sans text-zinc-600 leading-relaxed mb-8">
                Vaše soukromí je naší prioritou. Rádi se s vámi setkáme v našich diskrétních salonech po celém světě, nebo za vámi přijedeme s naším týmem.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-[#001B3A] rounded flex items-center justify-center text-white shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-1">E-mail</h4>
                  <p className="text-sm font-sans text-zinc-800">info@soukromeostrovy.cz</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-[#001B3A] rounded flex items-center justify-center text-white shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-1">Telefon</h4>
                  <p className="text-sm font-sans text-zinc-800">+420 123 456 789</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-zinc-200 pt-8">
              <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#001B3A] uppercase mb-4">Naše kanceláře</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-[#785A1A] uppercase tracking-wider mb-1">Praha</p>
                  <p className="text-xs text-zinc-500">Pařížská 22</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#785A1A] uppercase tracking-wider mb-1">Dubaj</p>
                  <p className="text-xs text-zinc-500">DIFC, Gate Village</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 shadow-sm">
            {status === "success" ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-[#001B3A]">Zpráva odeslána</h3>
                <p className="text-sm text-zinc-500 max-w-sm">
                  Děkujeme za váš zájem. Naši specialisté se vám ozvou v co nejkratší době.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-8 py-3 text-[10px] bg-[#001B3A] text-white uppercase tracking-widest font-bold"
                >
                  POSLAT DALŠÍ ZPRÁVU
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-[#001B3A] uppercase tracking-wider mb-2">Celé Jméno</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white text-zinc-900 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder="Např. Jan Novák"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-[#001B3A] uppercase tracking-wider mb-2">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white text-zinc-900 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                      placeholder="váš@email.cz"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#001B3A] uppercase tracking-wider mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white text-zinc-900 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                      placeholder="+420"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#001B3A] uppercase tracking-wider mb-2">Vaše Zpráva</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white text-zinc-900 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    placeholder="Jak vám můžeme pomoci?"
                  />
                </div>
                
                {status === "error" && (
                  <p className="text-red-500 text-xs mt-2">{errorMessage || "Došlo k chybě při odesílání, zkuste to prosím znovu."}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full mt-4 py-4 bg-[#C5A059] text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#A38244] transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "ODESÍLÁNÍ..." : "ODESLAT ZPRÁVU"}
                </button>
                <p className="text-center text-[10px] text-zinc-400 mt-2">Vaše data jsou zpracovávána s maximální diskrétností.</p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
