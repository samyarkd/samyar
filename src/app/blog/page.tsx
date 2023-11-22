import { tinaclient } from "@/utils/tina"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Samyar's blog 👀",
  description: "I write my thoughts here (^◕.◕^)"
}

interface BlogSeachParams {
  page?: string
  cursor?: string
}
const BlogPosts = async ({ }: { searchParams: BlogSeachParams }) => {
  const blogPosts = await tinaclient.queries.postConnection({
    sort: 'date',
  })

  // reverse the array of posts
  blogPosts.data.postConnection.edges?.reverse()

  return (
    <div className="flex flex-col space-y-10 max-w-xl mx-auto">
      {
        blogPosts?.data.postConnection.edges?.map(p => <Link className="border p-2 space-y-4 rounded border-solid border-gray-500/50 shadow hover:shadow-xl dark:shadow-white/20 dark:hover:shadow-white/10 dark:border-gray-300 transition-shadow group/item" href={`/blog/${p?.node?._sys.filename}`} key={p?.node?.id}>
          <div className="flex flex-col items-start justify-between">
            {p?.node?.date && <time className="text-sm">{new Date(p?.node?.date).toDateString().split(' ').filter((_, i) => i > 0).join(' ')}</time>}
            <h2 className="font-medium antialiased leading-none text-3xl group-hover/item:underline ">{p?.node?.title as string}</h2>
          </div>
          <div>
            <p className="text-sm md:text-lg">
              {p?.node?.description}
              {" "}
              <span className="hidden animate-pulse group-hover/item:inline text-gray-400">read more...</span>
            </p>
            {
              p?.node?.hero &&
              <Image
                alt={p?.node?.title}
                src={p?.node?.hero}
                width={900}
                height={300}
                className="rounded mx-auto w-full mt-1"
              />
            }
          </div>
        </Link>
        )
      }
    </div>
  )
}

export default BlogPosts

export const revalidate = 0
