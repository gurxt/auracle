/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\crystal-ball-draco.glb --transform scale: [0.25, 0.25, 0.25]
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color, MathUtils, Vector3 } from 'three'
import { useDispatch, useSelector } from 'react-redux'
import { selectSceneHistory, setCurrentScene, setSceneHistory } from '../../../slices/scene'

const vec = new Vector3()
const white = new Color('white')
const black = new Color('black')

export function CrystalBall(props) {
  const { nodes, materials } = useGLTF('/crystal-ball-draco-transformed.glb')
  const [selected, setSelected] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef()
  const dispatch = useDispatch()
  const history = useSelector(selectSceneHistory)

  useFrame(({ camera }) => {
    ref.current.position.y = MathUtils.lerp(ref.current.position.y, 0.75, 0.025)
    ref.current.material.color.lerp(hovered ? black : white, 0.025)

    if (selected) {
      ref.current.position.y = MathUtils.lerp(ref.current.position.y, 3, 0.025)
      ref.current.material.color.lerp(white, 0.0125)
      vec.set(0, 0, 1)
      camera.position.lerp(vec, 0.015)
    }
  })

  const handleClick = () => {
    setTimeout(() => {
      dispatch(setCurrentScene(3))
      if (!history.some(scene => scene.sceneNumber === 3))
        dispatch(setSceneHistory([...history, { name: 'Temple of Themis', sceneNumber: 3 }]))
    }, 2000)
  }

  return (
    <group 
      {...props} 
      dispose={null}
      onClick={() => { setSelected(true) ; handleClick() }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >

      <mesh ref={ref} geometry={nodes.Icosphere.geometry} material={materials.chrome} position={[-0.12, -2, 2.5]} scale={0.5} />
    </group>
  )
}

useGLTF.preload('/crystal-ball-draco-transformed.glb')
