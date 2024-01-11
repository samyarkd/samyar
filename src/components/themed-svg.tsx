'use client'

interface ThemedHtml {
  htmlData: string
}

const ThemedSVG = ({ htmlData }: ThemedHtml) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlData }} />
}

export default ThemedSVG
