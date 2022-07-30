import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {theme} from '../../../theme';
import { alpha, styled } from '@mui/material/styles';

export default function SwitchComponent(props) {

  const { options } = props;

  const [state, setState] = React.useState({
    option_one: true,
    option_two: false,
    option_three: false,
  });

  const PurpleSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend"></FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <PurpleSwitch checked={state.option_one} onChange={handleChange} name="option_one" />
          }
          label={options.option_one}
          sx={{mb:{xs:1, sm:0}}}
        />
        <FormControlLabel
          control={
            <PurpleSwitch checked={state.option_two} onChange={handleChange} name="option_two" />
          }
          label={options.option_two}
          sx={{mb:{xs:1, sm:0}}}
        />
        <FormControlLabel
          control={
            <PurpleSwitch checked={state.option_three} onChange={handleChange} name="option_three" />
          }
          label={options.option_three}
          sx={{mb:{xs:1, sm:0}}}
        />
      </FormGroup>
    </FormControl>
  );
}
