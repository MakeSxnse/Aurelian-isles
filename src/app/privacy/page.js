import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import Link from "next/link";

export const metadata = {
  title: "Ochrana osobních údajů | AURELIAN ISLES",
  description:
    "Zásady ochrany osobních údajů společnosti Aurelian Isles. Zjistěte, jak zpracováváme a chráníme vaše data.",
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

export default function PrivacyPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <div className="bg-[#001B3A] py-36 md:py-48 flex flex-col items-center justify-center text-center px-6">
        <AnimatedSection className="flex flex-col items-center gap-4">
          <p className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-[#C5A059]">
            PRÁVNÍ DOKUMENTY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Ochrana osobních údajů
          </h1>
          <div className="w-10 h-[1px] bg-[#785A1A] mt-2" />
          <p className="text-white/50 font-sans text-xs tracking-widest uppercase mt-2">
            Platné od 1. ledna 2025 · GDPR
          </p>
        </AnimatedSection>
      </div>

      {/* Content */}
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-zinc-500 font-serif italic text-base md:text-lg leading-relaxed">
              Soukromí je základem toho, co děláme. Stejně jako chráníme
              soukromí vašeho ostrova, chráníme i vaše osobní údaje. Níže
              naleznete transparentní přehled toho, jak s vašimi daty
              nakládáme v souladu s nařízením GDPR.
            </p>
          </AnimatedSection>

          <Section title="1. Správce osobních údajů">
            <p>
              Správcem vašich osobních údajů je společnost Aurelian Isles
              s.r.o., se sídlem Praha, Česká republika. V případě dotazů
              týkajících se ochrany osobních údajů nás kontaktujte na:{" "}
              <a
                href="mailto:privacy@soukromeostrovy.cz"
                className="text-[#785A1A] hover:underline"
              >
                privacy@soukromeostrovy.cz
              </a>
            </p>
          </Section>

          <Section title="2. Jaké údaje shromažďujeme">
            <p>
              V závislosti na způsobu, jakým využíváte naše služby, můžeme
              shromažďovat následující kategorie osobních údajů:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-zinc-800">Identifikační údaje</strong>{" "}
                — jméno, příjmení, titul
              </li>
              <li>
                <strong className="text-zinc-800">Kontaktní údaje</strong> —
                e-mailová adresa, telefonní číslo, poštovní adresa
              </li>
              <li>
                <strong className="text-zinc-800">Komunikační záznamy</strong>{" "}
                — obsah zpráv odeslaných prostřednictvím kontaktního formuláře
              </li>
              <li>
                <strong className="text-zinc-800">Technická data</strong> — IP
                adresa, typ prohlížeče, operační systém, navštívené stránky,
                délka návštěvy
              </li>
            </ul>
          </Section>

          <Section title="3. Účely a právní základ zpracování">
            <p>Vaše osobní údaje zpracováváme pro následující účely:</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border border-zinc-200">
                    <th className="text-left p-3 font-bold text-zinc-800 border-r border-zinc-200">
                      Účel
                    </th>
                    <th className="text-left p-3 font-bold text-zinc-800">
                      Právní základ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Odpověď na váš dotaz nebo poptávku", "Oprávněný zájem"],
                    [
                      "Zprostředkování prodeje / pronájmu nemovitosti",
                      "Plnění smlouvy",
                    ],
                    ["Zasílání obchodních sdělení", "Souhlas"],
                    ["Analytika a zlepšování webu", "Oprávněný zájem"],
                    ["Plnění zákonných povinností", "Zákonná povinnost"],
                  ].map(([purpose, basis], i) => (
                    <tr key={i} className="border border-zinc-100">
                      <td className="p-3 border-r border-zinc-100 text-zinc-600">
                        {purpose}
                      </td>
                      <td className="p-3 text-zinc-600">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Doba uchovávání údajů">
            <p>
              Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou pro
              naplnění účelu, pro který byly shromážděny:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Dotazy z kontaktního formuláře — 2 roky od poslední komunikace
              </li>
              <li>
                Smluvní dokumentace — 10 let dle platné legislativy
              </li>
              <li>Technická data (logy) — 12 měsíců</li>
              <li>
                Marketingová sdělení — do odvolání souhlasu nebo 3 roky od
                poslední aktivity
              </li>
            </ul>
          </Section>

          <Section title="5. Předávání údajů třetím stranám">
            <p>
              Vaše osobní údaje neprodáváme ani nepronajímáme třetím stranám.
              Údaje mohou být sdíleny výhradně s:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Zpracovateli jednajícími na základě smlouvy v souladu s GDPR
                (např. IT infrastruktura, právní poradci)
              </li>
              <li>
                Příslušnými orgány veřejné moci, pokud to vyžaduje zákon
              </li>
            </ul>
            <p>
              Žádné údaje nepředáváme do zemí mimo EHP bez přijetí odpovídajících
              záruk (standardní smluvní doložky EU).
            </p>
          </Section>

          <Section title="6. Soubory cookie">
            <p>
              Naše webové stránky používají soubory cookie pro zajištění
              správné funkčnosti, analytiku návštěvnosti a personalizaci obsahu.
              Rozlišujeme:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-zinc-800">Nezbytné cookies</strong> —
                nutné pro provoz webu, nevyžadují souhlas
              </li>
              <li>
                <strong className="text-zinc-800">Analytické cookies</strong> —
                sledují anonymní statistiky návštěvnosti (Google Analytics)
              </li>
              <li>
                <strong className="text-zinc-800">Marketingové cookies</strong>{" "}
                — pouze s vaším výslovným souhlasem
              </li>
            </ul>
            <p>
              Souhlas s cookies lze kdykoli odvolat prostřednictvím nastavení
              prohlížeče.
            </p>
          </Section>

          <Section title="7. Vaše práva">
            <p>
              Jakožto subjekt údajů máte v souladu s GDPR tato práva:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-zinc-800">Právo na přístup</strong> —
                požádat o kopii vašich osobních údajů, které zpracováváme
              </li>
              <li>
                <strong className="text-zinc-800">Právo na opravu</strong> —
                nechat opravit nesprávné nebo neúplné údaje
              </li>
              <li>
                <strong className="text-zinc-800">Právo na výmaz</strong> —
                „právo být zapomenut" za podmínek stanovených GDPR
              </li>
              <li>
                <strong className="text-zinc-800">
                  Právo na omezení zpracování
                </strong>{" "}
                — pozastavit zpracování vašich údajů
              </li>
              <li>
                <strong className="text-zinc-800">
                  Právo na přenositelnost
                </strong>{" "}
                — obdržet vaše údaje ve strukturovaném formátu
              </li>
              <li>
                <strong className="text-zinc-800">Právo vznést námitku</strong>{" "}
                — proti zpracování na základě oprávněného zájmu
              </li>
              <li>
                <strong className="text-zinc-800">Právo odvolat souhlas</strong>{" "}
                — kdykoli bez udání důvodu
              </li>
            </ul>
            <p>
              Svá práva uplatněte e-mailem na{" "}
              <a
                href="mailto:privacy@soukromeostrovy.cz"
                className="text-[#785A1A] hover:underline"
              >
                privacy@soukromeostrovy.cz
              </a>
              . Na vaši žádost odpovíme do 30 dnů.
            </p>
          </Section>

          <Section title="8. Právo podat stížnost">
            <p>
              Pokud se domníváte, že zpracování vašich osobních údajů porušuje
              předpisy o ochraně osobních údajů, máte právo podat stížnost u
              dozorového úřadu — v České republice je jím{" "}
              <strong className="text-zinc-800">
                Úřad pro ochranu osobních údajů (ÚOOÚ)
              </strong>
              , se sídlem Pplk. Sochora 27, 170 00 Praha 7,{" "}
              <a
                href="https://www.uoou.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#785A1A] hover:underline"
              >
                www.uoou.cz
              </a>
              .
            </p>
          </Section>

          <Section title="9. Změny zásad ochrany osobních údajů">
            <p>
              Tyto zásady můžeme průběžně aktualizovat. O podstatných změnách
              vás budeme informovat prostřednictvím webu nebo e-mailem. Aktuální
              verze je vždy k dispozici na této stránce s uvedeným datem
              účinnosti.
            </p>
          </Section>
        </div>
      </div>

      {/* Bottom links */}
      <div className="bg-zinc-50 border-t border-zinc-100 py-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 font-sans text-sm">
            Chcete uplatnit svá práva nebo máte dotaz?
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            <Link
              href="/terms"
              className="px-6 py-3 border border-zinc-300 text-zinc-700 text-xs font-sans font-bold tracking-[0.2em] uppercase hover:border-[#785A1A] hover:text-[#785A1A] transition-all duration-300 rounded-sm"
            >
              PODMÍNKY UŽITÍ
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-3 bg-[#001B3A] text-white text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#785A1A] transition-all duration-300 rounded-sm"
            >
              KONTAKTOVAT NÁS
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
