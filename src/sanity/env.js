export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2026-01-21'
export const dataset = process.env.SANITY_STUDIO_DATASET
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID


if (!projectId) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}

if (!dataset) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
}