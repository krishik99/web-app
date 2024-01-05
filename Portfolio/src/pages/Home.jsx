import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Desciption from '../components/Desciption';
import { Box } from '@mui/material';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { useTab } from '../utility/TabContext';
export const Home = () => {
  const {tab,setTab} = useTab();
  useEffect(()=>{
    const skills =  document.querySelectorAll('.hideSection')
    skills.forEach(entry => observer.observe(entry))
  },[])
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('displaySection')
      }else{
        entry.target.classList.remove('displaySection')
      }
    })
  })

  return (
    <Box sx={{overflow:'auto',background:'linear-gradient(60deg, rgb(255, 94, 94) 0%, rgb(255, 254, 0) 100%)'}}>
        <Navbar/>
        <Desciption/>
        <Skills/>
        <Projects/>
        <Contact/>
        {tab!=='home' &&<div className="to-top" title='scroll to Top' onClick={()=>window.scrollBy(0,-2800)}><FontAwesomeIcon icon={faArrowUp} /></div>}
    </Box>
  )
}
