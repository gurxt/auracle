import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { MathUtils, TextureLoader, Vector3 } from 'three'
import * as THREE from 'three'

const vec = new Vector3()

export function MiddleCard(props) {
  const [selected, setSelected] = useState(false)
  const ref = useRef() 
  const {x , y, z, rotation } = { 
    x: -0.2,
    y: -2.5,
    z: 5,
    rotation: Math.PI
  }

  useFrame(() => {
    ref.current.position.y = MathUtils.lerp(ref.current.position.y, 2.85, 0.025)

    ref.current.rotation.y = selected
      ? MathUtils.lerp(ref.current.rotation.y, 0, 0.025)
      : MathUtils.lerp(ref.current.rotation.y, rotation, 0.025)
    })

  const fool_card = useLoader(TextureLoader, '../src/assets/tarots/0_TheFool.jpg')
  const back_card = useLoader(TextureLoader, '../src/assets/tarots/back.jpg')
  const fool = new THREE.MeshBasicMaterial({ map: fool_card })
  const back = new THREE.MeshBasicMaterial({ map: back_card })
  const black = new THREE.MeshBasicMaterial({ color: 'black' })

  return (
    <mesh 
      ref={ref} 
      material={[ black, black, black, black, back, fool, black, black ]}
      name="meshBasicMaterial"
      rotation={[0, rotation, 0]} 
      position={[x, y, z]}
      onClick={() => setSelected(!selected)}
    >
      <boxGeometry args={[3, 4.5, 0.05]} />
    </mesh>
  )
}