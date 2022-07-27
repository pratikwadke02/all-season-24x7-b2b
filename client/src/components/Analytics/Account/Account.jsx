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
      flexDirection: "column", alignItem: 'flex-start', justifyContent:'center',}}>
        <Box sx={{ display: "flex" }}>
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
              }}
            >
              <Button
                variant="contained"
                color="info"
                sx={{
                  width: '260px',
                  backgroundColor: theme.palette.secondary.main,
                  
                }}
              >
                <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>UPLOAD NEW PHOTO</Typography>
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ ml: 3}}
              >
                <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>RESET</Typography>
              </Button>
            </Box>
            <Box sx={{ p: 1 }}>
              <Typography variant="h6" color={theme.palette.text.disabled}>
                Allowed JPG, GIF or PNG. Max size of 800K
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 3,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              mb: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextfieldComponent id="username" label="Username" />
            <Box sx={{ m: 1 }} />
            <TextfieldComponent id="email" label="Email" />
            <Box sx={{ m: 1 }} />
            <SelectComponent items={items} label="Status" />
          </Box>
          <Box sx={{mr:2}} />
          <Box
            sx={{
              mb: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextfieldComponent id="nmame" label="Name" />
            <Box sx={{ m: 1 }} />
            <TextfieldComponent id="role" label="Role" />
            <Box sx={{ m: 1 }} />
            <TextfieldComponent id="company" label="Company" />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
            mb: 1,
            p: 2,
            width: "97.5%",
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
          <Box sx={{ display: "flex",flexDirection:'column' ,alignItems: "flex-start", width: "100%", ml:1 }}>
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
      </Container>
    </>
  );
};

export default Account;
