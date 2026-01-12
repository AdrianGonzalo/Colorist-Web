import Image from "next/image";

const clients = [
    { name: "Voll-Damm", logo: "/Clients/Voll-Damm.svg" },
    { name: "Kutxabank", logo: "/Clients/Kutxabank.svg" },
    { name: "Oysho", logo: "/Clients/Oysho.svg" },
    // { name: "Metropolitan", logo: "/Clients/metropolitan.png" },
    { name: "Nike", logo: "/Clients/Nike.svg" },
    { name: "Hugo Boss", logo: "/Clients/Hugo.svg" },
    { name: "Foot Locker", logo: "/Clients/Foot.svg" },
];

export default function Clients() {
    return (
        <section className="w-full pb-28 border-y dark:border-neutral-500/40 bg-black/20">
            <div className="pt-16">
                <p className="text-lg uppercase tracking-[0.35em] text-center text-neutral-200 mb-14">
                    Selected clients & collaborations
                </p>

                <div className="flex flex-wrap justify-evenly items-center gap-y-12 mt-25 w-full">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="opacity-100 hover:opacity-60 transition duration-300 flex justify-center items-center"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={150} // tamaño base para desktop
                                height={60}
                                className="object-contain
                                           max-w-[50px] sm:max-w-[75px] md:max-w-[100px] lg:max-w-[150px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
