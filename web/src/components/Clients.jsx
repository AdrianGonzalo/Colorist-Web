"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
    { name: "Nike", logo: "/Clients/Nike.svg" },
    { name: "Hugo Boss", logo: "/Clients/Hugo.svg" },
    { name: "Foot Locker", logo: "/Clients/Foot.svg" },
    { name: "Pull&Bear", logo: "/Clients/Pull&Bear.svg" },
    { name: "Voll-Damm", logo: "/Clients/Voll-Damm.svg", large: true },
    { name: "Kutxabank", logo: "/Clients/Kutxabank.svg" },
    { name: "Oysho", logo: "/Clients/Oysho.svg" },
    { name: "Metropolitan", logo: "/Clients/ClubM.svg", large: true },
];

// Animations
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Clients() {
    return (
        <section className="w-full pb-28 border-y dark:border-neutral-500/40 bg-black/20">
            <div className="pt-16 max-w-7xl mx-auto px-8">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-14"
                >
                    <p className="text-sm md:text-base uppercase tracking-[0.35em] text-center text-neutral-200">
                        Trusted me
                    </p>
                    <span className="mt-2 w-16 h-px bg-neutral-300/70" />
                </motion.div>

                {/* Clients grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 [@media(min-width:900px)]:grid-cols-4 lg:grid-cols-8 place-items-center gap-y-12 w-full"
                >
                    {clients.map((client) => {
                        const isLarge = client.large;

                        return (
                            <motion.div
                                key={client.name}
                                variants={itemVariants}
                                className="flex justify-center items-center"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={isLarge ? 200 : 120}
                                    height={60}
                                    className={`
                    object-contain opacity-80
                    transition duration-500
                    hover:opacity-100
                    max-w-[50px] sm:max-w-[75px] md:max-w-[100px] lg:max-w-[150px]
                    ${isLarge
                                            ? "max-w-[80px] sm:max-w-[120px] md:max-w-[160px] lg:max-w-[220px]"
                                            : ""
                                        }
                  `}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}