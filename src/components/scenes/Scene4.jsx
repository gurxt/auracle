import { Environment, OrbitControls, Shadow, Stars } from "@react-three/drei"
import { GreekTemple } from "../draco/scene3/GreekTemple"
import { Fog, Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import {  useEffect, useState } from "react"
import { Dome } from "../draco/scene4/Dome"
import { useControls } from "leva"
import { MiddleDoor } from "../draco/scene4/MiddleDoor"
import { RightDoor } from "../draco/scene4/RightDoor"
import { LeftDoor } from "../draco/scene4/LeftDoor"

const vec = new Vector3()

const Scene4 = ({ adjust }) => {
  const { x, y, z, intensity } = useControls('Light', {
    x: { value: -25, min: -30, max: 30, step: 0.1 },
    y: { value: 1.6, min: -30, max: 30, step: 0.1 },
    z: { value: 13.1, min: -30, max: 30, step: 0.1 },
    intensity: { value: 1.45, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.position.set(0, 0.5, -1) // Set the desired camera position
    }
  }, [])

  const [isNextScene, setIsNextScene] = useState(false)

  useFrame(({ mouse }) => {
    vec.set(mouse.x * 1.35, mouse.y * 1.35 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0.336, 2.3, 14.145)
    if (!isNextScene) {
      camera.lookAt(0, 2, 4)
    }
  })

  return (
      <>
      <Environment
        files="sky.hdr"
        background
      />
      <Stars />
      <Dome />
      <ambientLight intensity={1} />
    </>
  )
}

export default Scene4