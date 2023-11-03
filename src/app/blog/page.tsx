import { fetchEntries } from "@/utils/contentful"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Samyar's blog 👀",
  description: "I write my thoughts here (^◕.◕^)"
}

const Blog = async () => {
  const blogPosts = await fetchEntries()

  return (
    <div className="flex flex-col space-y-10 max-w-xl mx-auto">
      {
        blogPosts?.map(p => <Link className="border p-2 rounded border-solid border-gray-300 group/item" href={`/blog/${p.sys.id}/${p.fields.slug as string}`} key={p.sys.id}>
          <h2><strong className="group-hover/item:underline">{p.fields.title as string}</strong></h2>
          <p>{p.fields.description as string} <span className="hidden animate-pulse group-hover/item:inline text-gray-400">read more...</span></p>
          {
            (p.fields as any).thumbnail &&
            <Image
              alt={(p.fields as any).thumbnail?.fields?.title}
              src={'https:' + (p.fields as any).thumbnail?.fields?.file?.url}
              width={(p.fields as any).thumbnail?.fields?.file?.details?.image?.width}
              height={(p.fields as any).thumbnail?.fields?.file?.details?.image?.height}
              className="rounded mx-auto w-full mt-1"
            />
          }
        </Link>
        )
      }
    </div>
  )
}

export default Blog
export const revalidate = 0
