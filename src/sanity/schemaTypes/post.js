import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'content',
            title: 'Contenido',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        {
            name: "mainImage",
            title: "Imagen principal",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "mainImageUrl",
            title: "Imagen externa (opcional)",
            type: "url"
        },
        defineField({
            name: 'publishedAt',
            title: 'Fecha de publicación',
            type: 'datetime',
        }),
    ],
})
