import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { MathUtils, Vector3 } from "three"

const vec = new Vector3() 

const Scene2 = () => {
  const [selected, setSelected] = useState(false)
  const ref = useRef() 

  useFrame(({ camera, mouse }) => {
    vec.set(mouse.x * 1.24, mouse.y * 1 + 3, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 1, 0)

    console.log(camera.position)

    ref.current.position.x = selected 
      ? MathUtils.lerp(ref.current.position.x, camera.position.x, 0.025)
      : MathUtils.lerp(ref.current.position.x, 4, 0.025)

    ref.current.position.y = selected 
      ? MathUtils.lerp(ref.current.position.y, camera.position.y - 0.5, 0.025)
      : MathUtils.lerp(ref.current.position.y, 0.5, 0.025)

    ref.current.position.z = selected 
      ? MathUtils.lerp(ref.current.position.z, camera.position.z + 2, 0.025)
      : MathUtils.lerp(ref.current.position.z, 0, 0.025)
  })

  return (
    <>
    <gridHelper args={[15, 15]} />
    <axesHelper args={[5]} />
    <mesh 
      ref={ref} 
      onClick={() => setSelected(!selected)}
      position={[4, 0.5, 0]}
    >
      <boxGeometry args={[1, 1]} />
      <meshBasicMaterial color='red' wireframe />
    </mesh>
    </>
  )
}

export default Scene2