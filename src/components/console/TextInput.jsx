import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function TextInput({ on }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
        '& .MuiOutlinedInput-root': {
          padding: 0,
          border: 'none',
          '&:hover:not(.Mui-focused)': {
            border: 'none',
          },
          '& fieldset': {
            border: 'none',
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      { on && (
        <TextField
          sx={{
            '& .MuiInputBase-root': {
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              fontSize: '18px'
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
          }}
          multiline
          autoFocus={true}
        />
      )}
    </Box>
  );
}