import React,{useMemo} from 'react'
import { Box, Stack } from '@mui/material';
import { useTab } from '../utility/TabContext';
const Skills = () => {
    const {tab} = useTab();
    useMemo(() =>{
        if(tab && tab === 'skills'){
            document.getElementById('skills').scrollIntoView();
        }
    } , [tab])
  return (
    <section className='hideSection' id="skills">
    <Box  sx={{margin:{lg:'15em 5em 5em 5em',md:'13em 5em 5em 5em',xs:'1em'},padding:'2em',
    background: '#120e0e1a',
    borderRadius: '6px',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
    }}>
        <Stack sx={{display:'flex',flexDirection:'column',gap:'1em'}}>
            <h1 style={{color:'white',alignSelf:'center',fontSize:'2.5em'}}>Skills</h1>
            <Stack sx={{marginTop:'2em',display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'2em',justifyContent:'center'}}>
                <div className='skillItems'>
                    Angular
                </div>
                <div className='skillItems'>
                    React
                </div>
                <div className='skillItems'>
                    Redux
                </div>
                <div className='skillItems'>
                    React-query
                </div>
                <div className='skillItems'>
                    HTML
                </div>
                <div className='skillItems'>
                    CSS
                </div>
                <div className='skillItems'>
                    Javascript
                </div>
                <div className='skillItems'>
                    GIT
                </div>
                <div className='skillItems'>
                    Photoshop
                </div>
            </Stack>
        </Stack>
    </Box>
    </section>
  )
}
export default Skills