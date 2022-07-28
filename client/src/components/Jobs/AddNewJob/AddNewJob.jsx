import { Container, TextField } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../../theme";
import React from "react";
import PostfixDropdown from "../../utils/Dropdown/PostfixDropdown";
import SelectComponent from "../../utils/Dropdown/SelectComponent";
import ComboBoxComponent from "../../utils/ComboBox/ComboBoxComponent";
import Date from "../../utils/Date/Date";

const AddNewJob = () => {
  const SalaryTypes = [
    {
      name: "per Day",
      value: "per Day",
    },
    {
      name: "per Week",
      value: "per Week",
    },
    {
      name: "per Month",
      value: "per Month",
    },
    {
      name: "per Annum",
      value: "per Annum",
    },
  ];

  const contractTypes = [
    {
      name: "Daily Wages",
      value: "Daily Wages",
    },
    {
      name: "Monthly Wages",
      value: "Monthly Wages",
    },
  ];

  const stateData = [
    {
      label: "Delhi",
    },
    {
      label: "Maharashtra",
    },
    {
      label: "Karnataka",
    },
    {
      label: "Gujarat",
    },
    {
      label: "Rajasthan",
    },
    {
      label: "Madhya Pradesh",
    },
  ];

  const cityData = [
    {
      label: "Delhi",
    },
    {
      label: "Mumbai",
    },
    {
      label: "Pune",
    },
    {
      label: "Bangalore",
    },
  ];

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", maxWidth: {xs:'100%', lg:'inherit'},pb:2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField type={"text"} label="Job Title" sx={{ width: "100%" }} />
          <Box sx={{ p: 1 }} />
          <TextField
            type={"text"}
            label="Number of Openings"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ pt: 2, pb: 2 }}>
          <TextField
            type={"text"}
            label="Job Description"
            cols={30}
            rows={2}
            multiline
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <TextField type={"text"} label="Required Skills" />
            <Box sx={{ p: 1 }} />
            <SelectComponent items={contractTypes} label="Contract Type" />
            <Box sx={{ p: 1 }} />
            <ComboBoxComponent data={stateData} label="State" />
          </Box>
          <Box sx={{ p: 1 }} />
          <Box sx={{ display: "flex", flexDirection: "column",width:'100%'}}>
            <PostfixDropdown items={SalaryTypes} />
            <Box sx={{ p: 1 }} />
            {/* <TextField
              type={"date"}
              label="Last Date to Apply"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
            <Date label="Last Date to Apply" />
            <Box sx={{ p: 1 }} />
            <ComboBoxComponent data={cityData} label="City" />
          </Box>
        </Box>
        <Box sx={{ p: 1 }} />
        <TextField type={"text"} label="Address" cols={30} rows={2} multiline />
        <Box sx={{ p: 1 }} />
        <Box>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: "100%",
              maxWidth: "157px",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Typography variant="h5" sx={{fontWeight:theme.typography.fontWeightBold}}>SAVE CHANGES</Typography>
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
            <Typography variant="h5" sx={{fontWeight:theme.typography.fontWeightBold}}>CANCEL</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddNewJob;
