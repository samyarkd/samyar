import { tinaclient } from '@/utils/tina'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await tinaclient.queries.postConnection()
  const BASE_URL = 'https://samyar.me/'

  return [
    {
      url: BASE_URL,
      priority: 1
    },
    {
      url: BASE_URL + 'blog',
      priority: 0.9
    },
    ...(pages.data.postConnection.edges?.map((p) => {
      return {
        url: BASE_URL + 'blog/' + p?.node?._sys.filename,
        priority: 0.6
      }
    }) ?? [])
  ]
}
