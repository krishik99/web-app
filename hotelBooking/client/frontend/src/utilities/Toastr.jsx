import { SUCCESS,ERROR } from "../constants";
import {Box,Stack,Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppContext } from "../contexts/AppContext";
import { useEffect } from "react";

export const Toastr = ({message,type}) => {
    const {setShowToast} = useAppContext();
    useEffect(()=>{
        setTimeout(()=>{
            setShowToast({message:'',type:''})
        },3000)
    },[])
    let background='none';
    if(type === SUCCESS){
        background = "#00af16";
    }else if(type === ERROR){
        background = "#bf0933";
    }
    console.log(message,type,background)
    return(
        <Box sx={{position:'fixed',zIndex:'99',
        display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Stack sx={{background:"white",width:{lg:'30em',md:'30em',xs:'20em'},borderRadius:'10px',boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
                <Stack component="title" sx={{background:background,padding:"0.5em",flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Typography variant="h5" color="white">
                        Message
                    </Typography>
                    <Typography color="white" sx={{display:'flex',cursor:'pointer'}} component="div" onClick={()=>setShowToast({message:'',type:''})}>
                        <CloseIcon />
                    </Typography>
                </Stack>
                <Stack component="div" padding="1em" sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Typography fontSize="16px" color="#00000061" fontWeight="600">
                        {message}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
export default Toastr;