import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { Background } from "./draco/scene1/Background"
import { LeftDoor } from "./draco/scene1/Left-door"
import { RightDoor } from "./draco/scene1/Right-door"
import { MiddleDoor } from "./draco/scene1/Middle-door"

const Scene1 = () => {
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
    <OrbitControls
      target={[0, 1, 0]}
      enablePan={false}
      enableZoom={false}
      minAzimuthAngle={-Math.PI / 2 }
      maxAzimuthAngle={Math.PI / 2 }
      maxPolarAngle={Math.PI / 2}
    />
    </>
  )
}

export default Scene1