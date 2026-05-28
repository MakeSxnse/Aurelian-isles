import Link from "next/link";

export default function ArchitekturaTicha() {
    return (
        <div className="w-full bg-white flex flex-col justify-center items-center py-12 md:py-24 lg:py-32">
            <div className="mx-[5%] flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-800 text-center leading-tight">
                    „Architektura ticha“
                </h2>
                <p className="max-w-[20rem] sm:max-w-sm md:max-w-md lg:max-w-2xl text-xs md:text-sm font-sans text-gray-500 text-center leading-relaxed">
                    Věříme v luxus, který neničí, ale chrání. Naše filozofie udržitelnosti propojuje moderní inženýrství s respektem k panenské přírodě. Každý ostrov v naší nabídce splňuje přísná kritéria ekologické stopy a ochrany biodiverzity.
                </p>
                <Link href="/sluzby" className="text-[10px] md:text-xs font-sans text-[#785A1A] tracking-[0.3em] font-bold uppercase border-b border-[#785A1A]/30 pb-1 hover:border-[#785A1A] transition-all mt-4">
                    NAŠE SLUŽBY
                </Link>
            </div>
        </div>
    )
}