import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import contact from '../icons/contract_icon.svg'
import gallery from '../icons/gallery_icon.svg'
import map from '../icons/map_icon.svg'
import shortList from '../icons/shortlist_icon.svg'
import sort from '../icons/sort_icon.svg'
import { context } from '../App'
const Navbar = (props) => {
    const matches = useContext(context)
    const height = matches?'10%':'13%'
    const [color, setColor] = useState(null)
    const handleClick = ()=>{
        if(props.isShortList===false){
            setColor('invert(55%) sepia(100%) saturate(3.5)')
            props.setShortList(true)
        }
        else{
            setColor(null);
            props.setShortList(false)
        }
    }
  return (
    <Box
    sx={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:height,
        borderBottom:'1px solid #b5b4b3'
    }}
    >
        <Box
        sx={{
            display:'flex',
            width:'50%',
            justifyContent:'space-around'
        }}
        >
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                height: '5vh',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:'0.2vh'
            }}
            >
                <img src={contact} style={{width:'2.5vh', border:'1.5px solid #e0a64e', padding:'3px', borderRadius:'2px'}} alt='contact'/>
                <div style={{fontSize:'1.2vh', color:'#e0a64e'}}>Contact</div>
            </Box>
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                height: '5vh',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:'.2vh'
            }}
            >
                <img src={gallery} style={{width:'3vh'}} alt='gallery'/> 
                <div style={{fontSize:'1.2vh'}}>Gallery</div>
            </Box>
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                height: '5vh',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:'.2vh'
            }}
            >
                <img src={map} style={{width:'2.3vh'}} alt='map'/>
                <div style={{fontSize:'1.2vh', color:'#b5b4b3'}}>Map</div>
            </Box>
        </Box>
        <Box
        sx={{
            display:'flex',
            width:'40%',
            justifyContent:'space-evenly'
        }}
        >
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                height: '5vh',
                justifyContent: 'space-between',
                alignItems: 'center',
                filter:color,
                marginTop:'0.5vh'
            }}
            onClick={handleClick}
            >
                <img src={shortList} style={{width:'3vh'}} alt='shortlist'/> 
                <div style={{fontSize:'1.2vh'}}>Shortlisted</div>
            </Box>
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                height: '5vh',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:'0.5vh'
            }}
            >
                <img src={sort} style={{width:'3vh', marginTop:'4px'}} alt='sort'/> 
                <div style={{fontSize:'1.2vh'}}>Sort</div>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar
