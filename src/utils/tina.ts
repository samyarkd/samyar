import client from '@/../tina/__generated__/client'

export const tinaclient = client

export async function fetchPost(params: FetchPostParams) {
  let variables = { relativePath: `${params.filename}.md` }
  const res = await client.queries.post(variables)
  return res
}


export type FetchPostParams = { filename: string }

