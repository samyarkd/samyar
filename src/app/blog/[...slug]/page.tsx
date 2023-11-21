
// @ts-ignore
import client from '@/../tina/__generated__/client'
import BlogPage from '@/components/blogPage'
import { Metadata } from 'next'

type Params = { filename: string }

export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  const response = await fetchEntry(params)

  if (!response) return {
    title: 'not found'
  }

  const images = () => {
    if (response.data.post?.hero) {
      return [response.data.post?.hero]
    } else {
      return []
    }
  }

  return {
    title: response.data.post.title,
    description: response.data.post?.description,
    openGraph: {
      images: [...(images())],
    },
  }
}

const Page = async ({ params }: { params: Params }) => {
  const response = await fetchEntry(params)

  return (
    <BlogPage {...response} />
  )
}

export default Page

export const revalidate = 0

async function fetchEntry(params: Params) {
  let variables = { relativePath: `${params.filename}.md` }
  const res = await client.queries.post(variables)
  return res
}
