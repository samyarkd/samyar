import clsx from 'clsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { TinaMarkdown, type Components } from 'tinacms/dist/rich-text'
import { type PostQuery } from '../../tina/__generated__/types'
import TransitionHelper from './transition/transition-helper'
import MotionImage from './transition/motion-image'

// Extracted a function to get the image props
const getImageProps = (image: string, alt: string) => ({
  src: image,
  alt,
  className: 'mx-auto mt-1 w-full rounded'
})

const BlogPage = async (props: PostQuery) => {
  const post = props.post

  return (
    <div className={clsx('mx-auto flex w-full max-w-xl flex-col space-y-5')}>
      <div className="space-y-2">
        <TransitionHelper layout="position" layoutId={post._sys.filename}>
          <time className="font-sans text-sm text-slate-400">
            {new Date(post.date)
              .toDateString()
              .split(' ')
              .filter((_, i) => i > 0)
              .join(' ')}
          </time>

          <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base">{post?.description}</p>
        </TransitionHelper>
        {post?.hero && (
          <MotionImage
            layoutId={post.hero}
            {...getImageProps(post.hero, post.title)}
          />
        )}
      </div>
      <hr />
      <article className="prose prose-base prose-zinc prose-invert md:prose-lg">
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
        <h2 className="text-white">{props.children.props.content[0].text}</h2>
      )
    } catch (error) {
      return (
        <h2 className="text-white">
          There was an error while parsin the title
        </h2>
      )
    }
  },

  code_block: (props: any) => {
    return (
      <SyntaxHighlighter language={props.lang} style={dracula}>
        {props.value}
      </SyntaxHighlighter>
    )
  }
}
