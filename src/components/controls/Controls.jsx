import ScenePlayer from "./ScenePlayer"
import Soundtrack from "./Soundtrack"

const Controls = ({ show }) => {
  if (show)
    return (
      <div className="controls_div">
        <Soundtrack />
        <ScenePlayer />
      </div>
    )
  return <div></div>
}

export default Controls