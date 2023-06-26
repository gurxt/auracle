import { useState } from "react"
import { 
  PlayCircleIcon, 
  PauseCircleIcon, 
  ForwardIcon, 
  BackwardIcon, 
  MusicalNoteIcon, 
  ChevronDownIcon 
} from "@heroicons/react/24/solid"
import MusicSlider from "./MusicSlider"

const songs = [
  {
    name: "The Magic Tree",
    song: new Audio('./src/assets/audio/bg_music/bg_01.wav'),
  },
  {
    name: "Fateless",
    song: new Audio('./src/assets/audio/bg_music/bg_02.wav'),
  },
  {
    name: "Autunmnal Glow",
    song: new Audio('./src/assets/audio/bg_music/bg_03.mp3'),
  },
]

const Soundtrack = () => {
  const [play, setPlay] = useState(false)
  const [songIdx, setSongIdx] = useState(0)
  const [volume, setVolume] = useState(50)
  const [open, setOpen] = useState(true)

  const handleVolumeChange = e => {
    songs[songIdx].song.volume = e.target.value / 100
    setVolume(e.target.value)
  }

  const handleMusic = option => {
    if (option === "play") {
      setPlay(true)
      songs[songIdx].song.volume = volume / 100
      songs[songIdx].song.play()
    } else if (option === "pause") {
      setPlay(false)
      songs[songIdx].song.pause()
    } else {
      if (play) {
        songs[songIdx].song.currentTime = 0
        songs[songIdx].song.pause()
      } 
      let nextIdx = (songIdx + (option === "next" ? 1 : -1)) % songs.length
      if (nextIdx === -1)
        nextIdx = songs.length - 1
      songs[nextIdx].song.volume = volume / 100
      songs[nextIdx].song.play()
      setPlay(true)
      setSongIdx(nextIdx)
    } 
  }

  return (
    <div className="controls_music_container">
      <div className="flex flex-row w-full items-center">
        <MusicalNoteIcon className="h-9 w-9 text-white pr-2" />
        <button className="flex-1 text-xl font-bold pr-2">Soundtrack</button>
        <ChevronDownIcon onClick={() => setOpen(!open)} className="h-9 w-9 text-white pl-2" />
      </div>
      { open && (
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row w-1/3 justify-center">
            <BackwardIcon onClick={() => handleMusic("prev")} className="h-9 w-6 text-white" />
            { !play ? (
              <PlayCircleIcon onClick={() => handleMusic("play")} className="h-9 w-9 text-white" />
            ) : (
              <PauseCircleIcon onClick={() => handleMusic("pause")} className="h-9 w-9 text-white" />
            )}
            <ForwardIcon onClick={() => handleMusic("next")} className="h-9 w-6 text-white" />
          </div>
          <div className="w-2/3 justify-center">
            <MusicSlider volume={volume} handleVolumeChange={handleVolumeChange} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Soundtrack