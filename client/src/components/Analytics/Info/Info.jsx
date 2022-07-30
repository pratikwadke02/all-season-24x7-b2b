import {
  Container,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Button,
  Typography,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../theme";
import SelectComponent from "../../utils/Dropdown/SelectComponent";
import MultilineTextfield from "../../utils/Textfield/MultilineTextfield";
import TextfieldComponent from "../../utils/Textfield/TextfieldComponent";

const Info = () => {
  const items = [
    {
      value: "en",
      name: "English",
    },
    { 
      value: "es", 
      name: "Spanish" 
    },
    { 
      value: "fr", 
      name: "French" 
    },
  ];
  const [language, setLanguage] = useState("en");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", maxWidth:{xs:'100%', lg:'inherit'} }}>
        <Box sx={{ display: "flex", width:'100%' }}>
        <MultilineTextfield label='Bio' />
        </Box>
        <Box sx={{ display: "flex", flexDirection: {xs:'column', sm:"row"}, mt: 1.5, mb: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: .5,
              mb: 2,
              mr: 1,
              width: "100%",
            }}
          >
            <TextfieldComponent label="Birth Date" />
            <Box sx={{ p: 1 }} />
            <TextfieldComponent label="Website" />
            <Box sx={{ p: 1 }} />
            <SelectComponent label="Languages" items={items} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: .5,
              mb: 1,
              ml: {xs:0, sm:1},
              width: "100%",
            }}
          >
            <TextfieldComponent label="Phone" />
            <Box sx={{ p: 1 }} />
            <TextfieldComponent label="Country" />
            <Box sx={{ p: 1 }} />
            <FormControl sx={{}}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
                sx={{
                  fontSize: theme.typography.h5,
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="secondary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="secondary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="secondary" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: "100%",
              maxWidth: "150px",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>SAVE CHANGES</Typography>
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              ml: 2,
              color: theme.palette.cancel.main,
              border: "1px solid lightgrey",
            }}
          >
            <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>CANCEL</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Info;
