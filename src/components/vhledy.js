export default function Vhledy() {
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-amber-700 text-sm font-semibold mb-2">VHLEDY</p>
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Purelian Journal</h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div>
                        <div className="overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=400&fit=crop" alt="Waves" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <p className="text-amber-700 text-xs font-semibold uppercase mb-2">TRH A INVESTICE</p>
                        <h3 className="text-lg font-serif text-gray-900 mb-3">Analýza trhu s privátními ostrovy 2024</h3>
                        <p className="text-gray-600 text-sm">Pohled na aktuální trendy v investicích do nemovitostí na pěkných lokalitách nejstálejících lokalitách neustále roste.</p>
                    </div>

                    {/* Card 2 */}
                    <div>
                        <div className="overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop" alt="Interior" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <p className="text-amber-700 text-xs font-semibold uppercase mb-2">LIFESTYLE</p>
                        <h3 className="text-lg font-serif text-gray-900 mb-3">Umění žít v izolaci: Průvodce moderního Robinsona</h3>
                        <p className="text-gray-600 text-sm">Jak skloubit digitální konektivitu s touhou po neprospěm odloučení od civilizace.</p>
                    </div>

                    {/* Card 3 */}
                    <div>
                        <div className="overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop" alt="Sunset" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <p className="text-amber-700 text-xs font-semibold uppercase mb-2">DESTINACE</p>
                        <h3 className="text-lg font-serif text-gray-900 mb-3">Neznámé souostroví: Poklady Indonésie</h3>
                        <p className="text-gray-600 text-sm">Objevte skryté perly regionu, které se stává novým centrem ultra-luxusního bydlení.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}