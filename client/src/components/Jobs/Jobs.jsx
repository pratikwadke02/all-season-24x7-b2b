import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import AddNewJob from "./AddNewJob/AddNewJob";
import ListJobs from "./ListJobs/ListJobs";
import { Container } from "@mui/material";
import TabComponent from "../utils/Tabs/TabComponent";
import { theme } from "../../theme";

const Jobs = () => {
  const data = [
    {
      name: "List Jobs",
      icon: <SearchIcon />,
      component: <ListJobs />,
    },
    {
      name: "Add a new Job",
      icon: <LockOpenOutlinedIcon />,
      component: <AddNewJob />,
    },
  ];

  return (
    <>
      <Container
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: "10px",
          maxWidth: 1132,
          width: "100%",
        }}
      >
        <TabComponent data={data} />
      </Container>
    </>
  );
};

export default Jobs;
