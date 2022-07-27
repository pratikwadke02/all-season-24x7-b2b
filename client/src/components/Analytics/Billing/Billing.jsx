import React from "react";
import {
  Container,
  Radio,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import TextfieldComponent from "../../utils/Textfield/TextfieldComponent";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { theme } from "../../../theme";

const Billing = () => {
  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "row", maxWidth:{xs:'100%', lg:'inherit'} }}>
        <Box sx={{ p: 2, width: "50vw" }} flex={1}>
          <Typography variant="h3" sx={{ color: theme.palette.text.primary, fontWeight: theme.typography.fontWeightBold }}>
            Payment Method
          </Typography>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                value="credit"
                control={<Radio color="secondary" />}
                label="Credit/Debit/ATM Card"
              />
              <FormControlLabel
                value="debit"
                control={<Radio color="secondary" />}
                label="COD/Cheque"
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ mt: 2, mb: 2, display:'flex' }}>
            <TextfieldComponent label="Name" />
            <Box sx={{ p: 1 }} />
            <TextfieldComponent label="Card" type="string" />
          </Box>
          {/* <Box sx={{ mt: 2, mb: 1 }}>
          </Box> */}
          <Box sx={{ display: "flex", mt: 2, mb: 2 }}>
            <TextfieldComponent label="Expiry Date" type="string" />
            <Box sx={{ p: 1 }} />
            <TextfieldComponent label="CVV Code" type="password" />
          </Box>
          <Box sx={{}}>
            <Button
              variant="contained"
              color="info"
              sx={{
                width: "100%",
                maxWidth: "200px",
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
        </Box>
        <Box
          sx={{
            border: "1px solid lightgrey",
            borderRadius: "10px",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            maxHeight: "280px",
            width: "100%",
            maxWidth: 362,
          }}
        >
          <Typography variant="h3" color={"grey"} sx={{fontWeight: theme.typography.fontWeightBold}}>
            Your Current Plan
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: theme.palette.secondary.main,
              backgroundColor: "#f2ebff",
              width: "80px",
              height: "20px",
              borderRadius: "40px",
              textAlign: "center",
            }}
          >
            Basic Plan
          </Typography>
          <Box sx={{ mt: 2, mb: 1, display: "flex", alignItems: "center" }}>
            <PersonOutlineOutlinedIcon
              fontSize="large"
              sx={{ color: theme.palette.text.primary }}
            />
            <Typography variant="h5" color={theme.palette.text.disabled}>
              5 Users
            </Typography>
          </Box>
          <Box sx={{ mt: 1, mb: 1, display: "flex", alignItems: "center" }}>
            <CloudOutlinedIcon
              fontSize="large"
              sx={{ color: theme.palette.text.primary }}
            />
            <Typography variant="h5" color={theme.palette.text.disabled}>
              10 GB Storage
            </Typography>
          </Box>
          <Box sx={{ mt: 1, mb: 2, display: "flex", alignItems: "center" }}>
            <HelpOutlineOutlinedIcon
              fontSize="large"
              sx={{ color: theme.palette.text.primary }}
            />
            <Typography variant="h5" color={theme.palette.text.disabled}>
              Basic Support
            </Typography>
          </Box>
          <Button
            color="info"
            variant="contained"
            sx={{ backgroundColor: theme.palette.secondary.main }}
          >
            <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>Save Changes</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Billing;
