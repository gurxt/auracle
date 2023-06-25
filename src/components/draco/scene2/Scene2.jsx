/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\scene2-draco.glb --transform scale [0.25, 0.25, 0.25]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model({ handleClick }) {
  const { nodes, materials } = useGLTF('/scene2-draco-transformed.glb')
  return (
    <group onClick={handleClick} dispose={null}>
      <mesh geometry={nodes.dome.geometry} material={materials['Material.001']} position={[-0.128, 3.839, 2.079]} rotation={[-Math.PI / 2, 0, 1.571]} scale={-0.083} />
      <group position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163}>
        <mesh geometry={nodes.Plane007.geometry} material={materials['mesh.002']} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['cloth.mesh']} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['Cloth.Dark.Stripes']} />
        <mesh geometry={nodes.Plane007_3.geometry} material={materials['Cloth.Black.Leather']} />
        <mesh geometry={nodes.Plane007_4.geometry} material={materials.Leather} />
        <mesh geometry={nodes.Plane007_5.geometry} material={materials.PaletteMaterial001} />
      </group>
      <mesh geometry={nodes.ClothShoes.geometry} material={materials['Cloth.white']} position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163} />
      <group position={[0.057, 1.956, -3.636]} rotation={[-1.64, -0.012, 0.173]} scale={0.024}>
        <mesh geometry={nodes.Eye001.geometry} material={materials['Eye.001']} />
        <mesh geometry={nodes.Eye001_1.geometry} material={materials.PaletteMaterial002} />
      </group>
      <mesh geometry={nodes.EyeBrow.geometry} material={materials['Eyebrows.001']} position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163} />
      <mesh geometry={nodes.Eyelashes.geometry} material={materials['EyeLashes.001']} position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163} />
      <group position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163}>
        <mesh geometry={nodes.GIrlBasemesh005.geometry} material={materials['Face.001']} />
        <mesh geometry={nodes.GIrlBasemesh005_1.geometry} material={materials['Skin.001']} />
      </group>
      <mesh geometry={nodes.HairBraid.geometry} material={materials['Hair.001']} position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163} />
      <mesh geometry={nodes.Hairfront.geometry} material={materials['Hair.001']} position={[-0.039, 2.069, -3.659]} rotation={[0.162, -0.719, 0.345]} scale={[-0.075, 0.24, 0.24]} />
      <mesh geometry={nodes.HairCap.geometry} material={materials['Hair.002']} position={[0.01, 2.011, -3.738]} rotation={[0, 0.069, 0]} scale={0.167} />
      <group position={[0.008, 1.904, -3.762]} rotation={[0, 0.069, 0]} scale={0.163}>
        <mesh geometry={nodes.Teeth001.geometry} material={materials['Tongue.001']} />
        <mesh geometry={nodes.Teeth001_1.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Teeth001_2.geometry} material={materials.PaletteMaterial004} />
      </group>
      <mesh geometry={nodes.Hand.geometry} material={materials['Hand.001']} position={[-0.22, 1.051, -3.294]} rotation={[-1.057, -0.55, 1.712]} scale={0.163} />
    </group>
  )
}

useGLTF.preload('/scene2-draco-transformed.glb')
