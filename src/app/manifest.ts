import { METADATA } from '@/helpers/config'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: METADATA.NAME,
    short_name: METADATA.SHORT_NAME,
    description: METADATA.DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#041221',
    theme_color: '#041221',
    id: '/',
    scope: '/',
    icons: [
      {
        src: '/icons/globy-black.svg',
        sizes: '40x40',
        type: 'image/svg+xml',
      },
    ],
    categories: METADATA.CATEGORIES,
    lang: 'en',
  }
}
