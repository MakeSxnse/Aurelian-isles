import Image from "next/image";
import Link from "next/link";

import { islands } from "@/constants";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

export default function ProdejPage() {
    return (
        <PageTransition>
            <div className="pt-[160px] pb-32 bg-white overflow-x-hidden">
                {/* Centered Header Section */}
                <AnimatedSection className="max-w-4xl mx-auto text-center px-6 mb-32">
                    <p className="text-[10px] font-sans text-[#785A1A] tracking-[0.4em] font-bold uppercase mb-6">
                        KURÁTORSKÝ VÝBĚR
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-tight mb-8">
                        Kolekce soukromých <br />
                        ostrovů
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-serif max-w-2xl mx-auto leading-relaxed">
                        Objevte nejexkluzivnější útočiště na světě. Každý ostrov v naší kolekci byl pečlivě
                        vybrán pro svou neotřelou krásu, naprosté soukromí a architektonickou
                        dokonalost.
                    </p>
                    <div className="w-[1px] h-20 bg-zinc-100 mx-auto mt-12"></div>
                </AnimatedSection>

                {/* Alternating Islands List */}
                <div className="flex flex-col gap-32 md:gap-48 pb-32">
                    {islands.map((island, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={island.id} className="relative container mx-auto px-6 max-w-7xl">
                                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                                    {/* Image Box */}
                                    <div className="w-full lg:w-2/3 aspect-[4/3] relative overflow-hidden group shadow-2xl">
                                        <Image
                                            src={island.image}
                                            alt={island.title}
                                            fill
                                            className="object-cover transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                    </div>

                                    {/* Content Box (Overlapping) */}
                                    <div className={`w-full lg:w-[450px] bg-white lg:absolute z-10 p-8 md:p-12 shadow-2xl lg:shadow-xl mt-[-40px] lg:mt-0 ${isEven ? 'lg:right-0' : 'lg:left-0'}`}>
                                        <div className="flex flex-col gap-6">
                                            <div>
                                                <p className="text-[10px] font-bold tracking-[0.3em] text-[#785A1A] uppercase mb-3">
                                                    {island.location}
                                                </p>
                                                <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-2">
                                                    {island.title}
                                                </h2>
                                                <div className="w-12 h-[1px] bg-[#785A1A]/30" />
                                            </div>

                                            <p className="text-sm text-zinc-500 font-sans leading-relaxed italic border-b border-zinc-100 pb-8">
                                                "{island.description}"
                                            </p>

                                            {/* Specs Summary */}
                                            <div className="grid grid-cols-2 gap-6 py-2">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest">ROZLOHA</span>
                                                    <span className="text-xs font-medium text-zinc-700">{island.area}</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest">POŽADOVANÁ CENA</span>
                                                    <span className="text-sm font-serif font-bold text-[#785A1A]">{island.price}</span>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/prodej/${island.id}`}
                                                className="group flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-zinc-900 hover:text-[#785A1A] transition-colors w-fit pt-4"
                                            >
                                                PROZKOUMAT DETAIL
                                                <span className="w-8 h-[1px] bg-zinc-900 transition-all group-hover:w-12 group-hover:bg-[#785A1A]" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </PageTransition>
    );
}
