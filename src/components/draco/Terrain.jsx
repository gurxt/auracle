/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\terrain-draco.glb --transform scale: [0.25, 0.25, 0.25]
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Terrain(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/terrain-draco-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="EXPORT_GOOGLE_SAT_WM" position={[33.708, -16.918, 0.783]} rotation={[-1.397, 0.99, 1.36]} scale={0.019}>
          <mesh name="EXPORT_GOOGLE_SAT_WM001_1" geometry={nodes.EXPORT_GOOGLE_SAT_WM001_1.geometry} material={materials.coast_sand_rocks_02} />
          <mesh name="EXPORT_GOOGLE_SAT_WM001_2" geometry={nodes.EXPORT_GOOGLE_SAT_WM001_2.geometry} material={materials.coast_sand_rocks_02} />
        </group>
        <group name="EXPORT_GOOGLE_SAT_WM001" position={[19.742, -19.49, 2.242]} rotation={[2.357, -1.4, 2.42]} scale={0.019}>
          <mesh name="EXPORT_GOOGLE_SAT_WM001_1" geometry={nodes.EXPORT_GOOGLE_SAT_WM001_1.geometry} material={materials.coast_sand_rocks_02} />
          <mesh name="EXPORT_GOOGLE_SAT_WM001_2" geometry={nodes.EXPORT_GOOGLE_SAT_WM001_2.geometry} material={materials.coast_sand_rocks_02} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/terrain-draco-transformed.glb')