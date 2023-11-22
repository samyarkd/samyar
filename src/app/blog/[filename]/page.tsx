import BlogPage from '@/components/blogPage'
import { FetchPostParams, fetchPost } from '@/utils/tina'
import { Metadata } from 'next'

/**
 * Generate metadata for a post
 * @param params - The parameters for fetching the post
 * @returns The generated metadata
 */
export async function generateMetadata({ params }: { params: FetchPostParams }): Promise<Metadata> {
  const response = await fetchPost(params)

  if (!response) {
    return {
      title: 'not found'
    }
  }

  const images = response.data.post?.hero ? [response.data.post.hero] : []

  return {
    title: response.data.post.title,
    description: response.data.post?.description,
    openGraph: {
      images: [...images],
    },
  }
}

const Page = async ({ params }: { params: FetchPostParams }) => {
  const response = await fetchPost(params)

  return (
    <BlogPage post={response.data.post} />
  )
}

export default Page
// Don't cache
export const revalidate = 0

