import React from 'react'
import { styled, TextField } from '@mui/material'
import { theme } from '../../../theme';

const BorderTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& .Mui-underline:after': {
    borderBottomColor: theme.palette.secondary.main,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
});

const TextfieldComponent = (props) => {
  return (
    <>
    <BorderTextField
    type={props.type} 
    id={props.id} 
    label={props.label} 
    variant="outlined" 
    sx={{width:'100%'}}
    />
    </>
  )
}

export default TextfieldComponent