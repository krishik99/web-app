import React, { useMemo, useRef, useState } from "react";
import { useTab } from "../utility/TabContext";
import { Box, Stack } from "@mui/material";
import emailjs from "@emailjs/browser";
import contactMe from '../assets/images/contactMe.jpg';
import Alert from '@mui/material/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeCircleCheck,faHandPointDown} from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const { tab } = useTab();
  const formRef = useRef();
  const [showAlert,setShowAlert] = useState({success:null,error:null});
  useMemo(() => {
    if (tab && tab === "contact") {
      window.scrollBy(0,2800)
    }
  }, [tab]);
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        if(result.text.toUpperCase() == "OK"){
          setShowAlert({success:true,error:false})
          setTimeout(()=>{
            setShowAlert({success:false,error:false})
          },2000)
        }else{
          setShowAlert({success:false,error:true})
        }
      }, (error) => {
        setShowAlert({success:false,error:true})
      });
  };

  return (
    <section className='hideSection' id="contact">
    <Box sx={{margin:{lg:'10em',xs:'1em'},textAlign:'center',marginBottom:'1em'}}>
      <Stack sx={{fontFamily:'Alata-Regular',color:'white',marginBottom:{lg:'2em',md:'2em',xs:'1em'},fontSize:'2.5em'}}>Contact Me</Stack>
      <Stack sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <Stack sx={{displa:'flex',flexDirection:'column',gap:'1em',position:'relative'}}>
        <Stack  sx={{height:'5em',fontSize:'18px',fontFamily:'monospace',color:'yellow',display:'flex',flexDirection:'row',gap:'2em',alignItems:'center',justifyContent:{lg:'flex-end',md:'flex-end',xs:'center'}}}>
          <Stack sx={{display:'flex',flexDirection:'row',gap:'0.2em',alignItems:'center'}}>krishik0307@gmail.com <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></Stack>
          <Stack sx={{alignSelf:'flex-end',display:{lg:'flex',md:'flex',xs:'none'},flexDirection:'row',gap:'0.2em',alignItems:'center'}}>Write me a message <FontAwesomeIcon icon={faHandPointDown} /></Stack>
        </Stack>
        <form className='contact-form' ref={formRef} onSubmit={sendEmail}>
          <div>
              <label>Name</label>
              <input type="text" name="recipient_name" required/>
          </div>
          <div>
              <label>Email</label>
              <input type="email" name="recipient_email" required/>
          </div>
          <div>
              <label>Message</label>
              <textarea name="message" required/>
          </div>
          <div>
              <button type="submit" style={{cursor:'pointer',fontFamily:'Alata-Regular'}}>Send</button>
          </div>
        </form>
        {showAlert.success && <Alert sx={{position:'absolute',top:0,right:{lg:'0em',sm:'0',xs:'unset'},width:"16em"}} onClose={()=> setShowAlert({success:null,error:null})} severity={showAlert.success ? "success" : showAlert.error ? 'error' :''}>{showAlert.success ? 'Email has been sent successfully!' : showAlert.error ? 'There was an error while sending your email!' : null}</Alert>}
        <Stack sx={{
              width: "30em",
              height: "30em",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10%",
              position: "absolute",
              bottom: "8em",
              left: "-20em",
              zIndex: '3',
              display:{lg:'block',sm:'none',xs:'none'}
        }}>
            <img src={contactMe} alt="Contact-me" style={{
                  height: 'inherit',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: 'inherit',
                  borderRadius: '50%',
                  borderBottomRightRadius:'45em'
            }}/>
        </Stack>
        </Stack>
      </Stack>
    </Box>
    </section>
  );
};

export default Contact;
