import { createClient } from "contentful"

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

if (!space || !accessToken) {
  throw new Error("Wrong environment variables")
}

const client = createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: 'undefined',
    select: ['fields.title', 'fields.description', "fields.slug", "fields.thumbnail"],
    order: ["-sys.createdAt"]
  })
  if (entries.items) return entries.items
}

export async function fetchEntry(id: string) {
  const entry = await client.getEntry(id)

  if (entry) return entry
  return null
}

