import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import './App.css'
import { useControls } from 'leva'
import { Wednesday } from './components/draco/Wednesday'
import { Gateways } from './components/draco/Gateways'
import { Floor } from './components/draco/Floor'

const App = () => {
  const { show } = useControls('Helpers', {
    show: true
  })

  const { x, y, z, intensity }= useControls('Camera', {
    x: { value: -2, min: -10, max: 10, step: 0.1 },
    y: { value: 2, min: -10, max: 10, step: 0.1 },
    z: { value: -2, min: -10, max: 10, step: 0.1 },
    intensity: { value: 1, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  return (
    <main className="app">
      <Canvas camera={{ position: [0, 0, 3] }} shadows>
        <pointLight
          castShadow={true}
          position={[x, y, z]}
          intensity={intensity}
        >
          <mesh><sphereGeometry args={[0.25]} /></mesh>
        </pointLight>
        <Wednesday receiveShadow={true} />
        <Gateways receiveShadow={true} />
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI /2}/>
        { show && (
          <>
          <gridHelper args={[20, 20, 0xff0000, 'teal']} />
          <axesHelper args={[10]} />
          <Stats />
          </>
        )}
        <Floor scale={10} />
      </Canvas>
    </main>
  )
}

export default App