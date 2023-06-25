import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Loader, Stats } from '@react-three/drei'
import { useControls } from 'leva'
import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'
import { useSelector } from 'react-redux'
import { selectCurrentScene } from './slices/scene'
import Controls from './components/Controls'

const App = () => {
  const currScene = useSelector(selectCurrentScene)

  const { show } = useControls('Helpers', {
    show: false
  })

  return (
    <main className="app">
      <Controls />
      <Canvas camera={{ position: [0, 0, 2] }} shadows>
        { currScene === 1 && (
          <Scene1 />
        )} 
        { currScene === 2 && (
          <Scene2 />
        )} 
        { show && (
          <>
          <gridHelper position={[0, 0, 0]} args={[20, 10, 0xff0000, 0xffffff ]} />
          <axesHelper position={[0, 0, 0]} args={[10]} />
          <Stats />
          </>
        )}
      </Canvas>
      <Loader />
    </main>
  )
}

export default App