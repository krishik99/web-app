import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",display:{xs:'none',md:'block',lg:'block'},
        background: "linear-gradient(7deg, rgba(200,74,218,1) 0%, rgba(255,156,69,1) 100%);",position:'fixed',bottom:'0'
      }}
    >
      <Stack sx={{margin:'1em',flexDirection:"row",justifyContent:'space-between',padding:'0 1em',flexWrap:'wrap',color: "white"}} >
        <Stack>
          <Typography variant="h5" component="div">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              Booking.com
            </Link>
          </Typography>
        </Stack>
        <Stack flexDirection="row" gap="1em" flexWrap="wrap" alignItems="center">
          <Typography sx={{fontSize:'16px'}} component="div">
            Privacy Policy
          </Typography>
          <Typography sx={{fontSize:'16px'}} component="div">
            Terms of Service
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
