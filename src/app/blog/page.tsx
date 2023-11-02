import Content from "@/components/content"
import { fetchEntries } from "@/utils/contentful"

const Blog = async () => {
  const blogPosts = await fetchEntries()
  console.log(blogPosts[0].fields)

  return (
    <Content >
      <div>
        {
          blogPosts?.map(p => <div key={p.sys.id}>
            <strong >{p.fields.title as string}</strong>
            <p>{p.fields.description as string}</p>
          </div>
          )
        }
      </div>
    </Content>
  )
}

export default Blog
