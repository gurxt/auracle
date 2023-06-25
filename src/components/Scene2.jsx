import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { Model } from './draco/scene2/Scene2'
import { Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect } from "react"

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, mouse }) => {
    vec.set(-mouse.x * 1.24, -mouse.y * 1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.015)
    camera.lookAt(0, 4, 0)
  })
}

const Scene2 = () => {
  const {camera, mouse} = useThree()

  const { x, y, z, intensity } = useControls('Light', {
    x: { value: 0.6, min: -10, max: 10, step: 0.1 },
    y: { value: -3.7, min: -10, max: 10, step: 0.1 },
    z: { value: 6.8, min: -10, max: 10, step: 0.1 },
    intensity: { value: 1, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  
  return (
    <>
    <Environment
      preset="night"
      background
    />
    <Rig />    
    <Model />
    <directionalLight
      castShadow={true}
      position={[x, y, z]}
      intensity={intensity}
    >
      <mesh><sphereGeometry args={[0.25]} /></mesh>
    </directionalLight>
    </>
  )
}

export default Scene2