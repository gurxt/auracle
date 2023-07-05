import { Color, Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import {  useEffect, useRef, useState } from "react"
import { useControls } from "leva"
import { ThemisShrine } from "../draco/scene3/ThemisShrine"
import { CrystalBall } from "../draco/scene3/CrystalBall"
import { Asteroid } from "../draco/scene3/Asteroid"

const vec = new Vector3()

const Scene3 = () => {
  const { camera } = useThree()
  const ref = useRef()

  useEffect(() => {
    if (camera)
      camera.position.set(0, 12, 2)
  }, [])

  const [stage, setStage] = useState(3)

  useFrame(({ mouse }) => {
    // spotLight color
    ref.current.color.lerp(new Color('white'), 0.025)
    // camera position
    if (stage === 3) {
      vec.set(0, 7, 2)
      camera.lookAt(0, camera.position.y, -2)
      camera.position.lerp(vec, 0.01)
      if (camera.position.y <= 7.8) setStage(2)
    } else if (stage === 2) {
      vec.set(0, 3, 10)
      camera.lookAt(0, 4, -2)
      camera.position.lerp(vec, 0.01)
      if (camera.position.y <= 3.8) setStage(1)
    } else if (stage === 1) {
      vec.set(0, 5, 18) 
      camera.position.lerp(vec, 0.01)
      camera.lookAt(0, 6, -5)
      if (camera.position.y >= 4.6) setStage(0)
    } else {
      vec.set(-mouse.x * 2.25, -mouse.y * 2 + 4, camera.position.z)
      camera.position.lerp(vec, 0.015)
      camera.lookAt(0, 6, -5)
    }
  })

  const { x, y, z, intensity, angle } = useControls('Light', {
    x: { value: 0, min: -30, max: 30, step: 0.1 },
    y: { value: -1.7, min: -30, max: 30, step: 0.1 },
    z: { value: -3.9, min: -30, max: 30, step: 0.1 },
    intensity: { value: 1.45, min: -10, max: 10, step: 0.1 },
    angle: { value: Math.PI / 4, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  return (
      <>
      <ThemisShrine scale={1.5} />
      <CrystalBall position={[0.05, 0, -5]} scale={0.65} />
      <Asteroid scale={1.5} />
      <spotLight ref={ref} color={0x00ff00} penumbra={0.2} angle={angle} position={[x, y, z]} intensity={intensity} />
      <ambientLight intensity={0.25} />
      </>
  )
}

export default Scene3