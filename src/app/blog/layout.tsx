import Content from '@/components/content'
import BlogTransition from '@/components/transition'
import { type ReactNode } from 'react'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Content>
      <BlogTransition>{children}</BlogTransition>
    </Content>
  )
}

export default BlogLayout
