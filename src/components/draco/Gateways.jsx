/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\gateways-draco.glb --transform scale: [0.25, 0.25, 0.25]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gateways(props) {
  const { nodes, materials } = useGLTF('/gateways-draco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.StoneGateway003.geometry} material={materials.monastery_stone_floor} position={[3.231, 2.943, 0.029]} rotation={[Math.PI / 2, 0, 1.529]} />
    </group>
  )
}

useGLTF.preload('/gateways-draco-transformed.glb')