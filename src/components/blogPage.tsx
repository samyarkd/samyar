import clsx from 'clsx'
import { Crete_Round } from 'next/font/google'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { TinaMarkdown, type Components } from 'tinacms/dist/rich-text'
import { type PostQuery } from '../../tina/__generated__/types'

const ArticleFont = Crete_Round({
  weight: '400',
  subsets: ['latin']
})

// Extracted a function to get the image props
const getImageProps = (image: string, alt: string) => ({
  width: 900,
  height: 400,
  src: image,
  alt,
  className: 'rounded mx-auto w-full'
})

const BlogPage = async (props: PostQuery) => {
  const post = props.post

  return (
    <div
      className={clsx(
        'max-w-xl w-full mx-auto flex flex-col space-y-5',
        ArticleFont.className
      )}>
      <div className="space-y-2">
        <time className="text-sm font-sans dark:text-slate-400 text-slate-600">
          {new Date(post.date).toDateString()}
        </time>
        <h1 className="text-3xl sm:text-5xl">{post.title}</h1>
        <p className="text-sm sm:text-base">{post?.description}</p>
        {post?.hero && <Image {...getImageProps(post.hero, post.title)} />}
      </div>
      <hr />
      <article className="dark:text-white text-zinc-900 prose prose-base md:prose-lg">
        <TinaMarkdown components={components} content={post.body} />
      </article>
    </div>
  )
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

const components: Components<any> = {
  PageSection,
  h2: (props: any) => {
    try {
      return (
        <h2 className="dark:text-white text-zinc-900">
          {props.children.props.content[0].text}
        </h2>
      )
    } catch (error) {
      return (
        <h2 className="dark:text-white text-zinc-900">
          There was an error while parsin the title
        </h2>
      )
    }
  },

  code_block: (props: any) => {
    console.log(props)

    return (
      <SyntaxHighlighter language={props.lang} style={dracula}>
        {props.value}
      </SyntaxHighlighter>
    )
  }
}
