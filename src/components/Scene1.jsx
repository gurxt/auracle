import { Environment } from "@react-three/drei"
import { useControls } from "leva"
import { Background } from "./draco/scene1/Background"
import { LeftDoor } from "./draco/scene1/Left-door"
import { RightDoor } from "./draco/scene1/Right-door"
import { MiddleDoor } from "./draco/scene1/Middle-door"
import { Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"

const vec = new Vector3()

const Scene1 = ({ adjust }) => {
  const { x, y, z, intensity } = useControls('Light', {
    x: { value: -10.1, min: -20, max: 20, step: 0.1 },
    y: { value: -3.6, min: -20, max: 20, step: 0.1 },
    z: { value: 5.8, min: -20, max: 20, step: 0.1 },
    intensity: { value: 1.45, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.position.set(4, 1, 2) // Set the desired camera position
    }
  }, [])

  useFrame(({ mouse }) => {
    vec.set(-mouse.x * 1.24, -mouse.y * 1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 2, -3)
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