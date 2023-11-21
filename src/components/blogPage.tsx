'use client'
import clsx from 'clsx'
import { Crete_Round } from 'next/font/google'
import Image from 'next/image'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const ArticleFont = Crete_Round({
  weight: "400",
  subsets: ["latin"]
})

// Extracted a function to get the entry fields

// Extracted a function to get the image props
const getImageProps = (image: string, alt: string) => ({
  width: 900,
  height: 400,
  src: image,
  alt: alt,
  className: "rounded mx-auto w-full"
})

const BlogPage = (props: {
  query: any,
  variables: any,
  data: any,
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <div className={clsx("max-w-xl mx-auto flex flex-col space-y-5", ArticleFont.className)}>
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-5xl">{data.post.title}</h1>
        <p className="text-sm sm:text-base">{data.post?.description}</p>
        {
          data.post?.hero &&
          <Image {...getImageProps(data.post.hero, data.post.title)} />
        }
      </div>
      <hr />
      <article className="prose-base sm:prose-lg">
        <TinaMarkdown components={components} content={data.post.body} />
        {/* {documentToReactComponents(fields.body, {
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
      })} */}
      </article>
    </div>)
}

export default BlogPage

const PageSection = (props: any) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  )
}

const components = {
  PageSection: PageSection,
}

