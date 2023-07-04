/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\left-middle-mirror.glb --transform
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'

const vec = new Vector3()

export function LeftMiddleMirror({ setTransition, camera, handleClick }) {
  const { nodes, materials } = useGLTF('/left-middle-mirror-transformed.glb')
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const ref = useRef() 

  useFrame(() => {
    if (!selected) {
      ref.current.children[0].material.opacity = MathUtils.lerp(ref.current.children[0].material.opacity, hovered ? 1 : 0.2, 0.025)
      ref.current.children[1].material.opacity = MathUtils.lerp(ref.current.children[1].material.opacity, hovered ? 1 : 0.2, 0.025)
    } else {
      ref.current.children[0].material.opacity = MathUtils.lerp(ref.current.children[0].material.opacity, 1, 0.025)
      ref.current.children[1].material.opacity = MathUtils.lerp(ref.current.children[1].material.opacity, 1, 0.025)
      vec.set(4, camera.position.y - 3, 12)
      camera.position.lerp(vec, 0.015)
    }
  })  
  
  useEffect(() => {
    ref.current.children[0].material.transparent = true
    ref.current.children[1].material.transparent = true
  }, [])

  return (
    <group 
      dispose={null}
      onPointerOver={() => selected ? null : setHovered(true)}
      onPointerOut={() => selected ? null : setHovered(false)}
      onClick={() => { setSelected(true) ; setTransition({ value: true, look: new Vector3(4, null, 13.4)}) ; handleClick() }}
    >
      <group ref={ref} position={[-4.219, 2.223, 13.397]} rotation={[Math.PI / 2, 0, -0.681]} scale={[3.375, 0.113, 2.856]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/left-middle-mirror-transformed.glb')