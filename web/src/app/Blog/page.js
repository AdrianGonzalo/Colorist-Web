import { sanityClient } from "@/lib/sanity";
import PostList from "./PostList";

export default async function Blog() {
    const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      mainImage,
      body
    }
  `);

    return (
        <section
            className="
    min-h-screen
    pt-24
    px-4 md:px-20
    bg-[url('/Textures/texture2.png')]
    bg-repeat
    bg-[length:200px_200px]
  "
        >
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-center mb-2 relative text-white">
                Blog
                <span className="absolute -bottom-2 left-1/2 w-20 h-[2px] bg-neutral-300 -translate-x-1/2" />
            </h2>

            <PostList posts={posts} />
        </section>
    );
}