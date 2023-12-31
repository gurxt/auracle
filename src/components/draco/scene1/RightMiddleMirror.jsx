/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\right-middle-mirror.glb --transform
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'

const vec = new Vector3()

export function RightMiddleMirror({ setTransition, camera, handleClick }) {
  const { nodes, materials } = useGLTF('/right-middle-mirror-transformed.glb')
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const ref = useRef()

  useFrame(() => {
    ref.current.children[0].material.opacity = MathUtils.lerp(ref.current.children[0].material.opacity, hovered ? 1 : 0.2, 0.025)
    ref.current.children[1].material.opacity = MathUtils.lerp(ref.current.children[1].material.opacity, hovered ? 1 : 0.2, 0.025)

    if (selected) {
      vec.set(-3, camera.position.y - 3, 12.5)
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
      onClick={() => { setSelected(true) ; setTransition({ value: true, look: new Vector3(-3, null, 13.4)}) ; handleClick() }}
    >
      <group ref={ref} position={[-3.324, 2.223, 13.427]} rotation={[Math.PI / 2, 0, 0.028]} scale={[3.012, 0.112, 2.856]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Glass.001']} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['Glass.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/right-middle-mirror-transformed.glb')
