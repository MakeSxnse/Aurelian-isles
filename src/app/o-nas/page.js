"use client";

import Image from "next/image";
import Link from "next/link";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

export default function ONasPage() {
  const scrollToPhilosophy = (e) => {
    e.preventDefault();
    const element = document.getElementById("filozofie");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageTransition>
      {/* SECTION 1: Hero Sekce s pozadím západu slunce */}
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#001B3A]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about_hero_sunset.png"
            alt="Příběh Aurelian Isles"
            fill
            className="object-cover opacity-90 brightness-75 scale-102"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A]/60 via-black/20 to-black/40 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 flex flex-col gap-6 items-center">
          <AnimatedSection>
            <p className="text-[11px] font-sans text-[#C5A059] tracking-[0.4em] font-bold uppercase mb-4 drop-shadow-md">
              NAŠE IDENTITA
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-xl mb-8">
              Příběh Aurelian Isles
            </h1>

            {/* Double chevron scrolling button */}
            <a
              href="#filozofie"
              onClick={scrollToPhilosophy}
              className="inline-flex justify-center items-center mt-4 text-white hover:text-[#C5A059] transition-colors focus:outline-none animate-bounce"
              aria-label="Scroll dolů k filozofii"
            >
              <svg className="w-8 h-8 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* SECTION 2: Filozofie (Kurátoři klidu) */}
      <div id="filozofie" className="bg-white py-24 md:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Side: Title */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <span className="text-[10px] font-sans text-[#785A1A] tracking-[0.3em] font-bold uppercase mb-4 block">
                  FILOZOFIE
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#001B3A] leading-tight font-medium">
                  Kurátoři klidu v neklidném světě.
                </h2>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <p className="text-zinc-700 text-base md:text-lg font-serif leading-relaxed italic">
                  Aurelian Isles se nezabývá pouhým prodejem nemovitostí. Jsme architekti izolace a strážci soukromí. Naším posláním je vyhledávat a zpřístupňovat ta nejvýjimečnější útočiště na planetě pro ty, kteří již dosáhli všeho a nyní hledají jediné: absolutní ticho.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                  Ke každému klientovi přistupujeme s absolutní diskrétností. Naše portfolio není veřejné; je to pečlivě sestavená kolekce solitérů, které splňují ty nejvyšší standardy luxusu, bezpečnosti a ekologické integrity. Věříme, že nákup ostrova není pouhou investicí, ale zrozením nového životního prostoru chráněného před hlukem moderní doby.
                </p>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-zinc-50 border-y border-zinc-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">

          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-[#001B3A] mb-4">
              Naše Pilíře
            </h2>
            <div className="w-12 h-[1px] bg-[#785A1A]/40 mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            <AnimatedSection className="bg-white border border-zinc-200/60 p-8 md:p-10 shadow-sm relative group hover:border-[#785A1A]/40 transition-all duration-500 rounded-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#785A1A]/5 rounded-full flex items-center justify-center mb-6 text-[#785A1A] group-hover:bg-[#785A1A] group-hover:text-white transition-colors duration-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#001B3A] mb-4 group-hover:text-[#785A1A] transition-colors border-b border-[#785A1A]/20 pb-2">
                Exkluzivita
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm font-sans leading-relaxed">
                Zastupujeme pouze omezený počet nemovitostí, které procházejí rigorózním procesem selekce. Každý ostrov v naší nabídce musí disponovat naprostou izolací a neopakovatelným geniem loci.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white border border-zinc-200/60 p-8 md:p-10 shadow-sm relative group hover:border-[#785A1A]/40 transition-all duration-500 rounded-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#785A1A]/5 rounded-full flex items-center justify-center mb-6 text-[#785A1A] group-hover:bg-[#785A1A] group-hover:text-white transition-colors duration-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#001B3A] mb-4 group-hover:text-[#785A1A] transition-colors border-b border-[#785A1A]/20 pb-2">
                Integrita
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm font-sans leading-relaxed">
                Naše slovo je zákonem. Všechny transakce probíhají pod nejpřísnějším dohledem a s maximální transparentností. Právní bezchybnost a stoprocentní mlčenlivost jsou pro nás samozřejmostí.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white border border-zinc-200/60 p-8 md:p-10 shadow-sm relative group hover:border-[#785A1A]/40 transition-all duration-500 rounded-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#785A1A]/5 rounded-full flex items-center justify-center mb-6 text-[#785A1A] group-hover:bg-[#785A1A] group-hover:text-white transition-colors duration-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#001B3A] mb-4 group-hover:text-[#785A1A] transition-colors border-b border-[#785A1A]/20 pb-2">
                Udržitelnost
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm font-sans leading-relaxed">
                Respektujeme ekosystémy ostrovů. Podporujeme ekologické stavební technologie, lokální udržitelné systémy pro solární energii a úpravu vody, které minimalizují dopad na divokou přírodu.
              </p>
            </AnimatedSection>

          </div>
        </div>
      </div>

      <div className="relative py-32 md:py-48 bg-[#001B3A] text-white overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <Image
            src="/about_quote_office.png"
            alt="Julian Aurelius"
            fill
            className="object-cover opacity-60 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A] via-transparent to-[#001B3A]/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center gap-6">
          <AnimatedSection>
            <span className="text-6xl md:text-8xl font-serif text-[#C5A059] block mb-2 opacity-80 leading-none">
              ”
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed italic text-white max-w-3xl mx-auto mb-8 drop-shadow-lg">
              "Skutečný luxus dnes nespočívá v tom, co vlastníte, ale v tom, co vás neruší. Naším cílem je vytvořit prostor, kde se čas zastaví."
            </blockquote>

            <div className="space-y-1">
              <span className="block text-xs font-sans font-bold tracking-[0.25em] text-[#C5A059] uppercase">
                JULIAN AURELIUS
              </span>
              <span className="block text-[10px] font-sans tracking-widest text-white/70 uppercase">
                ZAKLADATEL & HLAVNÍ KURÁTOR
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="bg-zinc-50 border border-zinc-100 p-8 md:p-16 relative overflow-hidden group hover:border-[#785A1A]/30 transition-all duration-500">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-serif text-[#001B3A] leading-tight">
                  Váš soukromý ráj začíná zde.
                </h2>
                <p className="text-zinc-500 text-xs md:text-sm font-sans leading-relaxed">
                  Nabízíme plně individuální přístup pro vybranou mezinárodní klientelu. Rezervujte si čas pro svou první nezávaznou, zcela diskrétní konzultaci s našimi specialisty.
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Link
                  href="/kontakt"
                  className="w-full lg:w-auto block text-center px-10 py-5 bg-[#001B3A] text-white text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#785A1A] hover:border-[#785A1A] transition-all duration-300"
                >
                  KONTAKTOVAT KURÁTORA
                </Link>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>

    </PageTransition>
  );
}
