import { Environment } from "@react-three/drei"
import { GreekTemple } from "../draco/scene3/GreekTemple"
import { Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import {  useEffect } from "react"

const vec = new Vector3()

const Scene3 = ({ adjust }) => {
  // const { x, y, z, intensity } = useControls('Light', {
  //   x: { value: -25, min: -30, max: 30, step: 0.1 },
  //   y: { value: 1.6, min: -30, max: 30, step: 0.1 },
  //   z: { value: 13.1, min: -30, max: 30, step: 0.1 },
  //   intensity: { value: 1.45, min: -10, max: 10, step: 0.1 },
  //   castShadow: true
  // })

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
        files="/sky.hdr"
        background
      />
      <GreekTemple />
      <directionalLight
        position={[-25, 1.6, 13.1]}
        intensity={1.45}
        castShadow={true}
      >
      </directionalLight>
      <ambientLight intensity={0.25}/>
      </>
  )
}

export default Scene3