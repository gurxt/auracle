/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\dome-draco.glb --transform scale: [0.75, 0.75, 0.75]
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

export function Dome() {
  const { nodes, materials } = useGLTF('/dome-draco-transformed.glb')
  const ref = useRef()

  useFrame(() => {
    ref.current.children[0].material.opacity = MathUtils.lerp(1, 0, 0.025)
    ref.current.children[1].material.opacity = MathUtils.lerp(1, 0, 0.025)
    ref.current.children[2].children[0].material.opacity = MathUtils.lerp(1, 0, 0.025)
    ref.current.children[2].children[1].material.opacity = MathUtils.lerp(1, 0, 0.025)
  })

  useEffect(() => {
    ref.current.children[0].material.transparent = true
    ref.current.children[1].material.transparent = true
    ref.current.children[2].children[0].material.transparent = true
    ref.current.children[2].children[1].material.transparent = true
  }, [])

  return (
    <group ref={ref} dispose={null}>
      <mesh geometry={nodes.Railing.geometry} material={materials['Black and gold marble']} position={[-0.089, -0.138, -0.208]} scale={[10.372, 0.103, 10.372]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Green marble.002']} position={[0.002, 6.203, 5.487]} scale={[8.5, 1.2, 8.5]} />
      <group position={[-0.089, -0.542, 5.473]} scale={[7.431, 0.425, 7.431]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Artificial Marble 1']} />
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.PaletteMaterial001} />
      </group>
      <mesh geometry={nodes.Roof.geometry} material={materials.PaletteMaterial002} position={[0.088, 6.636, 5.32]} scale={5} />
      <mesh geometry={nodes['Pillar-2007'].geometry} material={materials['Artificial Marble 8']} position={[5.702, -0.967, 10.977]} rotation={[0, -0.771, 0]} scale={[1.597, 1.635, 1.597]} />
      <mesh geometry={nodes.supports.geometry} material={materials.supports} position={[-3.076, 5.156, -2.992]} rotation={[0, 0.346, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/dome-draco-transformed.glb')
