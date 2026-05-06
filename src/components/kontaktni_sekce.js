export default function KontaktniSekce() {
  return (
    <>
      <section className="bg-[#031b3c] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-4">Globální dosah</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-6">
                Kdekoliv se rozhodnete být
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-10">
                S kancelářemi v Praze, Dubaji a Singapuru jsme připraveni se s vámi setkat osobně, ať už preferujete diskrétní schůzku v našem salonku nebo kdekoliv na světě prostřednictvím našeho privátního týmu.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border-l border-slate-600 pl-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Praha</p>
                  <p className="text-sm text-slate-200">Pařížská 22, 110 00</p>
                </div>
                <div className="border-l border-slate-600 pl-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">Dubaj</p>
                  <p className="text-sm text-slate-200">DIFC, Gate Village 5</p>
                </div>
              </div>

              <a href="#" className="inline-block mt-10 text-sm font-semibold tracking-[0.22em] uppercase text-white border-b border-white/40 pb-1">
                Kontaktovat naše kanceláře
              </a>
            </div>

            <div className="overflow-hidden bg-slate-900/40 shadow-xl shadow-slate-950/20">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="World map"
                className="w-full h-80 object-cover sm:h-[28rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 mb-4">
            Vaše cesta začíná zde
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Dovolte nám být vaším průvodcem ve světě, kde jedinou hranicí je horizont.
          </p>
          <a
            href="#"
            className="mt-12 inline-flex items-center justify-center bg-[#031b3c] px-8 py-4 text-sm font-sans uppercase text-white hover: border-[#031b3c] border-2 transition-colors duration-300 hover:bg-transparent hover:text-[#031b3c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#031b3c]"
          >
            Kontaktovat specialistu
          </a>
        </div>
      </section>
    </>
  );
}
