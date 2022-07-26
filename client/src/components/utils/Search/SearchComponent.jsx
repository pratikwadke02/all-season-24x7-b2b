import React from 'react'
import { TextField } from '@mui/material'


const SearchComponent = (props) => {
  return (
    <>
    <TextField 
        fullWidth
        id="outlined-search" 
        label={props.label} 
        type="search"
        variant="outlined"
        placeholder={props.placeholder}
    />
    </>
  )
}

export default SearchComponent