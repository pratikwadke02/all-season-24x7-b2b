import { Divider, Typography, Box, Avatar, Button } from "@mui/material";
import React from "react";
import { images } from "../../constants/index";
import { theme } from "../../theme";

const NotificationMenu = () => {
  return (
    <>
      <Box sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="h3" color="inherit">
            Notifications
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.secondary.hover,
              width: "51px",
              height: "20px",
              borderRadius: "40px",
              textAlign: "center",
            }}
          >
            8 new
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="John Doe" src={images.Userpic} />
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{ fontWeight: theme.typography.fontWeightBold }}
              >
                Congratulation flora!
              </Typography>
              <Typography variant="caption" noWrap>
                Won the monthly best seller badge
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.secondary }}
            >
              Today
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="John Doe" src={images.Userpic} />
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{ fontWeight: theme.typography.fontWeightBold }}
              >
                New user registered
              </Typography>
              <Typography variant="caption" noWrap>
                5 hours ago
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.secondary }}
            >
              Yesterday
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="John Doe" src={images.Userpic} />
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{ fontWeight: theme.typography.fontWeightBold }}
              >
                New message received
              </Typography>
              <Typography variant="caption" noWrap>
                You have 10 unread messages
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.secondary }}
            >
              11 Aug
            </Typography>
          </Box>
        </Box>
        {/* <Divider />
        <Box sx={{ p: 1 }}>
          <Button
            variant="contained"
            color="info"
            sx={{
              // backgroundColor:theme.palette.login.main,
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              width: "100%",
            }}
          >
            <Typography variant="h5" sx={{fontWeight:theme.typography.fontWeightBold}} >
              CONNECT NOW
            </Typography>
          </Button>
        </Box> */}
      </Box>
    </>
  );
};

export default NotificationMenu;
