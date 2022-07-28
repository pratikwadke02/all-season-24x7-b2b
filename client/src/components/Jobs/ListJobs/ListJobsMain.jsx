import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Typography, Box, Button } from "@mui/material";
import { theme } from "../../../theme";
import EnhancedTable from "../../Test/TestComponent";

const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "jobProfile", headerName: "JOB PROFILE", width: 260 },
  { field: "applicant", headerName: "APPLICANT", width: 260 },
  {
    field: "status",
    headerName: "STATUS",
    width: 120,
  },
  {
    field: "action",
    headerName: "ACTION",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const rows = [
    {
        id: 1,
        jobProfile: "Job Profile 1",
        applicant: "Applicant 1",
        status: "Status 1",
        action: "Action 1",
    }
]

const ListJobsMain = () => {
  return (
    <>
      {/* <Container
        sx={{
          p: 2,
          backgroundColor: theme.palette.background.default,
          boxShadow: 1,
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              Job List
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                maxWidth: "157px",
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: theme.typography.fontWeightBold }}
              >
                Add new job
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "371px",
          }}
        >
          <EnhancedTable />
        </Box>
      </Container> */}
      <EnhancedTable />
    </>
  );
};

export default ListJobsMain;
