// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// @ts-nocheck
// This is a demo file once you have tina setup feel free to delete this file

import client from '@/../tina/__generated__/client'
import BlogPage from '@/components/blogPage'

const Page = async () => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params.filename}.md` }
  try {
    const res = await client.queries.post(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    // swallow errors related to document creation
  }

  return (
    <BlogPage data={data} query={query} variables={variables} />
  )
}

export default Page
