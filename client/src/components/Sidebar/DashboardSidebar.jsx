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
    link: "/dashboard",
    isHeader: true,
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
  {
    name: "Analytics",
    icon: <PersonOutlineOutlinedIcon fontSize="large" />,
    link: "/all-season-24x7-b2b",
    isHeader: true,
  },
  {
    name: "Jobs",
    icon: <EmailOutlinedIcon fontSize="large" />,
    link: "/jobs",
    isHeader: true,
  }
];

const userIntefaceData = [
  {
    name: "Email",
    icon: <EmailOutlinedIcon fontSize="large" />,
    link: "/email",
    isHeader: true,
  },
  {
    name: "Chat",
    icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />,
    link: "/chat",
    isHeader: true,
  },
  {
    name: "Calendar",
    icon: <CalendarTodayIcon fontSize="large" />,
    link: "/calendar",
    isHeader: true,
  },
  {
    name: "Invoice",
    icon: <CreditCardOutlinedIcon fontSize="large" />,
    link: "/invoice",
    isHeader: true,
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
  {
    name: "User",
    icon: <PersonOutlineOutlinedIcon fontSize="large" />,
    link: "/user",
    isHeader: true,
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
  {
    name: "Role",
    icon: <PersonOutlineOutlinedIcon fontSize="large" />,
    link: "/role",
    isHeader: true,
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
  {
    name: "Pages",
    icon: <ContentCopyOutlinedIcon fontSize="large" />,
    link: "/pages",
    isHeader: true,
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
  {
    name: "Dialogue",
    icon: <StarBorderOutlinedIcon fontSize="large" />,
    link: "/dialogue",
    isHeader: true,
  }
];

const formsAndTablesData = [
  {
    name: "Typography",
    icon : <CreditCardOutlinedIcon fontSize="large" />,
    link: "/typography",
    isHeader: true,
  },
  {
    name: "Icons",
    icon: <StarBorderOutlinedIcon fontSize="large" />,
    link: "/icons",
    isHeader: true,
  },
  {
    name: "Card",
    icon: <CreditCardOutlinedIcon fontSize="large" />,
    link: "/card",
    isHeader: true,
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
  {
    name: "Component",
    icon: <CreditCardOutlinedIcon fontSize="large" />,
    link: "/component",
    isHeader: true,
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

const DashboardSidebar = () => {
  const theme = useTheme();


  return (
    <>
      <List sx={{ p: 1}}>
        {appsAndPagesData.map((item, index) => {
          return <CollapseComponent {...item} key={index} />;
        })}
      </List>
      <Divider  textAlign="left" sx={{ pt: 1, pb: 2 }}>
        <Typography variant="h6" sx={{ mb: "-.75rem",color:theme.palette.text.secondary, fontWeight:theme.typography.fontWeightBold }}>APPS & PAGES</Typography>
      </Divider>
      <List sx={{ p: 1}}>
        {userIntefaceData.map((item, index) => {
          return <CollapseComponent {...item} key={index} />;
        })}
      </List>
      <Divider textAlign="left" sx={{ pt: 1, pb: 2 }}>
        <Typography variant="h6" sx={{ mb: "-.75rem",color:theme.palette.text.secondary, fontWeight:theme.typography.fontWeightBold }}>USER INTERFACE</Typography>
      </Divider>
      <List sx={{ p: 1}}>
        {formsAndTablesData.map((item, index) => {
          return <CollapseComponent {...item} key={index} />;
        })}
      </List>
      <Divider textAlign="left" sx={{ pt: 1}}>
        <Typography variant="h6" sx={{ mb: "-.75rem",color:theme.palette.text.secondary, fontWeight:theme.typography.fontWeightBold }}>FORMS & TABLES</Typography>
      </Divider>
    </>
  );
};

export default DashboardSidebar;
