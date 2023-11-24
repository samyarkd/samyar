import { JSDOM } from 'jsdom'
import { memo } from 'react'
import rough from 'roughjs'
import ThemedSVG from './themed-svg'

const document = new JSDOM().window.document
// TODO: make the svg so that it will be rendred in 3 sizes (sm, md, lg)
const Timeline = () => {
  function svgBubble(isDark: boolean) {
    const svgWidth = 500
    const svgHeight = 300
    const svgRef = JSDOM.fragment(
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%" overflow="auto"></svg>`
    ).firstChild as SVGSVGElement

    if (svgRef) {
      svgRef.innerHTML = ''
    } else {
      return ''
    }
    const rc = rough.svg(svgRef)

    const themeColor = isDark ? 'white' : 'black'

    const baseCol = svgWidth / 4

    const line = rc.line(0, 0, baseCol, 150, {
      stroke: themeColor
    })
    const line2 = rc.line(baseCol, 150, baseCol * 2, 150, {
      stroke: themeColor
    })
    const line3 = rc.line(baseCol * 2, 150, baseCol * 3, 150, {
      stroke: themeColor
    })
    const line4 = rc.line(baseCol * 3, 150, baseCol * 4, 0, {
      stroke: themeColor
    })
    const start = rc.circle(0, 0, 100, {
      fill: 'red',
      stroke: themeColor,
      bowing: 10
    })
    const current = rc.circle(baseCol * 4, 0, 100, {
      fill: 'red',
      stroke: themeColor,
      bowing: 10
    })
    const cr = rc.circle(baseCol, 150, 100, {
      fill: '#ff8787',
      stroke: themeColor,
      fillStyle: 'solid'
    })
    const cr2 = rc.circle(baseCol * 3, 150, 100, {
      fill: '#4dabf7',
      stroke: themeColor,
      fillStyle: 'solid'
    })

    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    let text = 'Front-end developer at Tafarda'
    title.setAttributeNS(null, 'x', baseCol.toString())
    title.setAttributeNS(null, 'y', '150')
    title.setAttributeNS(null, 'text-anchor', 'middle')
    text.split(' ').map((t, idx) => {
      const span = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'tspan'
      )
      span.innerHTML = t
      span.setAttributeNS(null, 'dy', (idx - 1).toString() + 'em')
      span.setAttributeNS(null, 'font-size', '16px')
      span.setAttributeNS(null, 'x', baseCol.toString())
      span.setAttributeNS(null, 'y', '150')
      span.setAttributeNS(null, 'text-anchor', 'middle')
      title.appendChild(span)
    })

    const year = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    year.innerHTML = '2021 - 2022'
    year.setAttributeNS(null, 'x', baseCol.toString())
    year.setAttributeNS(null, 'y', '230')
    year.setAttributeNS(null, 'text-anchor', 'middle')
    year.setAttributeNS(null, 'fill', themeColor)

    const title2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    )
    text = 'Front-end developer at DMTBox Studio'
    title2.setAttributeNS(null, 'x', (baseCol * 3).toString())
    title2.setAttributeNS(null, 'y', '150')
    title2.setAttributeNS(null, 'text-anchor', 'middle')
    text.split(' ').map((t, idx) => {
      const span = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'tspan'
      )
      span.innerHTML = t
      span.setAttributeNS(null, 'dy', (idx - 1.5).toString() + 'em')
      span.setAttributeNS(null, 'x', (baseCol * 3).toString())
      span.setAttributeNS(null, 'font-size', '16px')
      span.setAttributeNS(null, 'y', '150')
      span.setAttributeNS(null, 'text-anchor', 'middle')
      title2.appendChild(span)
    })

    const year2 = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    year2.innerHTML = '2022 - now'
    year2.setAttributeNS(null, 'x', (baseCol * 3).toString())
    year2.setAttributeNS(null, 'y', '230')
    year2.setAttributeNS(null, 'text-anchor', 'middle')
    year2.setAttributeNS(null, 'fill', themeColor)

    cr.appendChild(title)
    cr2.appendChild(title2)

    svgRef?.appendChild(line)
    svgRef?.appendChild(line2)
    svgRef?.appendChild(line3)
    svgRef?.appendChild(line4)
    svgRef?.appendChild(start)
    svgRef?.appendChild(current)
    svgRef?.appendChild(cr)
    svgRef?.appendChild(cr2)
    svgRef?.appendChild(year2)
    svgRef?.appendChild(year)

    return svgRef.outerHTML
  }

  return <ThemedSVG dark={svgBubble(true)} light={svgBubble(false)} />
}

export default memo(Timeline)
