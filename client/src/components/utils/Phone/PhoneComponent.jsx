import React from 'react'
import { Box, TextField,styled,Divider } from '@mui/material'
import {images} from '../../../constants'
import {theme} from '../../../theme' 

const NoBorderTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none'
        },
        '&:hover fieldset': {
            border: 'none'
        },
        '&.Mui-focused fieldset': {
            border: 'none'
        },
    }
});


const PhoneComponent = () => {

  return (
    <>
    <Box sx={{maxWidth:390, width:'100%', minHeight: 47, border:'1px solid' +theme.palette.text.secondary, borderRadius:'10px', display:'flex',alignItems:'center',pl:1}}>
        <img src={images.flag} alt="flag" />
        <Box sx={{width:50}}>
        <NoBorderTextField placeholder='+91' type="text" inputMode='numeric' inputProps={{pattern: '[0-9]*'}}/>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem/>
        <NoBorderTextField placeholder='Phone' type="text" inputMode='numeric' inputProps={{pattern: '[0-9]*'}}/>
    </Box>
    </>
  )
}

export default PhoneComponent