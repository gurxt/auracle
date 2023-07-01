/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\left-mirror.glb --transform
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'

const vec = new Vector3()

export function LeftMirror({ setTransition, camera, handleClick }) {
  const { nodes, materials } = useGLTF('/left-mirror-transformed.glb')
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
      vec.set(8, camera.position.y - 3, 8.7)
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
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => { setSelected(true) ; setTransition({ value: true, look: new Vector3(8, null, 8.7)}) ; handleClick() }}
    >
      <group ref={ref} position={[7.896, 2.223, 8.745]} rotation={[Math.PI / 2, 0, -1.585]} scale={[3.012, 0.112, 2.856]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}

useGLTF.preload('/left-mirror-transformed.glb')
