import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function InputBox() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <UserCircleIcon className="w-8 h-8 text-white px-2" />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
  )
}