// src/app/Blog/PostList.jsx
"use client"; // necesario para usar useState

import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/client.public";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source).width(800).url();

export default function PostList({ posts }) {
    const [openPost, setOpenPost] = useState(null);

    const togglePost = (slug) => {
        setOpenPost(openPost === slug ? null : slug);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => {
                const isOpen = openPost === post.slug.current;
                return (
                    <div
                        key={post.slug.current}
                        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        {post.mainImage && (
                            <img
                                src={urlFor(post.mainImage)}
                                alt={post.title}
                                className="w-full h-64 object-cover"
                            />
                        )}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                            <button
                                onClick={() => togglePost(post.slug.current)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
                            >
                                {isOpen ? "Ocultar descripción" : "Ver post"}
                            </button>

                            {isOpen && post.content && post.content[0]?.children && (
                                <p className="text-gray-200 mt-2">
                                    {post.content[0].children.map((c) => c.text).join(" ")}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
