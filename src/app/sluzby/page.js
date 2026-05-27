"use client";

import Image from "next/image";
import Link from "next/link";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

export default function SluzbyPage() {
  const scrollToPillars = (e) => {
    e.preventDefault();
    const element = document.getElementById("pilire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageTransition>
      {/* SECTION 1: Hero Sekce */}
      <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#001B3A]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about_hero_sunset.png"
            alt="Exkluzivní Portfolio Služeb"
            fill
            className="object-cover opacity-80 brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A]/80 via-[#001B3A]/30 to-[#001B3A]/50 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col gap-6 items-center mt-10">
          <AnimatedSection>
            <p className="text-[10px] md:text-xs font-sans text-[#C5A059] tracking-[0.4em] font-bold uppercase mb-6 drop-shadow-md">
              SLUŽBY BEZ KOMPROMISŮ
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-xl mb-6">
              Exkluzivní Portfolio Služeb
            </h1>
            <p className="text-sm md:text-base font-sans text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Vstupte do světa, kde jsou vaše přání splněna dříve, než je vyslovíte. Nabízíme kompletní řešení pro správu vašeho majetku a životního stylu.
            </p>

            <a
              href="#pilire"
              onClick={scrollToPillars}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-white text-xs font-bold font-sans tracking-[0.2em] uppercase hover:bg-[#A38244] transition-colors duration-300"
            >
              PROZKOUMAT SLUŽBY
            </a>

            <a
              href="#pilire"
              onClick={scrollToPillars}
              className="flex justify-center items-center mt-16 text-white hover:text-[#C5A059] transition-colors focus:outline-none animate-bounce mx-auto w-fit"
              aria-label="Scroll dolů"
            >
              <svg className="w-6 h-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>

      <div id="pilire" className="bg-white py-24 md:py-32 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-serif text-[#001B3A] mb-6">
              Naše Pilíře Dokonalosti
            </h2>
            <div className="w-16 border-t-2 border-[#785A1A]/40 mx-auto border-dashed" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            <AnimatedSection className="flex flex-col h-full bg-white border border-zinc-200/60 shadow-sm group hover:border-[#785A1A]/30 transition-all duration-500 overflow-hidden">
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image src="/venek1.jpg" alt="Správa Rezidencí" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full flex justify-between items-start -mt-6 px-8">
                  <div className="w-12 h-12 bg-white border border-zinc-200 shadow-sm flex items-center justify-center rounded-full">
                    <Image src="/property.svg" alt="Rezidence" width={24} height={24} />
                  </div>
                  <span className="bg-white border border-[#785A1A]/20 px-3 py-1 text-[9px] font-bold tracking-widest text-[#785A1A] uppercase">
                    REZIDENCE
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-[#001B3A] mt-6 mb-4">
                  SPRÁVA REZIDENCÍ
                </h3>
                <p className="text-sm font-sans text-zinc-600 leading-relaxed mb-8 flex-grow">
                  Zajistíme, aby byl váš majetek v dokonalém stavu bez vašeho přičinění. Od kompletní údržby, správy personálu, až po zajištění plné připravenosti na váš příjezd.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col h-full bg-[#001B3A] border border-transparent shadow-sm group overflow-hidden">
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image src="/interier3.jpg" alt="Letecké Priority" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full flex justify-between items-start -mt-6 px-8">
                  <div className="w-12 h-12 bg-[#001B3A] border border-[#C5A059]/30 shadow-sm flex items-center justify-center rounded-full">
                    <div className="invert sepia saturate-200 hue-rotate-5 brightness-110 opacity-90">
                      <Image src="/flight.svg" alt="Lety" width={24} height={24} />
                    </div>
                  </div>
                  <span className="bg-[#001B3A] border border-[#C5A059]/40 px-3 py-1 text-[9px] font-bold tracking-widest text-[#C5A059] uppercase">
                    PRIVÁTNÍ LETY
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-white mt-6 mb-4">
                  LETECKÉ PRIORITY
                </h3>
                <p className="text-sm font-sans text-zinc-300 leading-relaxed mb-8 flex-grow">
                  Exkluzivní charterové lety, helikoptéry, VIP transfery přímo z letiště k vašemu ostrovu. Rychlost, bezpečnost a absolutní pohodlí na každém kroku.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col h-full bg-[#F5F4EE] border border-zinc-200/50 shadow-sm group hover:border-[#785A1A]/30 transition-all duration-500 overflow-hidden">
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image src="/engine.jpg" alt="Globální Logistika" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full flex justify-between items-start -mt-6 px-8">
                  <div className="w-12 h-12 bg-[#F5F4EE] border border-zinc-300 shadow-sm flex items-center justify-center rounded-full">
                    <Image src="/globe.svg" alt="Logistika" width={24} height={24} />
                  </div>
                  <span className="bg-[#F5F4EE] border border-[#785A1A]/20 px-3 py-1 text-[9px] font-bold tracking-widest text-[#785A1A] uppercase">
                    TRANSPORT
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-[#001B3A] mt-6 mb-4">
                  GLOBÁLNÍ LOGISTIKA
                </h3>
                <p className="text-sm font-sans text-zinc-600 leading-relaxed mb-8 flex-grow">
                  Bezpečný transport uměleckých děl, cenností i osobních věcí na váš ostrov odkudkoliv na světě. Zajišťujeme veškeré celní náležitosti a diskrétní doručení.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col h-full bg-white border border-zinc-200/60 shadow-sm group hover:border-[#785A1A]/30 transition-all duration-500 overflow-hidden">
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image src="/about_quote_office.png" alt="Lifestyle Concierge" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full flex justify-between items-start -mt-6 px-8">
                  <div className="w-12 h-12 bg-white border border-zinc-200 shadow-sm flex items-center justify-center rounded-full">
                    <Image src="/concierge.svg" alt="Concierge" width={24} height={24} />
                  </div>
                  <span className="bg-white border border-[#785A1A]/20 px-3 py-1 text-[9px] font-bold tracking-widest text-[#785A1A] uppercase">
                    24/7 SLUŽBY
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-[#001B3A] mt-6 mb-4">
                  LIFESTYLE CONCIERGE
                </h3>
                <p className="text-sm font-sans text-zinc-600 leading-relaxed mb-8 flex-grow">
                  Přístup k nemožnému. Od rezervací v michelinských restauracích po exkluzivní zážitky. Váš osobní asistent je k dispozici 24/7.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>

      <div className="bg-zinc-50 border-y border-zinc-200/60 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="flex flex-col gap-10">
              <AnimatedSection>
                <p className="text-[10px] font-sans text-[#785A1A] tracking-[0.3em] font-bold uppercase mb-4">
                  DŮVĚRA & DISKRÉTNOST
                </p>
                <h2 className="text-3xl md:text-5xl font-serif text-[#001B3A] leading-tight">
                  Vaše soukromí je naším závazkem
                </h2>
              </AnimatedSection>

              <AnimatedSection className="flex flex-col gap-10 mt-4">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 bg-[#001B3A] rounded flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold tracking-[0.1em] text-[#001B3A] uppercase mb-2">MAXIMÁLNÍ BEZPEČNOST</h4>
                    <p className="text-sm font-sans text-zinc-600 leading-relaxed">
                      Poskytujeme nejvyšší možný stupeň fyzické a kybernetické bezpečnosti pro váš klidný spánek na vašem ostrově.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 bg-[#C5A059]/20 rounded flex items-center justify-center text-[#785A1A]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold tracking-[0.1em] text-[#001B3A] uppercase mb-2">INDIVIDUÁLNÍ PÉČE</h4>
                    <p className="text-sm font-sans text-zinc-600 leading-relaxed">
                      Každý požadavek řešíme s ohledem na jedinečnost vaší situace a potřeby vaší rodiny napříč generacemi.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="w-full relative aspect-[4/3] lg:aspect-square overflow-hidden shadow-lg border border-zinc-200/50">
              <Image
                src="/interier3.jpg"
                alt="Soukromí a bezpečí"
                fill
                className="object-cover"
              />
            </AnimatedSection>

          </div>
        </div>
      </div>

      <div className="relative py-32 md:py-48 bg-[#001B3A] overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <Image
            src="/about_quote_office.png"
            alt="Přejete si individuální řešení?"
            fill
            className="object-cover opacity-30 brightness-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A] via-[#001B3A]/80 to-[#001B3A]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 flex flex-col items-center gap-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
              Přejete si individuální řešení?
            </h2>
            <p className="text-sm md:text-base font-sans text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Každý klient je unikátní. Spojte se s naším konzultantem a vytvořte si portfolio služeb přesně podle vašich nároků.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto px-10 py-4 bg-[#C5A059] text-white hover:bg-[#A38244] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
              >
                DOMLUVIT SCHŮZKU
              </Link>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/50 text-white hover:bg-white hover:text-[#001B3A] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
              >
                STÁHNOUT PORTFOLIO SLUŽEB
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

    </PageTransition>
  );
}
