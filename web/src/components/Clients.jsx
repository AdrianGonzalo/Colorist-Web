import Image from "next/image";

const clients = [
    { name: "Nike", logo: "/Clients/Nike.svg" },
    { name: "Hugo Boss", logo: "/Clients/Hugo.svg" },
    { name: "Foot Locker", logo: "/Clients/Foot.svg" },
    { name: "Pull&Beart", logo: "/Clients/Pull&Bear.svg" },
    { name: "Voll-Damm", logo: "/Clients/Voll-Damm.svg", large: true },
    { name: "Kutxabank", logo: "/Clients/Kutxabank.svg" },
    { name: "Oysho", logo: "/Clients/Oysho.svg" },
    { name: "Metropolitan", logo: "/Clients/ClubM.svg", large: true },
];

export default function Clients() {
    return (
        <section className="w-full pb-28 border-y dark:border-neutral-500/40 bg-black/20">
            <div className="pt-16">
                <p className="text-lg uppercase tracking-[0.35em] text-center text-neutral-200 mb-14">
                    Selected clients & collaborations
                </p>

                <div className="grid grid-cols-2 [@media(min-width:900px)]:grid-cols-4 lg:grid-cols-8 place-items-center gap-y-12 w-full">
                    {clients.map((client) => {
                        const isLarge = client.large;

                        return (
                            <div
                                key={client.name}
                                className="flex justify-center items-center"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={isLarge ? 200 : 120}
                                    height={60}
                                    className={`
                    object-contain
                    max-w-[50px] sm:max-w-[75px] md:max-w-[100px] lg:max-w-[150px]
                    ${isLarge
                                            ? "max-w-[80px] sm:max-w-[120px] md:max-w-[160px] lg:max-w-[220px]"
                                            : ""
                                        }
                  `}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
