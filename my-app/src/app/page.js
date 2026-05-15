import ArchitekturaTicha from "@/components/architektura_ticha";
import Hero from "@/components/hero";
import { Kolekce } from "@/components/kolekce";
import Proces from "@/components/proces";
import SluzbyNaMiru from "@/components/sluzby_na_miru";
import Vhledy from "@/components/vhledy";
import KontaktniSekce from "@/components/kontaktni_sekce";

import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <main>
      <PageTransition>
        <Hero />
        <Kolekce />
        <Proces />
        <SluzbyNaMiru />
        <ArchitekturaTicha />
        <Vhledy />
        <KontaktniSekce />
      </PageTransition>
    </main>
  );
}
