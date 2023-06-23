import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import './App.css'

export default function App() {
  return (
    <main className="app">
      <Canvas shadows camera={{ position: [0, 1, 3] }}>
        <OrbitControls
          enableDamping={true} 
          enablePan={false} 
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
        <gridHelper args={[10, 10, 0xff0000, 'teal']} />
        <axesHelper args={[3]} />
        <Stats />
      </Canvas>
    </main>
  )
}