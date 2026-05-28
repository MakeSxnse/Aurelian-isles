import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 text-zinc-800 py-20 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="text-2xl font-serif tracking-[0.2em] font-medium text-zinc-900">
            AURELIAN ISLES
          </Link>
          <p className="text-zinc-500 max-w-sm font-serif italic leading-relaxed">
            Exkluzivní zprostředkování prodeje a pronájmu soukromých ostrovů po celém světě. 
          </p>
        </div>
        
        <div>
          <h4 className="font-sans text-[0.8rem] tracking-[0.2em] font-bold uppercase text-[#785A1A] mb-6">Navigace</h4>
          <ul className="space-y-3 text-sm text-zinc-600 font-sans">
            <li><Link href="/prodej" className="hover:text-[#785A1A] transition-colors">Ostrovy</Link></li>
            <li><Link href="/sluzby" className="hover:text-[#785A1A] transition-colors">Služby</Link></li>
            <li><Link href="/pobocky" className="hover:text-[#785A1A] transition-colors">Pobočky</Link></li>
            <li><Link href="/o-nas" className="hover:text-[#785A1A] transition-colors">O nás</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans text-[0.8rem] tracking-[0.2em] font-bold uppercase text-[#785A1A] mb-6">Kontakt</h4>
          <ul className="space-y-3 text-sm text-zinc-600 font-sans">
            <li>info@soukromeostrovy.cz</li>
            <li>+420 123 456 789</li>
            <li>Praha, Česká republika</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase text-zinc-400">
        <p>© {new Date().getFullYear()} AURELIAN ISLES. Všechna práva vyhrazena.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-zinc-800 transition-colors">Ochrana údajů</Link>
          <Link href="/terms" className="hover:text-zinc-800 transition-colors">Podmínky užití</Link>
        </div>
      </div>
    </footer>
  );
}
