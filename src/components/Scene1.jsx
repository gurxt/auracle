import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { Background } from "./draco/scene1/Background"
import { LeftDoor } from "./draco/scene1/Left-door"
import { RightDoor } from "./draco/scene1/Right-door"
import { MiddleDoor } from "./draco/scene1/Middle-door"
import { Suspense } from "react"
import { Vector3 } from "three"
import { useFrame } from "@react-three/fiber"

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, mouse }) => {
    vec.set(-mouse.x * 1.24, -mouse.y * 1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 2, -3)
  })
}

const Scene1 = () => {
  const { x, y, z, intensity } = useControls('Light', {
    x: { value: -10.1, min: -20, max: 20, step: 0.1 },
    y: { value: -3.6, min: -20, max: 20, step: 0.1 },
    z: { value: 5.8, min: -20, max: 20, step: 0.1 },
    intensity: { value: 1.45, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })
  
  return (
      <>
      <Environment
        files="./sky.exr"
        background
      />
      <LeftDoor />
      <MiddleDoor />
      <RightDoor />
      <Background />
      <Rig />
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

export default Scene1