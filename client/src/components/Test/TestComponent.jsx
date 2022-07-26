// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/material/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import Account from "../Analytics/Account/Account";
import Security from "../Analytics/Security/Security";
import Info from "../Analytics/Info/Info";
import Billing from "../Analytics/Billing/Billing";
import Notification from "../Analytics/Notification/Notification";

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//             <Tab label="Item Four" value="4" />
//             <Tab label="Item Five" value="5" />
//           </TabList>
//         </Box>
//         <TabPanel value="1"><Account /></TabPanel>
//         <TabPanel value="2"><Security /></TabPanel>
//         <TabPanel value="3"><Info /></TabPanel>
//         <TabPanel value="4"><Billing /></TabPanel>
//         <TabPanel value="5"><Notification /></TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { theme } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          // testColor={theme.palette.secondary.main}
          // indicatorColor={theme.palette.secondary.main}
          textColor="secondary"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab
            sx={{fontSize: "14px"}}
            icon={<SearchIcon />}
            iconPosition="start"
            label="ACCOUNT"
            {...a11yProps(0)}
          />
          <Tab
            sx={{fontSize: "14px"}}
            icon={<LockOpenOutlinedIcon />}
            iconPosition="start"
            label="SECURITY"
            {...a11yProps(1)}
          />
          <Tab
            sx={{fontSize: "14px"}}
            icon={<InfoOutlinedIcon />}
            iconPosition="start"
            label="INFO"
            {...a11yProps(2)}
          />
          <Tab
            sx={{fontSize: "14px"}}
            icon={<BookmarkBorderOutlinedIcon />}
            iconPosition="start"
            label="BILLING"
            {...a11yProps(3)}
          />
          <Tab
            sx={{fontSize: "14px"}}
            icon={<NotificationsNoneOutlinedIcon />}
            iconPosition="start"
            label="NOTIFICATION"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
    
      <TabPanel value={value} index={0}>
        <Account />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Security />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Info />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Billing />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Notification />
      </TabPanel>
    </Box>
  );
}
