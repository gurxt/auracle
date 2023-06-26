/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\themis-draco.glb --transform scale [0.25, 0.25, 0.25]
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'

const vec = new Vector3()

export function Themis(props) {
  const [selected, setSelected] = useState(false)
  const ref = useRef() 

  useFrame(({ camera }) => {
    ref.current.position.y = selected 
      ? MathUtils.lerp(ref.current.position.y, camera.position.y - 8, 0.015)
      : MathUtils.lerp(ref.current.position.y, -1.30, 0.025)

    if (selected)
      props.handleShow()
  })

  useEffect(() => {
    ref.current.rotation.y += Math.PI
    ref.current.position.y = MathUtils.lerp(ref.current.position.y, -1.30, 0.025)
  }, [])

  const { nodes, materials } = useGLTF('/themis-draco-transformed.glb')
  
  return (
    <group 
      onClick={() => setSelected(!selected)}
      scale={[1.5, 1.5, 1.5]} position={[-0.2, -8, 2]} ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.PEDESTAL.geometry} material={materials['Material.008']} position={[-0.012, 0.305, -0.094]} scale={[0.37, 0.316, 0.37]} />
      <mesh geometry={nodes.Chains.geometry} material={materials['Material.007']} position={[0.013, 2.461, 0.054]} rotation={[-0.391, 0.053, 0.008]} scale={0.017} />
      <mesh geometry={nodes.Themis_Sculpture.geometry} material={materials['Material.006']} />
    </group>
  )
      
}

useGLTF.preload('/themis-draco-transformed.glb')
