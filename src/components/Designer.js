import { Box, Rating } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
const Designer = (props) => {
  const [shortList, setShortList] = useState(false)
  const idx = props.idx;
  const color = idx%2===0?'#fbfbf3':null;
  const display = (props.isShortList===true && shortList===false)?'none':'flex'
  return (
    <Box
    sx={{
        display:display,
        height:'50%',
        borderBottom:'1px solid #b5b4b3',
        backgroundColor:color,
    }}
    >
        <Box
        sx={{
          borderRight:'1px solid #b5b4b3',
          margin:'3vh 0px 3vh 0px',
          width:'85%'
        }}
        >
            <h3 style={{margin:'0vh 3vh', fontSize:'3vh'}}>{props.name}</h3>
            <Rating name="half-rating-read" defaultValue={1.5} precision={0.5} value={props.rating} readOnly size='small' sx={{margin:'1vh 3vh', color:'black', fontSize:'2.5vh'}}/>
            <p style={{fontSize:'1.5vh', margin:'2vh 3vh'}}>{props.des}</p>
            <Box
            sx={{
              display:'flex',
              justifyContent:'start',
              margin:'3vh 0vh 0vh 3vh',
              fontSize:'2.5vh',
              gap:'20%'
            }}
            >
              <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
              }}
              >
                <h3 style={{margin:0}}>{props.project}</h3>
                <p style={{margin:0, fontSize:'1.5vh'}}>Projects</p>
              </Box>
              <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
              }}
              >
                <h3 style={{margin:0}}>{props.year}</h3>
                <p style={{margin:0, fontSize:'1.5vh'}}>Years</p>
              </Box>
              <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
              }}
              >
                <h3 style={{margin:0}}>{props.price}</h3>
                <p style={{margin:0, fontSize:'1.5vh'}}>Price</p>
              </Box>
            </Box>
            <p style={{margin:'3vh 0vh 0vh 3vh', fontSize:'2vh'}}>{props.phone1}</p>
            <p style={{margin:'1vh 0vh 0vh 3vh', fontSize:'2vh'}}>{props.phone2}</p>
        </Box>
        <Sidebar isShortList={shortList} setShortList={setShortList}/>
    </Box>
  )
}

export default Designer
