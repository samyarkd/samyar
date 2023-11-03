import { fetchEntry } from "@/utils/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import Link from "next/link"

import type { Metadata } from 'next'

type Props = {
  params: { slug: string[] }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const [id] = params.slug

  const entry = await fetchEntry(id)
  if (!entry) return {
    title: 'not found'
  }

  return {
    title: entry.fields?.title as string,
    description: entry.fields?.description as string,
    openGraph: {
      images: [(entry.fields as any).thumbnail && 'https:' + (entry.fields as any).thumbnail?.fields?.file?.url],
    },
  }
}

const BlogPost = async ({ params }: { params: { slug: string[] } }) => {
  const [id] = params.slug

  const entry = await fetchEntry(id)
  if (!entry) return <p>404</p>

  return (
    <div className="flex flex-col space-y-5">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-5xl">{entry.fields?.title as string}</h1>
        <p className="text-sm sm:text-base">{entry.fields?.description as string}</p>
        {
          (entry.fields as any).thumbnail &&
          <Image
            alt={(entry.fields as any).thumbnail?.fields?.title}
            src={'https:' + (entry.fields as any).thumbnail?.fields?.file?.url}
            width={(entry.fields as any).thumbnail?.fields?.file?.details?.image?.width}
            height={(entry.fields as any).thumbnail?.fields?.file?.details?.image?.height}
            className="rounded mx-auto w-full sm:w-2/3 md:w-1/2 xl:w-96" />
        }
      </div>
      <hr />
      <article className="prose-base sm:prose-lg">
        {documentToReactComponents(entry.fields.body as any, {
          preserveWhitespace: false,
          renderNode: {
            'embedded-asset-block': (node: any) => {
              return <Image
                width={node?.data?.target?.fields?.file?.details?.image?.width}
                height={node?.data?.target?.fields?.file?.details?.image?.height}
                src={'https:' + node?.data?.target?.fields?.file?.url}
                alt={node?.data?.target?.fields?.title}
                className="rounded mx-auto w-full sm:w-2/3 md:w-1/2 xl:w-96" />
            },
            "embedded-entry-inline": (node: any) => {
              return <Link
                className="hover:underline text-blue-500"
                href={`/blog/${node?.data?.target?.sys?.id}/${node?.data?.target?.fields?.slug}`}>
                {node?.data?.target?.fields?.title}
              </Link>
            },
          }
        })}
      </article>
    </div>

  )
}

export default BlogPost
export const revalidate = 0
