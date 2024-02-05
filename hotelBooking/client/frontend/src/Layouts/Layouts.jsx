import React from 'react'
import Header from '../components/Header'
import HeaderText from '../components/HeaderText'

import { Box } from '@mui/material'
import Footer from '../components/Footer'

const Layouts = ({children}) => {
  return (
    <div>
        <Box sx={{background:"linear-gradient(7deg, rgba(200,74,218,1) 0%, rgba(255,156,69,1) 100%);",
        boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        borderRadius:'30%'
        }}>
          <Header />
          <HeaderText />
        </Box>
        <Box sx={{height:"100vh",overflow:"auto",marginBottom:'6em'}}>
            {children}
        </Box>
        <Footer />
    </div>
  )
}

export default Layouts