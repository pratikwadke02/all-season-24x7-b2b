import { Container, IconButton, Typography, Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { theme } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneComponent from "../utils/Phone/PhoneComponent";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container
        sx={{
          maxWidth: {xs: '448px'},
          maxHeight: '455px',
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          borderRadius: "5px",
          pt: 1,
          pb: 1,
          // pl:{xs:'24px'},
        }}
      >
        <Box
          sx={{
            display: {xs:'flex'},
            flexDirection: "row",
            justifyContent: {xs:"space-between"},
            mt:1,
          }}
        >
          <Typography
            variant="h1"
            color={theme.palette.text.primary}
            sx={{ fontSize: "30px" }}
            flex={1}
          >
            Login
          </Typography>
          <IconButton flex={0}>
            <CloseIcon
              fontSize="medium"
              sx={{ color: theme.palette.text.primary }}
            />
          </IconButton>
        </Box>
        <Box sx={{mt:2}}>
           <PhoneComponent />                                         
          <Button
            color="info"
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: theme.palette.login.main,
              minHeight: 47,
              mb: 1,
              mt: 2,
            }}
          >
            <Typography variant="h4">Send One Time Password</Typography>
          </Button>
        </Box>
        <Divider
          textAlign="center"
          sx={{
            width: "100%",
            mt: 1,
          }}
        >
          <Typography
            variant="h3"
            color={theme.palette.text.primary}
            sx={{ mb: "-.95rem" }}
          >
            or
          </Typography>
        </Divider>
        <Box sx={{ mt: 2, display:'flex',flexDirection:'column' }}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ width: "100%", minHeight: 47, mt: 2, mb: 1 }}
          >
            <Typography
              variant="h4"
              color={theme.palette.text.primary}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <EmailOutlinedIcon
                fontSize="large"
                sx={{ color: theme.palette.text.primary,pr: 1 }}
              />
              Continue with Email
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ width: "100%",  minHeight: 47, mt: 2, mb: 1 }}
          >
            <Typography
              variant="h4"
              color={theme.palette.text.primary}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <GoogleIcon
                fontSize="large"
                sx={{ color: theme.palette.text.primary, pr: 1 }}
              />
              Continue with Google
            </Typography>
          </Button>
          <Divider sx={{ width: "100%", mt: 2, mb: 2,}} />
          <Box sx={{ display: "flex", }}>
            <Typography
              variant="h5"
              color={theme.palette.text.disabled}
              sx={{ pr: 1 }}
            >
              New to All Season24x7?
            </Typography>
            <Link to="/signup" style={{textDecoration:'none'}}>
            <Typography
              variant="h5"
              color={theme.palette.text.primary}
              sx={{ color: theme.palette.login.main, textDecoration: "none" }}
            >
              Create account
            </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
