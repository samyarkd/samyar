import { fetchEntry } from "@/utils/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import clsx from "clsx"
import type { Metadata } from 'next'
import { Crete_Round } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

type Props = {
  params: { slug: string[] }
}

const ArticleFont = Crete_Round({
  weight: "400",
  subsets: ["latin"]
})

// Extracted a function to get the entry fields
const getEntryFields = (entry: any) => entry?.fields as any

// Extracted a function to get the image props
const getImageProps = (image: any) => ({
  width: image?.fields?.file?.details?.image?.width,
  height: image?.fields?.file?.details?.image?.height,
  src: 'https:' + image?.fields?.file?.url,
  alt: image?.fields?.title,
  className: "rounded mx-auto w-full"
})

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const [id] = params.slug

  const entry = await fetchEntry(id)
  if (!entry) return {
    title: 'not found'
  }

  const fields = getEntryFields(entry)

  return {
    title: fields.title,
    description: fields.description,
    openGraph: {
      images: [fields.thumbnail && 'https:' + fields.thumbnail?.fields?.file?.url],
    },
  }
}

const BlogPost = async ({ params }: { params: { slug: string[] } }) => {
  const [id] = params.slug
  const entry = await fetchEntry(id)
  if (!entry) return <p>404</p>

  const fields = getEntryFields(entry)

  return (
    <div className={clsx("max-w-xl mx-auto flex flex-col space-y-5", ArticleFont.className)}>
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-5xl">{fields.title}</h1>
        <p className="text-sm sm:text-base">{fields.description}</p>
        {
          fields.thumbnail &&
          <Image {...getImageProps(fields.thumbnail)} />
        }
      </div>
      <hr />
      <article className="prose-base sm:prose-lg">
        {documentToReactComponents(fields.body, {
          preserveWhitespace: false,
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
              if (node.content.some((n: any) => n.nodeType === "embedded-entry-inline")) {
                return <>{children}</>
              }
              return <p>{node?.content[0]?.value}</p>
            },
            'embedded-asset-block': (node: any) => {
              return <Image {...getImageProps(node?.data?.target)} />
            },
            "embedded-entry-inline": (node: any) => {
              const target = node?.data?.target
              if (target?.sys?.contentType?.sys?.id === 'codeBlock') {
                return <SyntaxHighlighter
                  language={target?.fields?.lang}
                  style={dracula}>
                  {target?.fields?.code}
                </SyntaxHighlighter>
              }

              return <Link
                className="hover:underline text-blue-500"
                href={`/blog/${target?.sys?.id}/${target?.fields?.slug}`}>
                {target?.fields?.title}
              </Link>
            },
            "hyperlink": (node: any) => {
              return <Link
                className="hover:underline text-blue-500"
                href={node?.data?.uri} target="_blank" rel="noopener noreferrer">
                {node?.content[0]?.value}
              </Link>
            },
          },
        })}
      </article>
    </div>
  )
}

export default BlogPost
export const revalidate = 0
