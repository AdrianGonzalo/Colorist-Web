import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // desde tu .env.local de Next.js
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2026-01-21', // usa la fecha actual
    useCdn: true, // `true` si quieres que sea rápido, no necesario para contenido nuevo
})
