import client from '@/../tina/__generated__/client'

export const tinaclient = client

export async function fetchPost(params: FetchPostParams) {
  const variables = { relativePath: `${params.filename}.md` }
  const res = await client.queries.post(variables)
  return res
}

export interface FetchPostParams {
  filename: string
}
