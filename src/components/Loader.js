import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box
    sx={{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
        <CircularProgress sx={{color:'black'}}/>
    </Box>
  )
}

export default Loader
