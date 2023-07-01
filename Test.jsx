/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\test.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/test-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Seelie} position={[-0.104, 0.144, -0.041]} scale={[2, 0.1, 2]} />
    </group>
  )
}

useGLTF.preload('/test-transformed.glb')
