import React from 'react'
import Hotels from '../constant/hotels.json';
import { Stack } from '@mui/material';
const TypeSection = () => {
  console.log(Hotels)
  return (
    <Stack>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Stack>
  )
}

export default TypeSection