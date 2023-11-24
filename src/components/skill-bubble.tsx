import { type TSkill } from '@/utils/static-data'
import * as d3 from 'd3'
import { JSDOM } from 'jsdom'
import { memo } from 'react'
import rough from 'roughjs'

const document = new JSDOM().window.document

const SkillBubble = ({ skills }: { skills: TSkill[] }) => {
  const svgWidth = 900
  const svgHeight = 750
  const svgRef = JSDOM.fragment(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%" overflow="auto"></svg>`
  ).firstChild as SVGSVGElement

  if (!svgRef) {
    return <h1>SVG was not found</h1>
  }

  try {
    const margin = 1 // to avoid clipping the root circle stroke
    const color = d3.scaleOrdinal(d3.schemeTableau10)

    const pack = d3
      .pack()
      .size([svgWidth - margin * 2, svgHeight - margin * 2])
      .padding(2)

    const root = pack(
      d3
        .hierarchy<any>({
          children: skills
        })
        .sum((d) => d.value)
        // @ts-expect-error
        .sort((a, b) => b.value - a.value)
    )

    const rc = rough.svg(svgRef)

    root.leaves().forEach((d) => {
      const cir = rc.circle(d.x, d.y, d.r * 2 - 2, {
        // @ts-expect-error

        stroke: color(d.data.category)
      })

      const text = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text'
      )
      const name = (d.data as TSkill).label.split('-')
      const TName = (d.data as TSkill).label.split('-')

      /* Adjusting font size based on circle radius */
      let fontSize

      fontSize = Math.min(
        (2 * d.r) / (TName.sort((a, b) => b.length - a.length)[0].length / 2.2),
        30
      )

      if (fontSize < 14) {
        fontSize = 14
      }

      text.setAttributeNS(null, 'x', d.x.toString())
      if (fontSize > 60 && fontSize <= 75) {
        text.setAttributeNS(null, 'y', (d.y + 16).toString())
      } else if (fontSize > 45 && fontSize <= 60) {
        text.setAttributeNS(null, 'y', (d.y + 12).toString())
      } else if (fontSize > 30 && fontSize <= 45) {
        text.setAttributeNS(null, 'y', (d.y + 8).toString())
      } else if (fontSize > 15 && fontSize <= 30) {
        text.setAttributeNS(null, 'y', (d.y + 4).toString())
      } else if (fontSize < 15) {
        text.setAttributeNS(null, 'y', (d.y + 2).toString())
      } else {
        text.setAttributeNS(null, 'y', (d.y + 16).toString())
      }
      fontSize = fontSize - 4

      text.setAttributeNS(null, 'font-size', fontSize.toString())
      text.setAttributeNS(null, 'text-anchor', 'middle')

      text.setAttributeNS(null, 'fill', 'white')

      if (name.length > 1) {
        name.forEach((n, idx) => {
          const tspan = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'tspan'
          )
          tspan.setAttributeNS(null, 'x', d.x.toString())
          tspan.setAttributeNS(null, 'y', d.y.toString())
          tspan.setAttributeNS(null, 'dy', `${idx}em`)

          tspan.innerHTML = n

          text.appendChild(tspan)
        })
      } else {
        text.innerHTML = name[0]
      }

      cir.appendChild(text)
      svgRef?.appendChild(cir)
    })
  } catch (error) {
    console.error('Error:', error)
  }

  return <div dangerouslySetInnerHTML={{ __html: svgRef.outerHTML }} />
}

// we will use the cached one if the skill data has not changed
export default memo(SkillBubble)
