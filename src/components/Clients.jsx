import Image from "next/image";

const clients = [
    { name: "Voll-Damm", logo: "/Clients/Voll-Damm.svg", width: 300, height: 60, },
    { name: "Kutxabank", logo: "/Clients/Kutxabank.svg", width: 150, height: 60, },
    { name: "Oysho", logo: "/Clients/Oysho.svg", width: 160, height: 60, },
    { name: "Metropolitan", logo: "/Clients/metropolitan.png", width: 140, height: 60, },
];

export default function Clients() {
    return (
        <section className="w-full pb-28 border-y dark:border-neutral-500/40 bg-black/20">
            <div className=" pt-16">
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
                                width={client.width}
                                height={client.height}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
