import { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid"

const MusicSlider = ({ volume, handleVolumeChange }) => {
  return (
    <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <SpeakerXMarkIcon className="h-9 w-9 text-white" />
        <Slider 
          sx={{ color: 'white' }}
          aria-label="Volume" 
          value={volume} 
          onChange={handleVolumeChange} 
        />
        <SpeakerWaveIcon className="h-9 w-9 text-white" />
      </Stack>
    </Box>
  )
}

export default MusicSlider