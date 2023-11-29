import { Box} from '@mui/material'
import React from 'react'
import logo from '../icons/logo.svg'
import txt from '../icons/text_logo.svg'
import menu from '../icons/menu_icon.svg'

const Header = () => {
  return (
    <Box
    sx={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        height:'11%',
        borderBottom:'1px solid #b5b4b3',
    }}
    >
        <img src={logo} alt='logo' style={{width:'5vh'}}/>
        <img src={txt} alt='text' style={{marginTop:'1.4vh', width:'20vh'}}/>
        <img src={menu} alt='menu' style={{width:'5vh'}}/>
    </Box>
  )
}

export default Header

// logo_width = 35px,      txt_style = width={160} style={{marginTop:'5px'}}        menu_width = 35px