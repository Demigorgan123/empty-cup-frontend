import { Box} from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Designer from "./components/Designer";
import Loader from "./components/Loader";
import "./App.css"
// import data from '../src/data'
import { createContext, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
const context = createContext();

function App() {
  const matches = useMediaQuery('(max-width:1024px)')
  const [isShortList, setShortList] = useState(false)
  const width = matches?'100vw':'450px'
  const border = matches?null:'1px solid black'
  const borderRadius = matches?null:'5px'
  const margin = matches?null:'auto'
  const box_height = matches?'80%':'75.5%'
  const [data, setData] = useState([])

  const fetch_data = async()=>{
    const resp = await fetch('https://empty-cup-backend-demigorgan123.onrender.com/')
    const user_data = await resp.json()
    setData(user_data)
  }

  useEffect(()=>{
    fetch_data()
  }, [])
  return (
      <Box
      sx={{
        width:width,
        height:'100vh',
        border:border,
        borderRadius: borderRadius,
        margin:margin
      }}
      >
        <context.Provider value={matches}>
          <Header/>
          <Navbar isShortList={isShortList} setShortList={setShortList}/>
          <Box
          sx={{
            height:box_height,
            overflowY:'auto',
            overflowX:'hidden',
          }}
          >
            {
              data.length===0?<Loader/>:data.map((val, idx)=> <Designer key={idx} name={val.name} rating={val.rating} des={val.des} project={val.projects} year={val.years} price={val.price} phone1={val.phone1} phone2={val.phone2} idx={idx} isShortList={isShortList}/>)
            }
          </Box>
        </context.Provider>
      </Box>
  );
}

export default App;
export {context};