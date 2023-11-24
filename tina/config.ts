import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public'
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true
          },
          {
            name: 'hero',
            type: 'image',
            label: 'Hero Image'
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            indexed: true,
            required: true
          },
          {
            label: 'Category',
            name: 'category',
            type: 'string',
            options: [
              {
                value: 'anime',
                label: 'Anime'
              },
              {
                value: 'coding',
                label: 'Coding'
              },
              {
                value: 'life',
                label: 'Life'
              },
              {
                value: 'book',
                label: 'Book'
              },
              {
                value: 'science',
                label: 'Science'
              }
            ]
          }
        ],
        indexes: [
          {
            name: 'category-date',
            fields: [{ name: 'category' }, { name: 'date' }]
          }
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/blog/${document._sys.filename}`
        }
      }
    ]
  }
})
