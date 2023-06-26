import { useEffect, useRef, useState } from "react"
import { Themis } from "./draco/scene2/Themis"
import { useControls } from "leva"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"
import { LeftCard } from "./draco/scene2/LeftCard"
import { Background } from "./draco/scene1/Background"
import { Environment } from "@react-three/drei"
import { MiddleCard } from "./draco/scene2/MiddleCard"
import { RightCard } from "./draco/scene2/RightCard"

const vec = new Vector3()

const Scene2 = () => {
  const [show, setShow] = useState(false)
  const { x, y, z, intensity} = useControls({
    x: { value: 13.6, min: -20, max: 20, step: 0.1 },
    y: { value: 12.5, min: -20, max: 20, step: 0.1 },
    z: { value: -17.5, min: -20, max: 20, step: 0.1 },
    intensity: { value: 1, min: 0, max: 3, step: 0.1 },
  })

  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.position.set(0, 5, -4) // Set the desired camera position
    }
  }, [])

  useFrame(({ mouse}) => {
    vec.set(mouse.x * 1.24, mouse.y * 1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 2, 2)
  })
  
  const handleShow = () => {
    setShow(true)
  }

  return (
    <> 
    <Environment
      files="./sky.exr"
      background
    />
    <Themis show={show} handleShow={handleShow} />
    { show && (
      <>
      <LeftCard />
      <MiddleCard />
      <RightCard />
      </>
    )}
    <Background />
    <directionalLight intensity={intensity} position={[x, y, z]}>
      <mesh><sphereGeometry args={[1]} /></mesh>
    </directionalLight>
    </>
  )
}

export default Scene2