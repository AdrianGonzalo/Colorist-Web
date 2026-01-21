// src/app/Blog/page.jsx
import { sanityClient } from "@/sanity/client";
import PostList from "./PostList"; // importamos el componente client

export default async function Blog() {
    const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    mainImage,
    content
  }`;

    const posts = await sanityClient.fetch(query);

    return (
        <div className="mt-20 text-white px-4 md:px-20">
            <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>

            {posts.length === 0 ? (
                <p className="text-center text-gray-400">No hay posts todavía.</p>
            ) : (
                <PostList posts={posts} />
            )}
        </div>
    );
}
