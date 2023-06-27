/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\middle-door.glb --transform scale [0.25, 0.25, 0.25]
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color, MathUtils, Vector3 } from 'three'
import { useDispatch, useSelector } from 'react-redux'
import { selectSceneHistory, setCurrentScene, setSceneHistory } from '../../../slices/scene'

const vec = new Vector3()
const black = new Color('black')
const white = new Color('white')

export function MiddleDoor(props) {
  const { nodes, materials } = useGLTF('/middle-door-transformed.glb')
  const mirrorRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const history = useSelector(selectSceneHistory)

  useFrame(({ camera }) => {
    mirrorRef.current.children[0].material.color.lerp(hovered ? black : white, 0.025)

    if (selected) {
      vec.set(0, 0, -9.44)
      camera.position.lerp(vec, 0.015)
    }
  })

  const handleClick = () => {
    setTimeout(() => {
      dispatch(setCurrentScene(2))
      if (!history.some(scene => scene.sceneNumber === 2))
        dispatch(setSceneHistory([...history, { name: 'The Auracle', sceneNumber: 2 }]))
    }, 1500)
  }

  return (
    <group 
      onClick={() => { setSelected(true) ; handleClick()}}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)} 
      {...props} 
      dispose={null}
    >
      <mesh geometry={nodes.StoneGateway003.geometry} material={materials['monastery_stone_floor.003']} position={[-0.02, 2.529, -8.927]} rotation={[-Math.PI / 2, 0, 0.033]} scale={-1} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.007']} position={[-0.237, 3.259, -8.633]} rotation={[0, -0.104, 0]} />
      <group ref={mirrorRef} position={[-0.018, -0.482, -8.895]} rotation={[-0.002, 0.003, -0.026]} scale={6.655}>
        <mesh geometry={nodes.mesh001.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.mesh001_1.geometry} material={materials.PaletteMaterial002} />
      </group>
    </group>
  )
}

useGLTF.preload('/middle-door-transformed.glb')
