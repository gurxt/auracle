import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentScene, selectSceneHistory, setCurrentScene } from "../../slices/scene"
import { ChevronDownIcon, PhotoIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import Scene1 from "../../assets/screenshots/scene1.png"
import Scene2 from "../../assets/screenshots/scene2.png"

const images = [
  Scene1, Scene2
]

const ScenePlayer = () => {
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch()
  const currScene = useSelector(selectCurrentScene) 
  const sceneHistory = useSelector(selectSceneHistory)

  const handlePreviousScene = () => {
    if (currScene !== 1)
      dispatch(setCurrentScene(currScene - 1))
  }

  const handleNextScene = () => {
    if (currScene !== sceneHistory.length)
      dispatch(setCurrentScene(currScene + 1))
  }

  return (
    <div className="controller_container mt-2 bg-black">
      <div className="w-full flex flex-row justify-between">
        <PhotoIcon className="h-9 w-9 text-white pr-2" />
        <button className="flex-1 text-xl font-bold pr-2">{ sceneHistory[currScene - 1].name }</button>
        <ChevronDownIcon onClick={() => setOpen(!open)} className="h-9 w-9 text-white pl-2 hover:text-black" />
      </div>
      { open && (
        <div className="w-full flex flex-row items-center justify-between">
          <ArrowLeftIcon onClick={handlePreviousScene} className="h-9 w-9 text-white pr-2 hover:text-red-900" />
          <img src={images[currScene - 1]} className="w-32 h-32 p-2" />
          <ArrowRightIcon onClick={handleNextScene} className="h-9 w-9 text-white pr-2 hover:text-green-900" />
        </div>
      )}
    </div>
  )
}

export default ScenePlayer