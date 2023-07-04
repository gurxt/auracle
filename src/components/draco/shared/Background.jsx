import { Environment, Stars } from "@react-three/drei"
import { Earth } from "./Earth"
import { Moon } from "./Moon"
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { MathUtils } from "three"
import { SolarSystem } from "./SolarSystem"

const Background = () => {
  const ref = useRef()

  const { x, y, z, factor } = useControls('Stars', {
    x: { value: 10, min: -100, max: 100, step: 1 },
    y: { value: 10, min: -100, max: 100, step: 1 },
    z: { value: -20, min: -100, max: 100, step: 1 },
    factor: { value: 5, min: -100, max: 100, step: 1 },
  })

  useFrame(() => {
    ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, ref.current.rotation.y + 0.002, 0.025)
  })

  return (
    <>
      <Environment background files="sky.hdr" />
      <Earth />
      <Moon />
      <group ref={ref} rotation={[ Math.PI / 4, Math.PI / 2, 0 ]}>
        <Stars 
          count={25000}
          fade
          radius={100}
          depth={50}
          saturation={0}
          factor={factor}
          position={[x, y, z]}
        />
      </group>
    </>
  )
}

export default Background