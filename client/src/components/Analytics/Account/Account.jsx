import React, { useState } from "react";
import { Container, Box } from "@mui/system";
import {
  Button,
  Icon,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import TextfieldComponent from "../../utils/Textfield/TextfieldComponent";
import { theme } from "../../../theme";
import SelectComponent from "../../utils/Dropdown/SelectComponent";

const Account = () => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const items = [
    {
      value: "active",
      name: "Active",
    },
    {
      value: "inactive",
      name: "Inactive",
    }
  ];

  return (
    <>
      <Container sx={{ display: "flex",maxWidth:{xs:'100%', lg:'inherit'}, 
      flexDirection: "column"}}>
        <Box sx={{ display: "flex", flexDirection: {xs:'column', sm:'row'}, alignItems:{xs:'center', sm:'none'} }}>
          <Avatar sx={{ height: 120, width: 120, borderRadius:'4px' }} variant="square" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: {xs:'column', sm:'row'},
              }}
            >
              <Button
                variant="contained"
                color="info"
                sx={{
                  width: '220px',
                  backgroundColor: theme.palette.secondary.main,
                  mb:{xs:1, sm:0},
                }}
              >
                <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>UPLOAD NEW PHOTO</Typography>
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ ml: {xs:0, sm:3}}}
              >
                <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>RESET</Typography>
              </Button>
            </Box>
            <Box sx={{ p: 1, textAlign:{xs:'center', sm:'start'} }}>
              <Typography variant="h6" color={theme.palette.text.disabled}>
                Allowed JPG, GIF or PNG. Max size of 800K
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: {xs:2, sm:3},
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              mb: 1,
              width: "100%",
              display: "flex",
              flexDirection: {xs:'column', sm:'row'},
            }}
          >
            <TextfieldComponent id="username" label="Username" />
            <Box sx={{ m: 1 }} />
            <TextfieldComponent id="nmame" label="Name" />
          </Box>
          <Box sx={{m:{xs:0.5, sm:1}}} />
          <Box
            sx={{
              mb: 1,
              width: "100%",
              display: "flex",
              flexDirection: {xs:'column', sm:'row'},
            }}
          >
            <TextfieldComponent id="email" label="Email" />
            <Box sx={{ m: 1 }} />
            <TextfieldComponent id="role" label="Role" />
          </Box>
          <Box sx={{m:{xs:0.5, sm:1}}} />
          <Box
            sx={{
              mb: 1,
              width: "100%",
              display: "flex",
              flexDirection: {xs:'column', sm:'row'},
            }}
          >
            <SelectComponent items={items} label="Status" />
            <Box sx={{ m: 1 }} />
            <TextfieldComponent id="company" label="Company" />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 2,
            mb: 1,
            p: 2,
            backgroundColor: theme.palette.warning.bg,
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box>
          <Icon sx={{ color: theme.palette.warning.main }}>
            <WarningAmberOutlinedIcon fontSize="medium" />
          </Icon>
          </Box>
          <Box sx={{ display: "flex",flexDirection:'column' ,alignItems: "flex-start", ml:1 }}>
            <Typography variant="h5" color={theme.palette.warning.main}>
              Your email is not confirmed. Please check your inbox.
            </Typography>
            <Typography variant="h6" color={theme.palette.warning.main}>
              Resend Confirmation
            </Typography>
          </Box>
        </Box>
        <Box sx={{mt:2}}>
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

export default Account;
