import { Environment, OrbitControls, Shadow, Stars } from "@react-three/drei"
import { Fog, Vector3 } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import {  useEffect, useState } from "react"
import { Dome } from "../draco/scene1/Dome"
import { useControls } from "leva"
import { LeftMirror } from "../draco/scene1/LeftMirror"
import { LeftMiddleMirror } from "../draco/scene1/LeftMiddleMirror"
import { RightMiddleMirror } from "../draco/scene1/RightMiddleMirror"
import { RightMirror } from "../draco/scene1/RightMirror"
import { useDispatch, useSelector } from "react-redux"
import { selectSceneHistory, setCurrentScene, setSceneHistory } from "../../slices/scene"

const vec = new Vector3()

const Scene1 = ({ adjust }) => {
  const [transition, setTransition] = useState({ value: false, look: null })
  const { x, y, z, intensity, angle, penumbra } = useControls('Light', {
    x: { value: 0, min: -20, max: 20, step: 0.1 },
    y: { value: 6.7, min: -20, max: 20, step: 0.1 },
    z: { value: 8.5, min: -20, max: 20, step: 0.1 },
    intensity: { value: 0.5, min: -10, max: 10, step: 0.1 },
    angle: { value: -1.1, min: -10, max: 10, step: 0.1 },
    penumbra: { value: 0.2, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  const dispatch = useDispatch()
  const history = useSelector(selectSceneHistory)
  const { camera } = useThree()

  const handleClick = () => {
    setTimeout(() => {
      dispatch(setCurrentScene(2))
      if (!history.some(scene => scene.sceneNumber === 2))
        dispatch(setSceneHistory([...history, { name: 'The Auracle', sceneNumber: 2 }]))
    }, 1500)
  }

  useEffect(() => {
    if (camera) {
      camera.position.set(2, 4, -1) // Set the desired camera position
    }
  }, [])


  useFrame(({ mouse }) => {
    vec.set(mouse.x * 0.75, mouse.y * 1 + 2.5, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 2, 2)
    if (transition.value)
      camera.lookAt(transition.look.x, 2, transition.look.z)
  })

  return (
      <>
      <Environment files="sky.hdr" background />
      <Stars />
      <Dome transition={transition.value} />
      <LeftMirror        camera={camera} setTransition={setTransition} handleClick={handleClick} />
      <LeftMiddleMirror  camera={camera} setTransition={setTransition} handleClick={handleClick} />
      <RightMiddleMirror camera={camera} setTransition={setTransition} handleClick={handleClick} />
      <RightMirror       camera={camera} setTransition={setTransition} handleClick={handleClick} />
      <spotLight
        position={[x, y, z]}
        intensity={intensity}
        penumbra={penumbra}
        angle={angle}
      >
        <mesh><sphereGeometry /></mesh>
      </spotLight>
      <ambientLight intensity={0.2} />
    </>
  )
}

export default Scene1