export default function Vhledy() {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#785A1A] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">VHLEDY</p>
                    <h2 className="text-xl md:text-2xl font-serif text-gray-800">Purelian Journal</h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Card 1 */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[4/5]">
                            <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80" 
                                alt="Waves" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                        </div>
                        <p className="text-[#785A1A] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">TRH A INVESTICE</p>
                        <h3 className="text-lg font-serif text-gray-900 mb-3 leading-snug">Analýza trhu s privátními ostrovy 2024</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Pohled na aktuální trendy v investicích do nemovitostí mimo pevninu a proč hodnota izolovaných lokalit neustále roste.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[4/5]">
                            <img 
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                                alt="Interior" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                        </div>
                        <p className="text-[#785A1A] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">LIFESTYLE</p>
                        <h3 className="text-lg font-serif text-gray-900 mb-3 leading-snug">Umění žít v izolaci: Průvodce moderního Robinsona</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Jak skloubit digitální konektivitu s touhou po naprostém odloučení od civilizace.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[4/5]">
                            <img 
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                                alt="Sunset" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                        </div>
                        <p className="text-[#785A1A] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">DESTINACE</p>
                        <h3 className="text-lg font-serif text-gray-900 mb-3 leading-snug">Neznámé souostroví: Poklady Indonésie</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Objevte skryté perly regionu, který se stává novým centrem ultra-luxusního bydlení.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}