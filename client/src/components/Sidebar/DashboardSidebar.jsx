import React from "react";
import {
  useTheme,
  Typography,
  Divider,
  List,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import TestComponent from "../Test/TestComponent";
import Analytics from "../Analytics/Analytics";
import { theme } from "../../theme";
import CollapseComponent from "../utils/Collapse/CollapseComponent";

const appsAndPagesData = [
  {
    name: "Dashboard",
    icon: <HomeOutlinedIcon fontSize="large" />,
    link: "/",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="medium" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="medium" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="medium" />,
        link: "/test",
      },
    ],
  },
];

const userIntefaceData = [
  {
    name: "Email",
    icon: <EmailOutlinedIcon fontSize="large" />,
    link: "/email",
  },
  {
    name: "Chat",
    icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />,
    link: "/chat",
  },
  {
    name: "Calendar",
    icon: <CalendarTodayIcon fontSize="large" />,
    link: "/calendar",
  },
  {
    name: "Invoice",
    icon: <CreditCardOutlinedIcon fontSize="large" />,
    link: "/invoice",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="large" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="large" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="large" />,
        link: "/test",
      },
    ],
  },
  {
    name: "User",
    icon: <PersonOutlineOutlinedIcon fontSize="large" />,
    link: "/user",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="large" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="large" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="large" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Role",
    icon: <PersonOutlineOutlinedIcon fontSize="large" />,
    link: "/role",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="large" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="large" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="large" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Pages",
    icon: <ContentCopyOutlinedIcon fontSize="large" />,
    link: "/pages",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="large" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="large" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="large" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Dialogue Examples",
    icon: <StarBorderOutlinedIcon fontSize="large" />,
    link: "/dialogue",
  }
];

const formsAndTablesData = [
  {
    name: "Typography",
    icon : <CreditCardOutlinedIcon fontSize="large" />,
    link: "/typography",
  },
  {
    name: "Icons",
    icon: <StarBorderOutlinedIcon fontSize="large" />,
    link: "/icons",
  },
  {
    name: "Card",
    icon: <CreditCardOutlinedIcon fontSize="large" />,
    link: "/card",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="large" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="large" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="large" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Component",
    icon: <CreditCardOutlinedIcon fontSize="large" />,
    link: "/component",
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="large" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="large" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="large" />,
        link: "/test",
      },
    ],
  },
];

const DashboardSidebar = () => {
  const theme = useTheme();


  return (
    <>
      <List sx={{ p: 1 }}>
        {appsAndPagesData.map((item, index) => {
          return <CollapseComponent {...item} key={index} />;
        })}
      </List>
      <Divider textAlign="left" sx={{ pt: 1, pb: 1 }}>
        <Typography sx={{ mb: "-.75rem" }}>APPS & PAGES</Typography>
      </Divider>
      <List sx={{ p: 1 }}>
        {userIntefaceData.map((item, index) => {
          return <CollapseComponent {...item} key={index} />;
        })}
      </List>
      <Divider textAlign="left" sx={{ pt: 1, pb: 1 }}>
        <Typography sx={{ mb: "-.75rem" }}>USER INTERFACE</Typography>
      </Divider>
      <List sx={{ p: 1 }}>
        {formsAndTablesData.map((item, index) => {
          return <CollapseComponent {...item} key={index} />;
        })}
      </List>
      <Divider textAlign="left" sx={{ pt: 1, pb: 1 }}>
        <Typography sx={{ mb: "-.75rem" }}>FORMS & TABLES</Typography>
      </Divider>
    </>
  );
};

export default DashboardSidebar;
