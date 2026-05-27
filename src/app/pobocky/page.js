"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

const branches = [
  {
    id: "monaco",
    city: "Monte Carlo",
    country: "Monako",
    address: "Boulevard Albert Ier, 98000 Monaco",
    phone: "+377 93 12 34 56",
    email: "monaco@aurelianisles.com",
    focus: "Středomořské atoly, evropský jachting & finanční optimalizace",
    description: "Srdce evropského jachtingu a bezkonkurenčního finančního zázemí. Kancelář v Monaku se specializuje na nejexkluzivnější soukromé ostrovy v Evropě a zajišťuje bezproblémové právní a akviziční služby pro náročnou klientelu.",
    coordinates: { x: 52, y: 35 },
  },
  {
    id: "miami",
    city: "Miami Beach",
    country: "USA",
    address: "Ocean Drive 1200, Miami Beach, FL 33139, USA",
    phone: "+1 305 555 0199",
    email: "miami@aurelianisles.com",
    focus: "Karibské ostrovy, moderní rezidence & energetická soběstačnost",
    description: "Vstupní brána do Karibiku a k soukromým rájům na Bahamách. Specializujeme se na ultra-moderní ekologické rezidence, soběstačné ostrovní systémy a kompletní stavební dozor v tropických destinacích.",
    coordinates: { x: 26, y: 44 },
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "SAE",
    address: "The Gateway, Palm Jumeirah, Dubai, UAE",
    phone: "+971 4 456 7890",
    email: "dubai@aurelianisles.com",
    focus: "Blízký východ, Indický oceán & privátní bankovnictví",
    description: "Centrum pro Blízký východ a klíčové asijské trhy. Dubajská pobočka nabízí diskrétní propojení s privátními bankami, luxusními jachtami a zajišťuje komplexní transfery helikoptérou přímo na námi nabízené ostrovy.",
    coordinates: { x: 67, y: 42 },
  },
  {
    id: "maldives",
    city: "Malé",
    country: "Maledivy",
    address: "Marine Drive, Malé, Maldives",
    phone: "+960 333 4567",
    email: "maldives@aurelianisles.com",
    focus: "Tropická správa, korálová ekologie & 24/7 Concierge",
    description: "Naše zastoupení přímo v ráji. Maledivská pobočka se stará o každodenní hladký chod ostrovů, concierge servis, stravování a transfery pro rezidenty, a také o ekologické projekty obnovy korálových útesů.",
    coordinates: { x: 74, y: 55 },
  }
];

export default function PobockyPage() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  const scrollToBranches = (e) => {
    e.preventDefault();
    const element = document.getElementById("seznam-pobocek");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageTransition>
      <div className="pt-[160px] pb-32 bg-white overflow-x-hidden">
        <AnimatedSection className="max-w-4xl mx-auto text-center px-6 mb-16">
          <p className="text-[10px] font-sans text-[#785A1A] tracking-[0.4em] font-bold uppercase mb-6">
            GLOBÁLNÍ PŘÍTOMNOST
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-tight mb-8">
            Pobočky
          </h1>
          <p className="text-zinc-500 text-sm md:text-base font-serif max-w-2xl mx-auto leading-relaxed italic">
            "Naše exkluzivní kanceláře v klíčových světových metropolích slouží jako brány k nejvzácnějším nemovitostem světa. Každá lokace odráží náš závazek k diskrétnosti a luxusu."
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto px-6 mb-12">
          <AnimatedSection className="relative aspect-[21/9] w-full bg-[#001B3A] overflow-hidden shadow-2xl rounded-sm border border-[#001B3A]/30 group">
            <Image
              src="/luxury_world_map_globe.png"
              alt="Globální přítomnost Aurelian Isles"
              fill
              className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-102"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A]/40 via-transparent to-[#001B3A]/20 pointer-events-none" />

            {branches.map((branch) => {
              const isActive = activeBranch.id === branch.id;
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className="absolute group/pin -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 focus:outline-none"
                  style={{ left: `${branch.coordinates.x}%`, top: `${branch.coordinates.y}%` }}
                >
                  <span className={`absolute -inset-3 rounded-full opacity-75 transition-all duration-500 ${isActive
                    ? "bg-[#C5A059]/30 animate-ping"
                    : "bg-[#785A1A]/0 group-hover/pin:bg-[#785A1A]/20 group-hover/pin:animate-pulse"
                    }`} />

                  <span className={`absolute -inset-1.5 rounded-full border transition-all duration-300 ${isActive
                    ? "border-[#C5A059] bg-[#785A1A]/20 scale-110"
                    : "border-white/40 bg-white/5 group-hover/pin:border-[#C5A059]/50 group-hover/pin:bg-[#785A1A]/10"
                    }`} />

                  <span className={`relative block w-2 h-2 rounded-full shadow-lg transition-all duration-300 ${isActive
                    ? "bg-[#C5A059] scale-125"
                    : "bg-white group-hover/pin:bg-[#C5A059]"
                    }`} />

                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#001B3A]/95 text-white text-[9px] font-sans tracking-widest uppercase rounded border border-[#785A1A]/30 shadow-xl pointer-events-none transition-all duration-300 ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 group-hover/pin:opacity-100 group-hover/pin:translate-y-0"
                    }`}>
                    {branch.city}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center justify-between p-4 bg-[#001B3A]/90 backdrop-blur-md border border-[#785A1A]/20 text-white rounded-sm transition-all duration-500 z-30">
              <div className="flex flex-col gap-1 max-w-[70%]">
                <span className="text-[9px] text-[#C5A059] font-sans font-bold tracking-[0.3em] uppercase">
                  AKTIVNÍ LOKACE • {activeBranch.country}
                </span>
                <h3 className="text-xl font-serif text-white">{activeBranch.city}</h3>
                <p className="text-[11px] text-zinc-300 font-sans tracking-wider line-clamp-1">
                  {activeBranch.focus}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById(activeBranch.id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="px-5 py-2.5 bg-transparent border border-white/20 text-white hover:border-[#C5A059] hover:text-[#C5A059] text-[9px] font-bold tracking-widest uppercase transition-colors"
                >
                  DETAILY
                </button>
                <a
                  href="/kontakt"
                  className="px-5 py-2.5 bg-[#785A1A] text-white font-bold hover:bg-[#785A1A]/90 text-[9px] tracking-widest uppercase transition-colors"
                >
                  KONTAKT
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="md:hidden px-6 mb-12">
          <div className="p-6 bg-[#001B3A] border border-[#785A1A]/20 text-white rounded-sm">
            <span className="text-[8px] text-[#C5A059] font-sans font-bold tracking-[0.3em] uppercase block mb-1">
              AKTIVNÍ LOKACE • {activeBranch.country}
            </span>
            <h3 className="text-2xl font-serif mb-2 text-white">{activeBranch.city}</h3>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
              {activeBranch.description}
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById(activeBranch.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="w-full text-center py-3 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase"
              >
                DETAILY KANCELÁŘE
              </button>
              <a
                href="/kontakt"
                className="w-full text-center py-3 bg-[#785A1A] text-white font-bold text-[9px] tracking-widest uppercase"
              >
                KONTAKTUJTE NÁS
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-32">
          <a
            href="#seznam-pobocek"
            onClick={scrollToBranches}
            className="group px-10 py-5 bg-white border border-zinc-200 text-zinc-900 text-[10px] font-sans font-bold tracking-[0.25em] uppercase hover:border-zinc-900 hover:bg-zinc-50 transition-all duration-300 shadow-sm flex items-center gap-3"
          >
            ZOBRAZIT VŠECHNY POBOČKY
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>

        <div id="seznam-pobocek" className="bg-zinc-50 border-y border-zinc-100 py-32">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="max-w-3xl mb-20">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#785A1A] uppercase mb-4 block">
                PRESTIŽNÍ LOKALITY
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 leading-tight">
                Naše rezidenční huby v srdcích globálního bohatství
              </h2>
              <div className="w-12 h-[1px] bg-[#785A1A]/40 mt-6" />
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {branches.map((branch, index) => (
                <AnimatedSection
                  key={branch.id}
                  id={branch.id}
                  className={`bg-white border border-zinc-200/60 p-8 md:p-12 shadow-sm relative group hover:border-[#785A1A]/40 transition-all duration-500 rounded-sm flex flex-col justify-between`}
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#785A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[9px] font-bold tracking-[0.25em] text-[#785A1A] uppercase block mb-1">
                          {branch.country}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                          {branch.city}
                        </h3>
                      </div>
                      <span className="text-xs font-serif font-semibold text-zinc-300 tracking-wider">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-zinc-100 mb-6" />

                    <p className="text-xs font-sans text-[#785A1A] bg-[#785A1A]/5 border border-[#785A1A]/10 px-4 py-2 mb-6 tracking-wide leading-relaxed uppercase font-medium">
                      Key focus: {branch.focus}
                    </p>
                    <p className="text-zinc-500 text-sm font-sans leading-relaxed mb-8">
                      {branch.description}
                    </p>
                  </div>

                  <div className="bg-zinc-50/80 border border-zinc-100 p-6 rounded-sm space-y-4">
                    <div className="flex items-start gap-4">
                      <svg className="w-4 h-4 text-[#785A1A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="text-xs font-sans text-zinc-600">
                        <span className="font-semibold text-zinc-800 block mb-0.5">Adresa</span>
                        {branch.address}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <svg className="w-4 h-4 text-[#785A1A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="text-xs font-sans text-zinc-600">
                        <span className="font-semibold text-zinc-800 block mb-0.5">Concierge linka</span>
                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="hover:text-[#785A1A] transition-colors">
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <svg className="w-4 h-4 text-[#785A1A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="text-xs font-sans text-zinc-600">
                        <span className="font-semibold text-zinc-800 block mb-0.5">E-mail</span>
                        <a href={`mailto:${branch.email}`} className="hover:text-[#785A1A] transition-colors">
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        <div className="py-32 bg-[#001B3A] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#785A1A]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-7 space-y-8">
                <AnimatedSection>
                  <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-[#C5A059] uppercase block mb-4">
                    BEZHRANIČNÍ SLUŽBY
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                    Přijedeme za vámi.<br />
                    Kdekoli na světě.
                  </h2>
                  <div className="w-16 h-[1px] bg-[#C5A059]/40 mt-8" />
                </AnimatedSection>

                <AnimatedSection className="space-y-6 text-zinc-300 text-sm md:text-base font-serif leading-relaxed">
                  <p>
                    Uvědomujeme si, že vaší nejcennější komoditou je čas a absolutní soukromí. Naši elitní akviziční makléři a mezinárodní právní poradci nejsou vázáni pouze na kamenné pobočky.
                  </p>
                  <p>
                    Pro maximální diskrétnost a pohodlí jsme připraveni odletět na osobní setkání přímo za vámi. Ať už se nacházíte na své jachtě v Karibiku, v soukromém rezidenčním sídle v Alpách nebo ve VIP salónku na letišti v Londýně.
                  </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                  {[
                    { step: "01", title: "Briefing & NDA", desc: "Zabezpečený online hovor a podepsání striktní dohody o mlčenlivosti." },
                    { step: "02", title: "Mobilní Tým", desc: "Náš specialista přilétá do vámi vybrané lokace s kompletním portfoliem." },
                    { step: "03", title: "Expedice", desc: "Privátní transfer vrtulníkem či jachtou k exkluzivním prohlídkám ostrovů." }
                  ].map((item, idx) => (
                    <AnimatedSection key={idx} className="border-t border-white/10 pt-4">
                      <span className="text-xs font-serif font-semibold text-[#C5A059] block mb-2">{item.step}</span>
                      <h4 className="text-xs font-sans font-bold tracking-wider text-white uppercase mb-2">{item.title}</h4>
                      <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <AnimatedSection className="bg-[#001B3A]/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#785A1A]/10 blur-2xl pointer-events-none" />

                  <div className="space-y-6 text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl font-serif text-white">
                      Sjednat důvěrné setkání
                    </h3>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      Zanechte nám zprávu a náš ředitel globálních akvizic vás bude do 2 hodin osobně kontaktovat prostřednictvím šifrované komunikace.
                    </p>

                    <div className="w-full h-[1px] bg-white/10 my-6" />

                    <div className="space-y-4">
                      <a
                        href="/kontakt"
                        className="w-full block text-center py-4 bg-[#785A1A] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#785A1A]/90 transition-colors rounded-sm"
                      >
                        VYŽÁDAT KONZULTACI
                      </a>

                      <div className="flex items-center justify-center lg:justify-start gap-3 text-[10px] text-zinc-400 font-sans uppercase tracking-widest pt-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        DISKRÉTNÍ SPOJENÍ AKTIVNÍ
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
