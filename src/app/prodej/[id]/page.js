import Image from "next/image";
import Link from "next/link";
import { islands } from "@/constants";
import { notFound } from "next/navigation";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

export default async function IslandDetail({ params }) {
    const { id } = await params;
    const island = islands.find((i) => i.id === id);

    if (!island) {
        notFound();
    }

    return (
        <PageTransition>
            <div className="bg-white min-h-screen pt-[120px] pb-24 font-sans text-zinc-900 overflow-x-hidden">
                {/* Header Section */}
                <AnimatedSection className="max-w-7xl mx-auto px-6 mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="max-w-2xl">
                            <p className="text-[10px] font-medium tracking-[0.3em] text-[#785A1A] uppercase mb-4">
                                EXKLUZIVNÍ NABÍDKA
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-zinc-800">
                                {island.title}
                            </h1>
                            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xl">
                                {island.description}
                            </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                            <p className="text-zinc-400 text-[10px] tracking-widest uppercase mb-1">Požadovaná cena</p>
                            <p className="text-xl md:text-2xl font-serif text-[#785A1A] font-bold">{island.price}</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Hero Image & Overlapping Specs */}
                <div className="relative w-full mb-24">
                    <div className="w-full h-[60vh] md:h-[80vh] relative">
                        <Image
                            src={island.image}
                            alt={island.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Overlapping Specs Box */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white shadow-lg p-8 md:p-12 z-50">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="text-[9px] md:text-[10px] tracking-widest text-zinc-400 uppercase font-medium">CELKOVÁ PLOCHA</p>
                                <p className="text-sm md:text-base font-serif font-bold text-zinc-800">{island.area}</p>
                            </div>
                            <div className="flex flex-col gap-2 border-l border-zinc-100 pl-4 md:pl-8">
                                <p className="text-[9px] md:text-[10px] tracking-widest text-zinc-400 uppercase font-medium">KAPACITA HOSTŮ</p>
                                <p className="text-sm md:text-base font-serif font-bold text-zinc-800">{island.capacity}</p>
                            </div>
                            <div className="flex flex-col gap-2 border-l border-zinc-100 pl-4 md:pl-8">
                                <p className="text-[9px] md:text-[10px] tracking-widest text-zinc-400 uppercase font-medium">ENERGETICKÝ REŽIM</p>
                                <p className="text-sm md:text-base font-serif font-bold text-zinc-800">{island.energyMode}</p>
                            </div>
                            <div className="flex flex-col gap-2 border-l border-zinc-100 pl-4 md:pl-8">
                                <p className="text-[9px] md:text-[10px] tracking-widest text-zinc-400 uppercase font-medium">HLAVNÍ REZIDENCE</p>
                                <p className="text-sm md:text-base font-serif font-bold text-zinc-800">{island.mainResidence}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Narrative Section */}
                <div className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-[#785A1A] uppercase mb-8">
                                KOUZLO IZOLACE
                            </p>
                            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
                                Dokonalý úkryt před <br /> okolním světem
                            </h2>
                            <p className="text-zinc-500 leading-relaxed mb-6 font-serif text-lg italic">
                                {island.longDescription}
                            </p>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Věříme, že skutečný luxus spočívá v tichu a neomezeném prostoru. Každý náš projekt je navržen tak, aby minimalizoval zásah do okolí a naopak využíval jeho přirozené přednosti k vytvoření unikátního zážitku.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 aspect-square relative overflow-hidden shadow-xl">
                            <Image
                                src={island.narrativeImage}
                                alt="Island view detail"
                                fill
                                className="object-cover transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="bg-zinc-50 py-32 mb-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-[#785A1A] uppercase mb-4">
                                FILOZOFIE DESIGNU
                            </p>
                            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                                Přístup bez kompromisů
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {island.features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <h3 className="text-lg font-serif text-zinc-900 border-b border-zinc-200 pb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lifestyle CTA Section */}
                <div className="max-w-7xl mx-auto px-6 mb-32">
                    <div className="flex flex-col lg:flex-row bg-[#FDFDFD] border border-zinc-100">
                        <div className="w-full lg:w-3/5 h-[400px] md:h-[500px] relative">
                            <Image
                                src={island.lifestyleImage}
                                alt="Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-2/5 p-12 md:p-16 flex flex-col justify-center">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-[#785A1A] uppercase mb-8">
                                ŽIVOTNÍ STYL BEZ HRANIC
                            </p>
                            <p className="text-zinc-500 font-serif italic text-lg leading-relaxed mb-8">
                                Objevte luxus, který nezná kompromisy. Naše služby concierge zajistí, aby byl váš pobyt na ostrově naprosto bezstarostný.
                            </p>
                            <Link
                                href="/kontakt"
                                className="text-[10px] font-bold tracking-widest uppercase text-zinc-900 border-b border-[#785A1A] pb-1 w-fit hover:text-[#785A1A] transition-colors"
                            >
                                PROZKOUMAT SLUŽBY
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Final Actions */}
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif mb-12">Zaujal vás tento objekt?</h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/kontakt"
                            className="px-12 py-5 bg-[#03254a] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:border hover:border-1 hover:border-[#03254a] hover:text-[#03254a] transition-colors w-full md:w-auto"
                        >
                            DOHODNOUT PROHLÍDKU
                        </Link>
                        <Link
                            href="/kontakt"
                            className="px-12 py-5 border border-[#785A1A] text-[#785A1A] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#785A1A] hover:text-white transition-colors w-full md:w-auto"
                        >
                            PRIVÁTNÍ ARCHIVY
                        </Link>
                    </div>
                    <p className="mt-12 text-zinc-400 text-[10px] uppercase tracking-widest">
                        Všechny transakce podléhají přísné dohodě o mlčenlivosti.
                    </p>
                </div>
            </div>
        </PageTransition>
    );
}
