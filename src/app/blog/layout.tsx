import Content from '@/components/content'
import { type ReactNode } from 'react'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return <Content>{children}</Content>
}

export default BlogLayout
