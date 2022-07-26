import React , {useState} from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const CheckboxComponent = (props) => {

    const [state, setState] = useState({
        
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

  return (
    <>
    <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">{props.formLabel}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={gilad}
            //   onChange={handleChange} 
            //   name="gilad" 
              />
            }
            label={props.optionA}
          />
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={jason} 
            //   onChange={handleChange} 
            //   name="jason" 
              />
            }
            label={props.optionB}
          />
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={antoine} 
            //   onChange={handleChange} 
            //   name="antoine" 
              />
            }
            label={props.optionC}
          />
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={antoine} 
            //   onChange={handleChange} 
            //   name="antoine" 
              />
            }
            label={props.optionD}
          />
        </FormGroup>
      </FormControl>
    </>
  )
}

export default CheckboxComponent;