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
      icon: <SearchIcon fontSize='medium' />,
      component: <ListJobs />,
    },
    {
      name: "Add a new Job",
      icon: <LockOpenOutlinedIcon fontSize='medium' />,
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
          maxWidth:{ xs:"100%" , lg:"inherit"},
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TabComponent data={data} />
      </Container>
    </>
  );
};

export default Jobs;
