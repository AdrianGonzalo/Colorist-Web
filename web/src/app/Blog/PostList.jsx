"use client";

import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (src) => builder.image(src).width(800).url();

export default function PostList({ posts }) {
    const [open, setOpen] = useState(null);

    return (
        <section>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {posts.map((post) => {
                    const isOpen = open === post._id;
                    return (
                        <div
                            key={post._id}
                            className="bg-black border-2 border-neutral-700 shadow-lg flex flex-col overflow-hidden"
                        >
                            {/* IMAGEN */}
                            {post.mainImage && (
                                <img
                                    src={urlFor(post.mainImage)}
                                    alt={post.title}
                                    className="w-full h-60 object-cover"
                                />
                            )}

                            {/* CONTENIDO */}
                            <div className=" flex flex-col">
                                <h2 className="p-3 text-2xl font-light text-white text-center">
                                    {post.title}
                                </h2>

                                {/* TEXTO */}
                                <div
                                    className={`pl-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                                        ? "max-h-40 opacity-100 mb-4"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {post.body?.[0]?.children
                                            ?.map((c) => c.text)
                                            .join(" ")}
                                    </p>
                                </div>

                                {/* BOTÓN */}
                                <button
                                    onClick={() =>
                                        setOpen(isOpen ? null : post._id)
                                    }
                                    className="w-full bg-neutral-700 text-sm px-4 py-2 transition text-white"
                                >
                                    {isOpen ? "Leer menos" : "Leer más"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

