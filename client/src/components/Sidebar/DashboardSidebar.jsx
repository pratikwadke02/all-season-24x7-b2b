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
import CircleIcon from '@mui/icons-material/Circle';
import TestComponent from "../Test/TestComponent";
import Analytics from "../Analytics/Analytics";
import { theme } from "../../theme";
import CollapseComponent from "../utils/Collapse/CollapseComponent";

const appsAndPagesData = [
  {
    name: "Dashboard",
    icon: <HomeOutlinedIcon fontSize="medium" />,
    link: "/dashboard",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Analytics",
    icon: <PersonOutlineOutlinedIcon fontSize="medium" />,
    link: "/all-season-24x7-b2b",
    isHeader: true,
  },
  {
    name: "Jobs",
    icon: <EmailOutlinedIcon fontSize="medium" />,
    link: "/jobs",
    isHeader: true,
  }
];

const userIntefaceData = [
  {
    name: "Email",
    icon: <EmailOutlinedIcon fontSize="medium" />,
    link: "/email",
    isHeader: true,
  },
  {
    name: "Chat",
    icon: <ChatBubbleOutlineOutlinedIcon fontSize="medium" />,
    link: "/chat",
    isHeader: true,
  },
  {
    name: "Calendar",
    icon: <CalendarTodayIcon fontSize="medium" />,
    link: "/calendar",
    isHeader: true,
  },
  {
    name: "Invoice",
    icon: <CreditCardOutlinedIcon fontSize="medium" />,
    link: "/invoice",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
        link: "/test",
      },
    ],
  },
  {
    name: "User",
    icon: <PersonOutlineOutlinedIcon fontSize="medium" />,
    link: "/user",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Role",
    icon: <PersonOutlineOutlinedIcon fontSize="medium" />,
    link: "/role",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Pages",
    icon: <ContentCopyOutlinedIcon fontSize="medium" />,
    link: "/pages",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Dialogue",
    icon: <StarBorderOutlinedIcon fontSize="medium" />,
    link: "/dialogue",
    isHeader: true,
  }
];

const formsAndTablesData = [
  {
    name: "Typography",
    icon : <CreditCardOutlinedIcon fontSize="medium" />,
    link: "/typography",
    isHeader: true,
  },
  {
    name: "Icons",
    icon: <StarBorderOutlinedIcon fontSize="medium" />,
    link: "/icons",
    isHeader: true,
  },
  {
    name: "Card",
    icon: <CreditCardOutlinedIcon fontSize="medium" />,
    link: "/card",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
        link: "/test",
      },
    ],
  },
  {
    name: "Component",
    icon: <CreditCardOutlinedIcon fontSize="medium" />,
    link: "/component",
    isHeader: true,
    items: [
      {
        name: "CRM",
        icon: <CircleOutlined fontSize="small" />,
        link: "/crm",
      },
      {
        name: "Analytics",
        icon: <CircleOutlined fontSize="small" />,
        link: "/analytics",
      },
      {
        name: "Test",
        icon: <CircleOutlined fontSize="small" />,
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
