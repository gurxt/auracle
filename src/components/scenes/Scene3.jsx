import { Color, Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import {  useEffect, useRef } from "react"
import { useControls } from "leva"
import { ThemisShrine } from "../draco/scene3/ThemisShrine"
import { CrystalBall } from "../draco/scene3/CrystalBall"
import { GlassCards } from "../draco/scene3/GlassCards"
import { Asteroid } from "../draco/scene3/Asteroid"

const vec = new Vector3()

const Scene3 = () => {
  const { camera } = useThree()
  const ref = useRef()

  useEffect(() => {
    camera.position.set(-5, 25, -5)
  }, [])

  useFrame(({ mouse }) => {
    // spotLight color
    ref.current.color.lerp(new Color('white'), 0.025)
    // camera position
    if (camera.position.y > 14) {
      vec.set(0, 12, 7)
      camera.position.lerp(vec, 0.015)
    } else {
      vec.set(-mouse.x * 1.1, -mouse.y * 1 + 1, camera.position.z)
      camera.position.lerp(vec, 0.025)
    }
    camera.lookAt(0, 1, 0)
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
      <ThemisShrine position={[0, -2.5, 0]} scale={2} />
      <CrystalBall position={[0.05, 0, -5]} scale={0.65} />
      <Asteroid scale={2} position={[0, 2.5, 0]} />
      <GlassCards />
      <spotLight ref={ref} color={0x00ff00} penumbra={0.2} angle={angle} position={[x, y, z]} intensity={intensity}>
        <mesh scale={0.4}><sphereGeometry /></mesh>
      </spotLight>
      <ambientLight intensity={0.25} />
      </>
  )
}

export default Scene3