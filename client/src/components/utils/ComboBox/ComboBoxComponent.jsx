import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const ComboBoxComponent = (props) => {

    const {data, label} = props;
    console.log(data);

  return (
    <Autocomplete
        disablePortal
        id="combo-box"
        options = {data}
        sx={{width:'100%'}}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    />
  )
}

export default ComboBoxComponent