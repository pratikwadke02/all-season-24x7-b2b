import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {theme} from '../../../theme';

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
        <Box sx={{pt:2, pb:2 }}>
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

export default function TabComponent(props) {
  const {data} = props;
  // console.log(data);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Box sx={{
      width: "100%",
    }}>
      <Box sx={{maxWidth:{xs:'80vw',sm:'90vw',  lg:'100%'}, borderBottom:1, borderColor:'divider', mb: 2}}>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          // allowScrollButtonsMobile
          scrollButtons="auto"
          variant="scrollable"
          >
          {data.map((item, index) => (
            <Tab 
              key={index} 
              label={item.name} 
              icon={item.icon} 
              iconPosition="start"
              {...a11yProps(index)} 
              sx={{fontSize:theme.typography.h5, mr:2, textTransform:'none'}} />
          ))}
        </Tabs>
      </Box>
      {data.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item.component}
        </TabPanel>
      ))}
      </Box>
  )
}
