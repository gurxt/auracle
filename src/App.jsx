import './App.css'
import { Canvas } from '@react-three/fiber'
import { Loader, Stats } from '@react-three/drei'
import { useControls } from 'leva'
import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'
import { useSelector } from 'react-redux'
import { selectCurrentScene } from './slices/scene'
import Controls from './components/controls/Controls'

const App = () => {
  const currScene = useSelector(selectCurrentScene)

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
      </Canvas>
      <Loader />
    </main>
  )
}

export default App