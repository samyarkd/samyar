'use client'

import { useRouter } from 'next/navigation'
import { type PageInfo } from '../../tina/__generated__/types'

const BlogsNavigation = ({
  pageInfo,
  current
}: {
  pageInfo: PageInfo
  current: number
}) => {
  const navigation = useRouter()

  return (
    <div>
      <hr />
      <button
        onClick={() => {
          navigation.push(
            `/blog?page=${current + 1}&cursor=${pageInfo.startCursor}`
          )
        }}
        className="disabled:cursor-not-allowed"
        disabled={!pageInfo.hasNextPage}>
        Next
      </button>

      <hr />
      <button
        onClick={() => {
          navigation.push(
            `/blog?page=${current - 1}&cursor=${pageInfo.endCursor}`
          )
        }}
        className="disabled:cursor-not-allowed"
        disabled={pageInfo.endCursor === null}>
        Prev
      </button>
    </div>
  )
}

export default BlogsNavigation
