import { Box,Stack, Typography,Button } from '@mui/material'
import React from 'react'
import { useForm , FormProvider} from "react-hook-form"
import DetailSection from '../components/DetailSection';
import TypeSection from '../components/TypeSection';
import FacilitiesSection from '../components/FacilitiesSection';
import GuestSection from '../components/GuestSection';
import ImageSection from '../components/ImageSection';
const MyHotels = () => {
  const formMethods = useForm();
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  const { handleSubmit } = formMethods;
  const onSubmit = (data)=> {

    console.log(data)
  }
  return (
    <FormProvider {...formMethods} >
      <Box sx={{margin:{lg:'4em',md:'5em',xs:'1em'},padding:{lg:'2em',md:'0em',xs:'0'},display:'flex',flexDirection:'column',
    borderRadius: "10px",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    }} className='formContainer'>
      <Typography
    variant="h4"
    sx={{
      flexGrow: 1,
      color: "black",
      textAlign: "center",
      marginBottom: "1em",
      background: "linear-gradient(303deg, rgba(200,74,218,1) 0%, rgba(255,156,69,1) 100%)",
      borderRadius:"6px",
      padding:"0.5em",
      color:"#33292947"
    }}
    >Add Hotels</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DetailSection />
          <TypeSection />
          {/* <TypeSection />
          <FacilitiesSection />
          <GuestSection />
          <ImageSection /> */}
          <Button sx={{marginTop:'2em',float:'right'}} type="submit" className="buttons" variant="contained" >Submit</Button>
        </form>
      </Box>

    </FormProvider>
  )
}

export default MyHotels