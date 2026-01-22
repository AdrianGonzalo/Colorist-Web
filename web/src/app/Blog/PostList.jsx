"use client";

import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (src) => builder.image(src).width(800).url();

export default function PostList({ posts }) {
    const [open, setOpen] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => {
                const isOpen = open === post._id;

                return (
                    <div
                        key={post._id}
                        className="bg-black border-2 border-neutral-700 overflow-hidden shadow-lg flex flex-col"
                    >
                        {post.mainImage && (
                            <img
                                src={urlFor(post.mainImage)}
                                alt={post.title}
                                className="w-full h-60 object-cover"
                            />
                        )}

                        <div className="p-6 flex flex-col flex-1">
                            <h2 className="text-2xl font-light mb-4 text-white">
                                {post.title}
                            </h2>

                            {/* TEXTO (antes del botón) */}
                            {isOpen && post.body?.[0]?.children && (
                                <p className="text-gray-300 mb-4 break-words text-sm leading-relaxed">
                                    {post.body[0].children.map(c => c.text).join(" ")}
                                </p>
                            )}

                            {/* BOTÓN SIEMPRE ABAJO */}
                            <button
                                onClick={() => setOpen(isOpen ? null : post._id)}
                                className="bg-neutral-700 hover:bg-neutral-600 text-sm px-4 py-2 rounded w-full mt-auto transition text-white"
                            >
                                {isOpen ? "Ocultar" : "Leer más"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
