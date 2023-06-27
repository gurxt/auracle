import { TypeAnimation } from 'react-type-animation'
import Scrollbars from "rc-scrollbars"

const Typist = () => {
  return (
    <Scrollbars className="pl-2">
      <TypeAnimation
        sequence={[`
        Welcome to Auracle, select one of the doors.
        Welcome to Auracle, select one of the doors.
        Welcome to Auracle, select one of the doors.
        Welcome to Auracle, select one of the doors.
      
        `]}
        speed={100}
        wrapper="span"
        className="text-xl text-left text-white max-h-20 inline-block pl-2"
        cursor={false}
      />
    </Scrollbars>
  )
}

export default Typist