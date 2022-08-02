import React from "react";
import { Container, Box } from "@mui/system";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { Typography, Button } from "@mui/material";
import SwitchComponent from "../../utils/Switches/SwitchComponent";
import { theme } from "../../../theme";

const Notification = () => {
  const switchOptions = {
    option_one: "Email me when someone comments on my article",
    option_two: "Email me when someone answers on my forum thread",
    option_three: "Email me when someone follows me",
  };

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column",maxWidth:{xs:'100%', lg:'inherit'} }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BarChartOutlinedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.primary, mr: 1}}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.text.primary,
            }}
          >
            Activity
          </Typography>
        </Box>
        <Box sx={{mt:2}}>
          <SwitchComponent options={switchOptions} />
        </Box>
        <Box sx={{ mt: 2,mb:2, display:'flex' }}>
          <Button
            color="info"
            variant="contained"
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

export default Notification;
