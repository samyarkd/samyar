// @ts-nocheck
'use client'
import { PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random'
import { useRef, useState, type MutableRefObject } from 'react'

const page = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 top-0 w-full">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
    </>
  )
}

function Stars() {
  const ref = useRef<MutableRefObject<undefined>>()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  )
  useFrame((_, delta) => {
    if (ref?.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default page
