import React, { useEffect, useRef } from 'react'

const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const c = canvas.getContext('2d')
    if (!c) return

    let w: number
    let h: number

    const setCanvasExtents = () => {
      w = document.body.clientWidth
      h = document.body.clientHeight
      canvas.width = w
      canvas.height = h
    }

    const makeStars = (count: number) => {
      const out: Array<{ x: number; y: number; z: number }> = []
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000
        }
        out.push(s)
      }
      return out
    }

    const stars = makeStars(10000)

    const clear = () => {
      if (!c) return
      c.fillStyle = 'black'
      c.fillRect(0, 0, canvas.width, canvas.height)
    }

    const putPixel = (x: number, y: number, brightness: number) => {
      if (!c) return
      const intensity = brightness * 255
      const rgb = `rgb(${intensity},${intensity},${intensity})`
      c.fillStyle = rgb
      c.fillRect(x, y, 1, 1)
    }

    const moveStars = (distance: number) => {
      const count = stars.length
      for (let i = 0; i < count; i++) {
        const s = stars[i]
        s.z -= distance * 0.05 // Adjust the speed here by reducing the distance
        while (s.z <= 1) {
          s.z += 1000
        }
      }
    }

    let prevTime: number
    const init = (time: number) => {
      prevTime = time
      requestAnimationFrame(tick)
    }

    const tick = (time: number) => {
      const elapsed = time - prevTime
      prevTime = time

      moveStars(elapsed)

      clear()

      const cx = w / 2
      const cy = h / 2

      const count = stars.length
      for (let i = 0; i < count; i++) {
        const star = stars[i]

        const x = cx + star.x / (star.z * 0.001)
        const y = cy + star.y / (star.z * 0.001)

        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue
        }

        const d = star.z / 1000.0
        const b = 1 - d * d

        putPixel(x, y, b)
      }

      requestAnimationFrame(tick)
    }

    setCanvasExtents()
    window.onresize = setCanvasExtents
    requestAnimationFrame(init)

    return () => {
      window.onresize = null
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 -z-10"
      style={{
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0
      }}></canvas>
  )
}

export default StarsBackground
