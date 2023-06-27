import { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid"

const MusicSlider = ({ volume, handleVolumeChange }) => {
  return (
    <Box className="md:flex md:flex-row md:justify-end w-full">
      <Stack className="flex w-full px-2 justify-center md:justify-end" spacing={2} direction="row" alignItems="center">
        <SpeakerXMarkIcon className="h-6 w-6 md:w-7 md:h-7 lg:h-9 lg:w-9 text-white" />
        <Slider 
          sx={{ color: 'white'}}
          aria-label="Volume" 
          value={volume} 
          onChange={handleVolumeChange} 
        />
        <SpeakerWaveIcon className="h-6 w-6 md:w-7 md:h-7 lg:h-9 lg:w-9 text-white" />
      </Stack>
    </Box>
  )
}

export default MusicSlider