import './App.css'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { useControls } from 'leva'
import Scene1 from './components/Scene1'

const App = () => {
  const { show } = useControls('Helpers', {
    show: true
  })

  return (
    <main className="app">
      <Canvas camera={{ position: [0, 0, 0] }} shadows>
        <Scene1 />
        { show && (
          <>
          <gridHelper position={[0, 0, 0]} args={[20, 10, 0xff0000, 0xffffff ]} />
          <axesHelper position={[0, 0, 0]} args={[10]} />
          <Stats />
          </>
        )}
      </Canvas>
    </main>
  )
}

export default App