import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import Link from "next/link";

export const metadata = {
  title: "Podmínky užití | AURELIAN ISLES",
  description:
    "Přečtěte si podmínky užití webových stránek a služeb Aurelian Isles.",
};

const Section = ({ title, children }) => (
  <AnimatedSection className="border-b border-zinc-100 pb-12 mb-12 last:border-0 last:mb-0 last:pb-0">
    <h2 className="text-xl md:text-2xl font-serif text-[#001B3A] mb-6 leading-snug">
      {title}
    </h2>
    <div className="space-y-4 text-sm font-sans text-zinc-600 leading-relaxed">
      {children}
    </div>
  </AnimatedSection>
);

export default function TermsPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <div className="bg-[#001B3A] py-36 md:py-48 flex flex-col items-center justify-center text-center px-6">
        <AnimatedSection className="flex flex-col items-center gap-4">
          <p className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-[#C5A059]">
            PRÁVNÍ DOKUMENTY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Podmínky užití
          </h1>
          <div className="w-10 h-[1px] bg-[#785A1A] mt-2" />
          <p className="text-white/50 font-sans text-xs tracking-widest uppercase mt-2">
            Platné od 1. ledna 2025
          </p>
        </AnimatedSection>
      </div>

      {/* Content */}
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-zinc-500 font-serif italic text-base md:text-lg leading-relaxed">
              Tato stránka obsahuje podmínky, za nichž poskytuje společnost
              Aurelian Isles s.r.o. přístup ke svým webovým stránkám a
              službám. Přístupem na tyto stránky nebo jejich používáním
              vyjadřujete souhlas s níže uvedenými podmínkami.
            </p>
          </AnimatedSection>

          <Section title="1. Úvodní ustanovení">
            <p>
              Tyto podmínky užití (dále jen „Podmínky") upravují práva a
              povinnosti uživatelů (dále jen „Uživatel") při návštěvě a
              používání webových stránek dostupných na adrese
              www.aureliaisles.cz (dále jen „Web"), provozovaných společností
              Aurelian Isles s.r.o., se sídlem Praha, Česká republika (dále
              jen „Aurelian Isles").
            </p>
            <p>
              Přístupem na Web nebo jeho využíváním Uživatel potvrzuje, že si
              tyto Podmínky přečetl, porozuměl jim a souhlasí s nimi. Pokud s
              Podmínkami nesouhlasíte, prosíme, Web nepoužívejte.
            </p>
          </Section>

          <Section title="2. Rozsah služeb">
            <p>
              Aurelian Isles zprostředkovává informace o exkluzivních
              nemovitostech — soukromých ostrovech — za účelem jejich prodeje
              nebo pronájmu. Veškeré informace uvedené na Webu mají
              informativní charakter a nepředstavují závaznou nabídku ve smyslu
              občanského zákoníku.
            </p>
            <p>
              Aurelian Isles si vyhrazuje právo kdykoli bez předchozího
              upozornění upravit obsah Webu, dočasně nebo trvale omezit přístup
              k části nebo celku Webu.
            </p>
          </Section>

          <Section title="3. Duševní vlastnictví">
            <p>
              Veškerý obsah zveřejněný na Webu — včetně textů, fotografií,
              grafik, videí, loga a designu — je výhradním vlastnictvím
              Aurelian Isles nebo byl licencován od třetích stran a je chráněn
              příslušnými předpisy o duševním vlastnictví.
            </p>
            <p>
              Jakékoli kopírování, šíření, pozměňování nebo jiné využití tohoto
              obsahu bez písemného souhlasu Aurelian Isles je zakázáno.
            </p>
          </Section>

          <Section title="4. Omezení odpovědnosti">
            <p>
              Aurelian Isles vynakládá maximální úsilí, aby byly informace na
              Webu přesné a aktuální. Přesto neposkytuje žádnou záruku ohledně
              úplnosti, přesnosti či vhodnosti obsahu pro konkrétní účel.
            </p>
            <p>
              Aurelian Isles není odpovědná za přímé ani nepřímé škody vzniklé
              v důsledku použití Webu nebo nemožnosti jeho použití, ani za
              škody vzniklé v důsledku spoléhání se na informace zveřejněné na
              Webu.
            </p>
          </Section>

          <Section title="5. Zákaz neoprávněného použití">
            <p>Uživatel nesmí Web využívat k:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>šíření nezákonného, klamavého nebo urážlivého obsahu,</li>
              <li>
                pokusům o neoprávněný přístup k systémům nebo datům Aurelian
                Isles,
              </li>
              <li>
                automatizovanému sběru dat bez předchozího písemného souhlasu,
              </li>
              <li>
                jakékoli činnosti porušující platné právní předpisy České
                republiky nebo EU.
              </li>
            </ul>
          </Section>

          <Section title="6. Odkazy na třetí strany">
            <p>
              Web může obsahovat odkazy na webové stránky třetích stran.
              Aurelian Isles nenese odpovědnost za obsah těchto stránek ani za
              ochranu osobních údajů na nich praktikovanou. Doporučujeme
              seznámit se s podmínkami každé stránky, na niž přejdete.
            </p>
          </Section>

          <Section title="7. Rozhodné právo a jurisdikce">
            <p>
              Tyto Podmínky se řídí právem České republiky. Veškeré spory
              vzniklé v souvislosti s těmito Podmínkami nebo užíváním Webu
              budou řešeny příslušnými soudy v České republice.
            </p>
          </Section>

          <Section title="8. Změny podmínek">
            <p>
              Aurelian Isles si vyhrazuje právo tyto Podmínky kdykoli
              jednostranně změnit. Aktuální verze Podmínek je vždy dostupná na
              této stránce s uvedením data poslední aktualizace. Pokračování v
              užívání Webu po zveřejnění změn znamená souhlas s novými
              Podmínkami.
            </p>
          </Section>

          <Section title="9. Kontakt">
            <p>
              V případě dotazů k těmto Podmínkám nás kontaktujte na:{" "}
              <a
                href="mailto:info@soukromeostrovy.cz"
                className="text-[#785A1A] hover:underline transition-all"
              >
                info@soukromeostrovy.cz
              </a>
            </p>
          </Section>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-zinc-50 border-t border-zinc-100 py-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 font-sans text-sm">
            Máte dotaz k podmínkám nebo ke službám?
          </p>
          <Link
            href="/kontakt"
            className="shrink-0 px-8 py-4 bg-[#001B3A] text-white text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#785A1A] transition-all duration-300"
          >
            KONTAKTOVAT NÁS
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
