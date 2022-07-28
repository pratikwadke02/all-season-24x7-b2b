import React from 'react'
import {Box} from '@mui/material'
import Login from '../../components/Login/Login'

const Auth = () => {
  return (
    <>
    <Box sx={{backgroundColor:'#e0e0e1', height:'100vh', width:'100%', display:'flex', alignItems:'center'}}>
        <Login />
    </Box>
    </>
  )
}

export default Auth