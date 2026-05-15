import Image from "next/image";
import Link from "next/link";

export default function SluzbyNaMiru() {
    return (
        <div className="w-full bg-white flex justify-center items-center py-20 md:py-32">
            <div className="mx-[5%] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full aspect-[4/5] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[625px] relative overflow-hidden">
                    <Image
                        src="/letadlo.png"
                        alt="Služby na míru"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[0.9rem] font-sans text-[#785A1A] tracking-[0.3em] font-medium uppercase">
                            SLUŽBY NA MÍRU
                        </h2>
                        <h3 className="text-[1.5rem] md:text-[2rem] font-serif text-zinc-800 leading-tight">
                            Správa, která nezná hranice
                        </h3>
                    </div>

                    <p className="text-sm font-sans text-zinc-500 leading-relaxed">
                        Od zajištění privátní letecké dopravy po komplexní správu vašeho ostrovního sídla. Náš tým concierge se postará o každý detail, zatímco vy si užíváte nerušený klid.
                    </p>

                    <div className="space-y-6 mt-2">
                        <div className="flex gap-4 items-center">
                            <Image src="/flight.svg" alt="Aviation" width={22} height={22} className="opacity-80" />
                            <p className="text-[0.8rem] tracking-[0.2em] text-zinc-700 font-medium uppercase">AURELIAN AVIATION</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Image src="/property.svg" alt="Property" width={22} height={22} className="opacity-80" />
                            <p className="text-[0.8rem] tracking-[0.2em] text-zinc-700 font-medium uppercase">PROPERTY MANAGEMENT</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Image src="/concierge.svg" alt="Concierge" width={22} height={22} className="opacity-80" />
                            <p className="text-[0.8rem] tracking-[0.2em] text-zinc-700 font-medium uppercase">LIFESTYLE CONCIERGE</p>
                        </div>
                    </div>

                    <Link href="/sluzby" className="w-fit px-10 py-4 bg-transparent border border-[#785A1A] text-[#785A1A] font-sans text-xs tracking-[0.2em] hover:bg-[#785A1A] hover:text-white transition-all uppercase mt-6 font-medium">
                        OBJEVIT NAŠE SLUŽBY
                    </Link>
                </div>
            </div>
        </div>
    )
}
