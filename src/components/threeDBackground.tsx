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

    // Function to set canvas size based on the window size
    const setCanvasExtents = () => {
      w = document.body.clientWidth
      h = document.body.clientHeight
      canvas.width = w
      canvas.height = h
    }

    // Function to generate stars
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

    const stars = makeStars(1500) // Generating 10000 stars

    // Function to clear the canvas
    const clear = () => {
      if (!c) return
      c.fillStyle = 'black'
      c.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Function to draw a pixel on the canvas representing a star
    const putPixel = (x: number, y: number, brightness: number) => {
      if (!c) return
      const intensity = brightness * 255
      const rgb = `rgb(${intensity},${intensity},${intensity})`
      c.fillStyle = rgb
      c.fillRect(x, y, 1, 1)
    }

    // Function to move stars across the canvas
    const moveStars = (distance: number) => {
      const speedFactor = 0.05 // Adjust the speed factor for slower or faster movement
      const count = stars.length
      for (let i = 0; i < count; i++) {
        const s = stars[i]
        s.z -= distance * speedFactor // Reducing the distance to slow down the movement
        while (s.z <= 1) {
          s.z += 1000
        }
      }
    }

    let prevTime: number
    // Initialization function to start the animation loop
    const init = (time: number) => {
      prevTime = time
      requestAnimationFrame(tick)
    }

    // Function to update the canvas in each animation frame
    const tick = (time: number) => {
      const elapsed = time - prevTime
      prevTime = time

      moveStars(elapsed) // Moving the stars

      clear() // Clearing the canvas

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

        putPixel(x, y, b) // Drawing stars
      }

      requestAnimationFrame(tick) // Requesting the next animation frame
    }

    setCanvasExtents() // Setting initial canvas size
    window.onresize = setCanvasExtents // Updating canvas size on window resize
    requestAnimationFrame(init) // Starting the animation loop

    return () => {
      window.onresize = null // Cleanup function removing resize event listener
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 -z-10 h-screen w-screen" />
  )
}

export default StarsBackground
