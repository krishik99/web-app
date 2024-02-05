import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import {Link} from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext';
import { Stack } from '@mui/material';
import {useMutation} from 'react-query'
import * as API from '../api/services'
import { SUCCESS } from '../constants';
const Header = () => {
  const {isLoggedIn,setCookie,userName,setShowToast} = useAppContext();
  console.log(userName + "USER")
  const mutation = useMutation(API.inValidateToken ,{
    onSuccess : (res) => {
      setCookie(false)
      setShowToast({message:'Logged Out!',type:SUCCESS})
    },
    onError : (error) => {
      setShowToast({message:'Something went wrong!',type:ERROR})
    }
  })
  const handleLogout = ()=> {
    mutation.mutate()
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"linear-gradient(303deg, rgba(200,74,218,1) 0%, rgba(255,156,69,1) 100%)"}}>
        <Toolbar sx={{flexWrap:'wrap'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          <AppBlockingIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            <Link style={{textDecoration:'none',color:'inherit'}} to='/'>Booking.com</Link>
          </Typography>
          <Typography component="div"  sx={{ flexGrow: 0 ,color:'white',fontSize:'14px'}}>
            {
            isLoggedIn ? 
            (
            <Stack flexDirection="row" gap="1em" sx={{padding:{xs:'1em 0',lg:'0',md:'0'},alignItems:'center',flexWrap:'wrap'}}>
            <Typography variant="h6" color="white">Welcome {userName} !</Typography>
            <Link className='menuBtns' to='/' >My Bookings</Link>
            <Link className='menuBtns' to='/my-hotels' >My Hotels</Link>
            <Link className='menuBtns' to='/' onClick={handleLogout}>Logout</Link>
            </Stack>
            ) 
                : <Stack sx={{padding:{xs:'1em 0',lg:'0',md:'0'}}}><Link className='menuBtns' to='/signIn'>Sign In</Link></Stack>
            }
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header