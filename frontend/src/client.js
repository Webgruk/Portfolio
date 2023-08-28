import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_ID,
  dataset: 'portfolil',
  apiVersion: '2023-08-25',
  useCdn: true,
  token: import.meta.env.VITE_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
