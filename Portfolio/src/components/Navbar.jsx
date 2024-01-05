import React, { useState,useTransition } from 'react'
import { Box, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faDownload} from '@fortawesome/free-solid-svg-icons';
import { useTab } from '../utility/TabContext';
import Resume from '../assets/KRISHNA_RESUME_DEC12.pdf';
const Navbar = () => {
    const {tab,setTab} = useTab();
    const [isPending, startTransition] = useTransition();
    const [showMobMenu,setShowMobMenu] = useState(false);
    const handleTabChange = (tab)=> {
        startTransition(()=>{
            console.log(isPending)
            setTab(tab)
            console.log(isPending)
        })
    }
    const menuItems = ()=> {
        return (
            <>
            <div onClick={()=>handleTabChange('home')} className='navItems' style={{background: tab === 'home' ? '#9c969621' : '#00000021' }}>Home</div>
            <div onClick={()=>handleTabChange('skills')} className='navItems' style={{background: tab === 'skills' ? '#9c969621' : '#00000021' }}>Skills</div>
            <div onClick={()=>handleTabChange('projects')} className='navItems' style={{background: tab === 'projects' ? '#9c969621' : '#00000021' }}>Projects</div>
            <div onClick={()=>handleTabChange('contact')} className='navItems' style={{background: tab === 'contact' ? '#9c969621' : '#00000021' }}>Contact</div>
            </>
        )
    }

    const handleMobileView = ()=> {
        setShowMobMenu((prev)=>{
            return !prev
        })
    }
  return (
    <Box>
        <Stack flexDirection="row" justifyContent="space-between" padding="1em" alignItems="center">
            <Stack className='logoStyle pacifico-Regular' width="auto"><a style={{textDecoration:'none'}} href={Resume} download='Krishna_Resume' target='_blank' rel="noreferrer" className='logoFont'><span>Resume</span> &nbsp;<FontAwesomeIcon icon={faDownload}/></a></Stack>
            <Stack className='pacifico-Regular' sx={{display:{lg:'flex',md:'flex',xs:'none'},justifySelf:'start',flexDirection:'row',gap:'1em',width:"auto",fontSize:'18px',color:'white'}}>
                {menuItems()}
            </Stack>
            <Stack className='pacifico-Regular' sx={{display:{lg:'none',md:'none',xs:'block'},position:'relative'}}>
            <span>
                <FontAwesomeIcon icon={faBars}  onClick={handleMobileView}/>
                {
                    showMobMenu && <Stack className='mobMenus'>{menuItems()}</Stack>
                }
            </span>

            </Stack>
        </Stack>
    </Box>
  )
}

export default Navbar