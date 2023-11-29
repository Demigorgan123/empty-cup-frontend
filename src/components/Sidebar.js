import { Box } from '@mui/material'
import React, { useState } from 'react'
import detail from '../icons/right_arrow_icon.svg'
import hide from '../icons/hide_icon.svg'
import shortlist from '../icons/shortlist2_icon.svg'
import outlineShortlist from '../icons/outline-short.svg'
import report from '../icons/report_icon.svg'

const Sidebar = (props) => {
    const [bookmark, setBookmark] = useState(outlineShortlist);
    const handleClick = ()=>{
        if(props.isShortList===false){
            setBookmark(shortlist);
            props.setShortList(true)
        }
        else{
            setBookmark(outlineShortlist)
            props.setShortList(false)
        }
    }

  return (
    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'15%',
        color:'#ad4f2a'
    }}
    >
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
        >
            <img src={detail} style={{width:'4vh'}} alt='detail'/>
            <div style={{fontSize:'1.5vh'}}>Details</div>
        </Box>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
        >
            <img src={hide} style={{width:'3vh'}} alt='hide'/>
            <div style={{fontSize:'1.5vh', marginTop:'1vh'}}>Hide</div>
        </Box>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}
        onClick={handleClick}
        >
            <img src={bookmark} style={{width:'2.5vh'}} alt='shortlist'/>
            <div style={{fontSize:'1.5vh', marginTop:'1.2vh'}}>ShortList</div>
        </Box>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
        >
            <img src={report} style={{width:'2.5vh'}} alt='report'/>
            <div style={{fontSize:'1.5vh', marginTop:'1vh'}}>Report</div>
        </Box>
    </Box>
  )
}

export default Sidebar
