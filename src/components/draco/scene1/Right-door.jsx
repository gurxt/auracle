/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\right-door.glb --transform scale [0.25, 0.25, 0.25]
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { MathUtils, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { setCurrentScene } from '../../../slices/scene'
import { useDispatch } from 'react-redux'

export function RightDoor(props) {
  const { nodes, materials } = useGLTF('/right-door-transformed.glb')
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch() 

  useFrame(({ camera }) => {
    ref.current.position.z = hovered
      ? MathUtils.lerp(ref.current.position.z, ref.current.position.z - (ref.current.position.z + 0.5) % 0.5, 0.025)
      : MathUtils.lerp(ref.current.position.z, -7.44, 0.025)
    ref.current.position.x = hovered
      ? MathUtils.lerp(ref.current.position.x, ref.current.position.x - (ref.current.position.x + 0.5) % 0.5, 0.025)
      : MathUtils.lerp(ref.current.position.x, 4.918, 0.025)
      
    const vec = new Vector3()
    
    if (selected) {
      vec.set(4.918, 0, -7.44)
      camera.position.lerp(vec, 0.025)
      setTimeout(() => {
        dispatch(setCurrentScene(2))
      }, 1000)
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh 
          ref={ref}
          onPointerDown={() => setSelected(true)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)} 
          geometry={nodes.StoneGateway001.geometry} material={materials['monastery_stone_floor.001']} position={[4.918, 2.529, -7.44]} rotation={[-Math.PI / 2, 0, -0.741]} scale={-1} />
    </group>
  )
}

useGLTF.preload('/right-door-transformed.glb')