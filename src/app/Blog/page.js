export default async function Blog() {
    const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    mainImage,
    content
  }`;



    return (
        <div className="mt-20 text-white px-4 md:px-20">
            dfghdfgdfgdg
        </div>
    );
}
