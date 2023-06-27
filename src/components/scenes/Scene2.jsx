import { useEffect, useRef, useState } from "react"
import { Themis } from "../draco/scene2/Themis"
import { useControls } from "leva"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"
import { LeftCard } from "../draco/scene2/LeftCard"
import { Background } from "../draco/scene1/Background"
import { Environment } from "@react-three/drei"
import { MiddleCard } from "../draco/scene2/MiddleCard"
import { RightCard } from "../draco/scene2/RightCard"
import cards from "../draco/scene2/Cards"
import { Perf } from "r3f-perf"
import { CrystalBall } from "../draco/scene2/CrystalBall"

const vec = new Vector3()

const Scene2 = () => {
  const [show, setShow] = useState(false)
  const [tarots, setTarots] = useState([])
  const [cardClicked, setCardClicked] = useState({
    0: false,
    1: false,
    2: false
  })

  // const { x, y, z, intensity} = useControls({
  //   x: { value: 13.6, min: -20, max: 20, step: 0.1 },
  //   y: { value: 12.5, min: -20, max: 20, step: 0.1 },
  //   z: { value: -17.5, min: -20, max: 20, step: 0.1 },
  //   intensity: { value: 1, min: 0, max: 3, step: 0.1 },
  // })

  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.position.set(0, 5, -3) // Set the desired camera position
    }
    // set random tarots. no duplicates.
    const selected = []
    while (selected.length !== 3) {
      const random = Math.floor(Math.random() * cards.length)
      if (!selected.includes(random))
        selected.push(random)
    }
    setTarots([
      cards[selected[0]],
      cards[selected[1]],
      cards[selected[2]]
    ])
  }, [])

  useFrame(({ mouse}) => {
    vec.set(mouse.x * 1.24, mouse.y * 1.1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 2, 2)
  })
  
  const handleShow = () => {
    setShow(true)
  }

  const handleCardClicked = idx => {
    setCardClicked(prev => ({...prev, [idx]: true })) 
  }

  return (
    <> 
    <Environment
      files="sky.hdr"
      background
    />
    <Themis show={show} handleShow={handleShow} />
    { show && (
      <>
      <LeftCard cardClicked={cardClicked} handleCardClicked={handleCardClicked} url={tarots[0]} />
      <MiddleCard cardClicked={cardClicked} handleCardClicked={handleCardClicked} url={tarots[1]} />
      <RightCard cardClicked={cardClicked} handleCardClicked={handleCardClicked} url={tarots[2]} />
      </>
    )}
    { cardClicked[0] && cardClicked[1] && cardClicked[2] && (
      <CrystalBall />
    )}
    <Background />
    <directionalLight position={[13.6, 12.6, -17.5]} intensity={1}>
      <mesh><sphereGeometry args={[1]} /></mesh>
    </directionalLight>
    </>
  )
}

export default Scene2