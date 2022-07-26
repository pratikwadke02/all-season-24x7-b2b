import {Box} from '@mui/material'
import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import DashboardSidebar from '../../components/Sidebar/DashboardSidebar'
import {theme} from '../../theme'
import Analytics from '../../components/Analytics/Analytics'

const Dashboard = () => {
  return (
    <>
    <Box 
    bgcolor={'#ebf1f4'} sx={{
      minHeight:{xs:'100vh'}
    }}>
        <DashboardNavbar />
    </Box>
    </>
  )
}

export default Dashboard;