import { TextField, Select, FormControl, Box,MenuItem, OutlinedInput,styled } from "@mui/material";
import React from "react";
import { theme } from "../../../theme";

const PostfixDropdown = (props) => {

  const[salary, setSalary] = React.useState('');

  const handleChange = (event) => {
    setSalary(event.target.value);
    }
    
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


  const { items } = props;

  return (
    <>
      <Box sx={{display:'flex', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', border:'1px solid'+theme.palette.text.secondary, borderRadius:'4px',maxWidth:'100%', maxHeight:50,  }}>
        <Box sx={{width:'80%', borderRight:'1px solid'+theme.palette.text.secondary, mr:1}}>
            <NoBorderTextField 
                id="outlined-basic" 
                placeholder="Salary" 
                variant="outlined" 
                sx={{maxWidth:220, width:'100%'}}
                inputProps={{pattern: '[0-9]*'}}    
            />
        </Box>
        <Box>
          <FormControl sx={{ maxWidth:100, width:'100%' }}>
            <Select
              value={salary}
              onChange={handleChange}
              variant="standard"
              displayEmpty
              disableUnderline
              inputProps={{ "aria-label": "Without label" }}
              renderValue = {(selectedValue) => {
                if (selectedValue === '') {
                    return <em>None</em>;
                }
                return selectedValue
              }}
            >
                {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default PostfixDropdown;
