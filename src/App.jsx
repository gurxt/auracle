import './App.css'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Scene1 from './components/scenes/Scene1'
import Scene2 from './components/scenes/Scene2'
import { useSelector } from 'react-redux'
import { selectCurrentScene } from './slices/scene'
import Controls from './components/controls/Controls'
import Console from './components/console/Console'

const App = () => {
  const currScene = useSelector(selectCurrentScene)

  return (
    <main className="app">
      <div className="ctrl_cnsl_cntr">
        <Controls />
        <Console />
      </div>
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