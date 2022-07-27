import React from "react";
import TabComponent from "../utils/Tabs/TabComponent";
import { Container } from "@mui/material";
import { theme } from "../../theme";
import Account from "../Analytics/Account/Account";
import Security from "../Analytics/Security/Security";
import Info from "../Analytics/Info/Info";
import Billing from "../Analytics/Billing/Billing";
import Notification from "../Analytics/Notification/Notification";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Analytics = () => {
  const data = [
    {
      name: "Account",
      icon: <SearchIcon fontSize="large"/>,
      component: <Account />,
    },
    {
      name: "Security",
      icon: <LockOpenOutlinedIcon fontSize="large"/>,
      component: <Security />,
    },
    {
      name: "Info",
      icon: <InfoOutlinedIcon fontSize="large"/>,
      component: <Info />,
    },
    {
      name: "Billing",
      icon: <BookmarkBorderOutlinedIcon fontSize="large"/>,
      component: <Billing />,
    },
    {
      name: "Notification",
      icon: <NotificationsNoneOutlinedIcon fontSize="large"/>,
      component: <Notification />,
    },
  ];

  return (
    <Container
      sx={{
        display:'flex',
        backgroundColor: theme.palette.background.default,
        borderRadius: "5px",
        // width: '',
        maxWidth: {lg: 'inherit'},
        height: '100%',
        alignItems: "center",
      }}
    >
      <TabComponent data={data} />
    </Container>
  );
};

export default Analytics;
