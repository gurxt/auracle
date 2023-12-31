/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\asterioid-bits-draco.glb --transform
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

export function AsteroidBits(props) {
  const { nodes, materials } = useGLTF('/asterioid-bits-draco-transformed.glb')
  const ref = useRef()
  const [delta, setDelta] = useState(0.1)

  useFrame(() => {
    ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, ref.current.rotation.y + 0.01, 0.025)
    ref.current.position.y = MathUtils.lerp(ref.current.position.y, ref.current.position.y + delta, 0.025)
    if (ref.current.position.y > -2)
      setDelta(-0.01)
    if (ref.current.position.y < -4)
      setDelta(0.01)
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} geometry={nodes.Asterioid_Bit001.geometry} material={materials['Asteroid Rock']} position={[-0.641, -0.688, -0.317]} rotation={[-0.123, 0.349, 0.85]} scale={[0.514, 0.316, 0.514]} />
    </group>
  )
}

useGLTF.preload('/asterioid-bits-draco-transformed.glb')
