import { tinaclient } from '@/utils/tina'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Samyar's blog 👀",
  description: 'I write my thoughts here (^◕.◕^)'
}

// TODO: add pagination
// interface BlogSeachParams {
//   page?: string
//   cursor?: string
// }

const BlogPosts = async () => {
  const blogPosts = await tinaclient.queries.postConnection({
    sort: 'date'
  })

  // reverse the array of posts
  blogPosts.data.postConnection.edges?.reverse()

  return (
    <div className="mx-auto flex max-w-xl flex-col space-y-10">
      <h1>Blog Posts</h1>
      {blogPosts?.data.postConnection.edges?.map((p) => (
        <Link
          className="group/item space-y-4 rounded border border-solid border-gray-300 p-2 shadow shadow-white/20 transition-shadow hover:shadow-white/10"
          href={`/blog/${p?.node?._sys.filename}`}
          key={p?.node?.id}
        >
          <div className="flex flex-col items-start justify-between">
            {p?.node?.date != null && (
              <time className="text-sm">
                {new Date(p?.node?.date)
                  .toDateString()
                  .split(' ')
                  .filter((_, i) => i > 0)
                  .join(' ')}
              </time>
            )}
            <h2 className="text-3xl font-medium leading-none antialiased group-hover/item:underline ">
              {p?.node?.title as string}
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-lg">
              {p?.node?.description}{' '}
              <span className="hidden animate-pulse text-gray-400 group-hover/item:inline">
                read more...
              </span>
            </p>
            {p?.node?.hero != null && (
              <Image
                alt={p?.node?.title}
                src={p?.node?.hero}
                width={900}
                height={300}
                className="mx-auto mt-1 w-full rounded"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogPosts
export const dynamic = 'force-dynamic'
