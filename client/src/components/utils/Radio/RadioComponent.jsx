import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioComponent = (props) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <FormLabel id="demo-radio-buttons-group-label">{props.formLabel}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="none"
        name="radio-buttons-group"
      >
        <FormControlLabel value={props.optionA} control={<Radio />} label={props.optionA} />
        <FormControlLabel value={props.optionB} control={<Radio />} label={props.optionB} />
        <FormControlLabel value={PaymentResponse.optionC} control={<Radio />} label={props.optionC} />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioComponent;