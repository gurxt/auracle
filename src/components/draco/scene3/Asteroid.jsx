/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\asteroid-body-draco.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Asteroid(props) {
  const { nodes, materials } = useGLTF('/asteroid-body-draco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Asterioid_Body.geometry} material={materials['Asteroid Rock.002']} position={[0.011, -12.319, 3.686]} scale={16} />
    </group>
  )
}

useGLTF.preload('/asteroid-body-draco-transformed.glb')
