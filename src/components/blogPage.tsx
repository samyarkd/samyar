import clsx from 'clsx'
import { Crete_Round } from 'next/font/google'
import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PostQuery } from '../../tina/__generated__/types'

const ArticleFont = Crete_Round({
  weight: "400",
  subsets: ["latin"]
})

// Extracted a function to get the image props
const getImageProps = (image: string, alt: string) => ({
  width: 900,
  height: 400,
  src: image,
  alt: alt,
  className: "rounded mx-auto w-full"
})

const BlogPage = async (props: PostQuery) => {
  const post = props.post

  return (
    <div className={clsx("max-w-xl w-full mx-auto flex flex-col space-y-5", ArticleFont.className)}>
      <div className="space-y-2">
        <time className='text-sm font-sans dark:text-slate-400 text-slate-600' >{new Date(post.date).toDateString()}</time>
        <h1 className="text-3xl sm:text-5xl">{post.title}</h1>
        <p className="text-sm sm:text-base">{post?.description}</p>
        {
          post?.hero &&
          <Image {...getImageProps(post.hero, post.title)} />
        }
      </div>
      <hr />
      <article className="prose-base sm:prose-lg">
        <TinaMarkdown components={components} content={post.body} />
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

