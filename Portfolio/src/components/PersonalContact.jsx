import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import linkedIn from "../assets/images/linkedin.png";
import call from "../assets/images/call.png";
const PersonalContact = () => {
  const [showPrompt,setShowPrompt] = useState(false);
  return (
    <Box>
      <Stack justifyContent="flex-start" flexDirection="row" gap="0.5em" marginTop='0.2em'>
        <div className="footerContent">
          <img
            src={linkedIn}
            alt="linkedIn"
            width="30px"
            height="30px"
            loading="lazy"
            onClick={()=>window.open('https://www.linkedin.com/in/krishna-r-a56098200/')}
          />
          {/* <a style={{textDecoration:'none',color:'white'}} href="https://www.linkedin.com/in/krishna-r-a56098200/" target="_blank" rel="noreferrer">LinkedIn</a> */}
        </div>
        <div className="footerContent">
          <img
            src={call}
            alt="call"
            width="30px"
            height="30px"
            loading="lazy"
            onClick={()=> {navigator.clipboard.writeText('+91 8248583718');setShowPrompt(true);setTimeout(()=>setShowPrompt(false),1000)}
            }
          />
            {showPrompt && <span className="copyPrompt">copied to clipboard</span>}
        </div>
      </Stack>
    </Box>
  );
};

export default PersonalContact;
