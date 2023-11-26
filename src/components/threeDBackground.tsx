'use client'
import { PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random'
import { useRef, useState, type ReactNode } from 'react'

export default function ThreeDBackground({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <div className="absolute left-0 top-0 -z-20 bottom-0 w-full">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      {children}
    </>
  )
}

function Stars() {
  const ref = useRef(null)
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1 })
  )
  useFrame((_, delta) => {
    if (ref?.current) {
      /* @ts-expect-error */

      ref.current.rotation.x -= delta / 10
      /* @ts-expect-error */
      ref.current.rotation.y -= delta / 15
    }
  })
  return (
    <group>
      {/* @ts-expect-error */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.0009}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
