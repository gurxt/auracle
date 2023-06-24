import './App.css'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { useControls } from 'leva'
import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentScene } from './slices/scene'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()
  const currScene = useSelector(selectCurrentScene)

  const { show } = useControls('Helpers', {
    show: true
  })

  useEffect(() => {
    console.log(currScene)
  }, [currScene])

  return (
    <main className="app">
      <Canvas camera={{ position: [0, 0, 0] }} shadows>
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
    </main>
  )
}

export default App