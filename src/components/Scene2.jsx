import { useRef } from "react"
import { Themis } from "./draco/scene2/Themis"
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

const vec = new Vector3()

const Scene2 = () => {
  const ref = useRef()
  const { x, y, z, intensity} = useControls({
    x: { value: 13.6, min: -20, max: 20, step: 0.1 },
    y: { value: 12.5, min: -20, max: 20, step: 0.1 },
    z: { value: -17.5, min: -20, max: 20, step: 0.1 },
    intensity: { value: 1, min: 0, max: 3, step: 0.1 },
  })

  useFrame(({ camera, mouse}) => {
    vec.set(-mouse.x * 1.24, -mouse.y * 1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 1, 0)
  })

  return (
    <>
    <gridHelper args={[15, 15]} />
    <axesHelper args={[5]} />
    <directionalLight intensity={intensity} position={[x, y, z]}>
      <mesh>
        <sphereGeometry args={[1]} />
      </mesh>
    </directionalLight>
    <Themis />
    </>
  )
}

export default Scene2