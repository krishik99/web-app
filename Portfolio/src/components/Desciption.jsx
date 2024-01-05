import React from "react";
import { Box, Stack } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import myImg from "../assets/images/me.svg";
import { useTab } from "../utility/TabContext";
import PersonalContact from '../components/PersonalContact';
const Desciption = () => {
    const {tab,setTab} = useTab();
  return (
    <section className='hideSection' id='home'>
    <Box sx={{margin:{lg:'5em',md:'5em',xs:'0'}}} className="alata-Regular">
      <Stack sx={{display:"flex",flexDirection:{lg:'row',md:'row',xs:'column'},gap:{xs:'1em'},alignItems:'center',justifyContent:'space-around',padding:{lg:'5em',md:'5em',xs:'1em'}}}>
        <Stack className='welcomeText'>
          <Stack
            className="welcome" sx={{fontSize:{lg:'24px',md:'24px',xs:'20px'}}}>
            Welcome to my Portfolio
          </Stack>
          <Stack sx={{fontSize:{lg:'28px',md:'28px',xs:'22px'},color:'white',letterSpacing:'1px'}}>
            <h1>Hi! I'm Krishna Web Developer</h1>
            <p style={{fontSize:'20px'}}>I have 3+ years of experience in developing responsive Single Page Applications with enterprise standards</p>
            <span id='typeWrite' style={{fontSize:'20px'}}>I love creating cool Designs</span>
            <PersonalContact/>
            <span onClick={()=>setTab('contact')} className="letsconnect"><p style={{fontSize:'16px'}}>Let's Conntect </p><FontAwesomeIcon icon={faArrowRight} className="connect" title="Connect" style={{
                    border: '2px solid',
                    padding: '0.3em',
                    borderRadius: '50%',
                    fontSize: '12px'
            }}/></span>
          </Stack>
        </Stack>
        <Stack sx={{width: {lg:'500px',md:'450px',xs:"300px"},height: {lg:'400px',md:'400px',xs:"300px"}}}>
          <img src={myImg} alt="my-pic" className='myImage'/>
        </Stack>
      </Stack>
    </Box>
    </section>
  );
};

export default Desciption;
