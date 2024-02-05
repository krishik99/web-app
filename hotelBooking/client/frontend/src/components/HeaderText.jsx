import React from 'react'
import {Typography,Box,Stack} from '@mui/material';
const HeaderText = () => {
  return (
    <Box display="flex" flexDirection="column" gap="1em" sx={{alignItems:'center',textAlign:'center',padding:{lg:'2em',md:'2em',xs:'1em'}}}>
            <Stack>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
                    Find your next stay
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
                    Search low price hotels for your dream vacation...
                </Typography>
            </Stack>
    </Box>
  )
}

export default HeaderText