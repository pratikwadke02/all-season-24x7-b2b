import React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Tooltip, Menu, Divider, SwipeableDrawer } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { images } from "../../constants/index";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import Avatar from "@mui/material/Avatar";
import Analytics from "../Analytics/Analytics";
import DashboardSidebar from "../Sidebar/DashboardSidebar";
import NotificationMenu from "../Menu/NotificationMenu";
import ProfileMenu from "../Menu/ProfileMenu";
import Badge from "@mui/material/Badge";
import { theme } from "../../theme";
import Jobs from "../Jobs/Jobs";
import MenuIcon from "@mui/icons-material/Menu";
import SearchWithICon from "../utils/Search/SearchWithIcon";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchWithIcon from "../utils/Search/SearchWithIcon";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const drawerWidth = 280; // width of the drawer 280

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    // marginLeft: {xs: 0, sm:'-340px'},
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const ResponsiveMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if(event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  }

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenNotificationsMenu = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotificationMenu = (event) => {
    setAnchorElNotifications(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const searchIcon = <SearchIcon />;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              minWidth: { xs: "170px", sm: "235px" },
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "row-reverse", sm: "row" },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img src={images.HomeLogo} alt="dashboard-logo" />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start" //...(open && { display: 'none' })
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  borderRadius: "4px",
                  border: "1px solid" + theme.palette.text.secondary,
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              ml: 4,
            }}
          >
            <IconButton sx={{ display: { xs: "none", sm: "none" } }}>
              <SearchIcon fontSize="large" />
            </IconButton>
            <Box
              sx={{
                ml: 2,
                maxWidth: "350px",
                width: "100%",
                display: { xs: "none", sm: "block" },
              }}
            >
              <SearchWithIcon
                id="search"
                icon={searchIcon}
                position="start"
                adornment="true"
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="Open Notifications" sx={{ mr: { xs: 0, sm: 2 } }}>
              <IconButton onClick={handleOpenNotificationsMenu}>
                <NotificationsNoneRoundedIcon
                  fontSize="large"
                  sx={{ color: theme.palette.text.primary }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{ sx: { width: "100%", maxWidth: "380px" } }}
              sx={{ mr: 1, mt: "45px", width: { xs: "350px", sm: "380px" } }}
              id="notification-appbar"
              anchorEl={anchorElNotifications}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNotifications)}
              onClose={handleCloseNotificationMenu}
            >
              <NotificationMenu />
            </Menu>
            <Tooltip title="Open settings" sx={{ ml: 1 }}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { xs: "block", sm: "block" } }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="John Doe" src={images.Userpic} />
                </StyledBadge>
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{ sx: { width: "100%", maxWidth: "230px" } }}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <ProfileMenu />
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Drawer
          PaperProps={{
            sx: {
              p: 1,
              textAlign: "center",
              backgroundColor: theme.palette.background.default,
              border: "none",
              // position: 'relative',
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            display: { xs: "none", sm: "block" },
          }}
          // variant={{xs:"permanent", sm:"persistent"}}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader></DrawerHeader>
          <DashboardSidebar />
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              p: 1,
              textAlign: "center",
              backgroundColor: theme.palette.background.default,
              border: "none",
              position: "relative",
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            display: { xs: "block", sm: "none" },
          }}
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box 
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <DrawerHeader></DrawerHeader>
            <DashboardSidebar />
          </Box>
        </Drawer>
        <Main
          open={open}
          sx={{ maxWidth: "1300px", display: { xs: "none", sm: "block" } }}
        >
          <DrawerHeader />
          <Routes>
            <Route path="/all-season-24x7-b2b" element={<Analytics />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
          {/* <Analytics /> */}
          {/* <Jobs /> */}
        </Main>
        <ResponsiveMain
          open={open}
          sx={{ maxWidth: "1300px", display: { xs: "block", sm: "none" } }}
        >
          <DrawerHeader />
          <Routes>
            <Route path="/all-season-24x7-b2b" element={<Analytics />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
          {/* <Analytics /> */}
          {/* <Jobs /> */}
        </ResponsiveMain>
      </BrowserRouter>
    </Box>
  );
}
