import React from 'react'
import {Box, FormControl, Select, OutlinedInput, MenuItem, InputLabel, styled} from '@mui/material'
import {theme} from '../../../theme'
import {useState} from 'react'

const BorderOutlineInput = styled(OutlinedInput)({
  // '& label.Mui-focused': {
  //   color: theme.palette.secondary.main,
  // },
  // '& .Mui-underline:after': {
  //   borderBottomColor: theme.palette.secondary.main,
  // },
  // '& .MuiOutlinedInput-notchedOutline ': {
  //   '&:hover fieldset': {
  //     borderColor: theme.palette.secondary.main,
  //   },
  //   '&.Mui-focused fieldset': {
  //     borderColor: theme.palette.secondary.main,
  //   },
  // },
});

const SelectComponent = (props) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const {items, label} = props;

  return (
    <>
    <Box sx={{width:'100%'}}>
    <FormControl sx={{width:'100%'}}>
        <InputLabel id='select-label' color='primary'>{label}</InputLabel>
            <Select
              // sx={{
              //   "&:hover": {
              //     "&& fieldset": {
              //       border: "1px solid"+theme.palette.primary.main,
              //     }
              //   },
              // }}
              color='primary'
              labelId = 'select-label'
              value={value}
              onChange={handleChange}
              input={<BorderOutlineInput id="select" label={label} />}
              inputProps={{ "aria-label": "Without label" }}
            >
                {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
    </Box>
    </>
  )
}

export default SelectComponent