import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { useControls } from 'leva'
import { Wednesday } from './components/draco/Wednesday'
import { Terrain } from './components/draco/Terrain'
import { Dome } from './components/draco/Dome'
import { Doors } from './components/draco/Doors'

const App = () => {
  const { show } = useControls('Helpers', {
    show: false
  })

  const { x, y, z, intensity } = useControls('Light', {
    x: { value: -10, min: -10, max: 10, step: 0.1 },
    y: { value: 4.7, min: -10, max: 10, step: 0.1 },
    z: { value: 1.4, min: -10, max: 10, step: 0.1 },
    intensity: { value: 1, min: -10, max: 10, step: 0.1 },
    castShadow: true
  })

  return (
    <main className="app">
      <Canvas camera={{ position: [-4, 2, 0] }} shadows>
        <Wednesday />
        <Doors position={[0, -1, 0]}/>
        <Dome position={[0, -0.85, 0]}/>
        <Terrain /> 
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
          maxPolarAngle={Math.PI / 2}
        />
        { show && (
          <>
          <gridHelper position={[4, 0, 0]} args={[20, 10, 0xff0000, 'teal']} />
          <axesHelper position={[4, 0, 0]} args={[10]} />
          <Stats />
          </>
        )}
      </Canvas>
    </main>
  )
}

export default App