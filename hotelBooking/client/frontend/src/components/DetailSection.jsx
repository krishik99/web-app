import { Box, Stack ,TextField} from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const DetailSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useFormContext()
  return (
    <Box>
        <Stack gap="1em">
          <TextField sx={{ flexGrow: "1" }} id="hotelName" label="Name of the hotel" error={errors.hotelName ? true : false} 
          {...register("hotelName", { required: true, minLength:3 })}
          helperText={errors.hotelName && "This field is required"}
          />
          <TextField sx={{ flexGrow: "1" }} id="city" label="City" error={errors.city ? true : false} 
          {...register("city", { required: true })}
          helperText={errors.city && "This field is required"}
          />
          <TextField sx={{ flexGrow: "1" }} id="country" label="Country" error={errors.country ? true : false} 
          {...register("country", { required: true})}
          helperText={errors.country && "This field is required"}
          />
          <TextField sx={{ flexGrow: "1" }} id="description" label="Description" error={errors.description ? true : false} 
          {...register("description", { required: true, minLength:10 })}
          helperText={errors.description && "This field is required"}
          />
          <TextField sx={{ flexGrow: "1" }}  id="pricePerNight" label="Price Per Night" error={errors.pricePerNight ? true : false} 
          {...register("pricePerNight", { required: true, minLength:3,validate:(val)=>{
            if(isNaN(val)){
              return "Only numeric values are allowed"
            }
          } })}
          helperText={errors.pricePerNight && "This field is required"}
          />
        </Stack>
    </Box>
  )
}

export default DetailSection