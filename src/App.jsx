import './App.css'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Scene1 from './components/scenes/Scene1'
import Scene2 from './components/scenes/Scene2'
import { useSelector } from 'react-redux'
import { selectCurrentScene } from './slices/scene'
import Controls from './components/controls/Controls'
import Console from './components/console/Console'
import { useEffect, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Scene3 from './components/scenes/Scene3'

const App = () => {
  const currScene = useSelector(selectCurrentScene)
  const [show, setShow] = useState(true)

  useEffect(() => {
    console.log(show)
  }, [show])

  return (
    <main className="app">
      <div className="ctrl_cnsl_cntr">
        <div className="fixed z-50 left-0 bottom-0 p-4">
          { show  && <EyeIcon onClick={() => setShow(false)} className="text-white h-16 w-16 hover:text-black" /> }
          { !show && <EyeSlashIcon onClick={() => setShow(true)} className="text-white h-16 w-16 hover:text-black" /> }
        </div>
        <Controls show={show} />
        <Console show={show} />
      </div>
      <Canvas camera={{ position: [0, 0, 2] }} shadows>
        { currScene === 1 && (
          <Scene1 />
        )} 
        { currScene === 2 && (
          <Scene2 />
        )} 
        { currScene === 3 && (
          <Scene3 />
        )}
      </Canvas>
      <Loader />
    </main>
  )
}

export default App