import Prompter from "./Prompter"
import TextInput from "./TextInput"
import Auracle from "../../assets/auracle.png"
import { PencilSquareIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'
import { useEffect, useMemo } from "react"

const MemoPrompter = () => {
  const prompter = useMemo(() => <Prompter />, [])
  return prompter
}

const Console = ({ show }) => {
  if (show)
    return (
      <div className={`console_div opacity-${show ? '10' : '100'}`}>
        <div className="2-1/6">
          <img src={Auracle} className="w-32 h-full rounded-xl" />
        </div>
        <div className="flex flex-col justify-around items-center w-16 rounded-xl">
          <ChatBubbleBottomCenterIcon className="w-10 h-10 text-white" />
          <PencilSquareIcon className="w-10 h-10 text-white" />
        </div>
        <div className="w-full h-full p-2 ml-2 bg-black bg-opacity-50 rounded-xl">
          <MemoPrompter />
        </div>
      </div>
    )
  return <div></div>
}

export default Console