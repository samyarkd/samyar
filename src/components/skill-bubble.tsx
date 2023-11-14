'use client'

import { skills } from '@/utils/static-data'
import * as d3 from 'd3'
import { useEffect, useRef, useState } from 'react'
import rough from "roughjs"

const SkillBubble = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const margin = 1 // to avoid clipping the root circle stroke
        const color = d3.scaleOrdinal(d3.schemeTableau10)

        const svgWidth = svgRef.current?.parentElement?.clientWidth || 900
        const svgHeight = svgWidth

        setDimensions({ width: svgWidth, height: svgHeight })

        const pack = d3.pack()
          .size([svgWidth - margin * 2, svgHeight - margin * 2])
          .padding(3)

        // @ts-expect-error
        const root = pack(d3.hierarchy<any>({ children: skills }).sum((d) => d.value).sort((a, b) => b.value - a.value))

        const rc = rough.svg(svgRef.current!)

        root.leaves().forEach((d) => {
          const cir = rc.circle(d.x, d.y, d.r * 2 - 2, {
            // @ts-expect-error
            stroke: color(d.data.category),
          })

          const text = document.createElementNS("http://www.w3.org/2000/svg", 'text')
          // @ts-expect-error
          let fontSize = Math.min((2 * d.r) / (d.data.label.length / 2), 40) // Adjusting font size based on circle radius

          if (fontSize < 14) {
            fontSize = 14
          }

          text.setAttributeNS(null, 'x', d.x.toString())
          if (60 < fontSize && fontSize <= 75) {
            text.setAttributeNS(null, 'y', (d.y + 16).toString())
          } else if (45 < fontSize && fontSize <= 60) {
            text.setAttributeNS(null, 'y', (d.y + 12).toString())

          } else if (30 < fontSize && fontSize <= 45) {
            text.setAttributeNS(null, 'y', (d.y + 8).toString())
          } else if (15 < fontSize && fontSize <= 30) {
            text.setAttributeNS(null, 'y', (d.y + 4).toString())
          } else if (fontSize < 15) {
            text.setAttributeNS(null, 'y', (d.y + 2).toString())
          } else {
            text.setAttributeNS(null, 'y', (d.y + 16).toString())
          }
          fontSize = fontSize - 4


          text.setAttributeNS(null, 'font-size', fontSize.toString())
          text.setAttributeNS(null, 'text-anchor', 'middle')

          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            text.setAttributeNS(null, 'fill', 'white')
          } else {
            text.setAttributeNS(null, 'fill', 'black')
          }

          // @ts-expect-error
          text.innerHTML = d.data.label

          cir.appendChild(text)
          svgRef.current?.appendChild(cir)
        })
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return <svg overflow='auto' width={dimensions.width} height={dimensions.height} ref={svgRef} className='overflow-scroll' />
}

export default SkillBubble
