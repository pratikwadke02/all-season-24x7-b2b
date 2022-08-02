import React from 'react'
import { FormControl, InputLabel, InputAdornment, OutlinedInput } from '@mui/material';

const SearchWithIcon = (props) => {

    const {icon, label, id, position} = props;

    if(position == "start"){
        return (
            <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                  <OutlinedInput
                    sx={{height: '40px'}}
                    id={id}
                    startAdornment = {<InputAdornment position="start">{icon}</InputAdornment>}
                    label={label}
                  />
                </FormControl>
          )
    }else{
        return (
            <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                  <OutlinedInput
                    id={id}
                    endAdornment = {<InputAdornment position="end">{icon}</InputAdornment>}
                    label={label}
                  />
                </FormControl>
          )
    }
}

export default SearchWithIcon