import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = ({exploreId}) => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}} position='relative' p="20px">
        <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
            Fitness Club
        </Typography>
        <Typography fontWeight="600" sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography sx={{fontSize:'22px',lineHeight:'35px'}} mb='10px'>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color="error" sx={{marginTop:'20px',padding:"10px",marginBottom:'10px',background:'#FF2625'}} onClick={()=>{
            document.getElementById('exploreId').scrollIntoView();
        }}>Explore Exercises</Button>
        <Typography sx={{fontWeight:"600",color:"#FF2625", fontSize:'200px',opacity:"0.1",display:{lg:'block',xs:'none'}}}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" loading='lazy'/>
    </Box>
  )
}

export default HeroBanner