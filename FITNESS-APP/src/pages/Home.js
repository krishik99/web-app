import React, { createContext, useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
export const BodyPartContext = createContext('');
const Home = () => {
  const [searchedExercise,setSearchedExercise] = useState([]);
  const [selectedCard,setSelectedCard] = useState(null);
  const exploreId="explore";
  return (
    <Box>
        <HeroBanner exploreId={exploreId}/>
        <BodyPartContext.Provider value={{searchedExercise,setSearchedExercise,selectedCard,setSelectedCard,exploreId}}>
          <SearchExercises />
        </BodyPartContext.Provider>
    </Box>
  )
}


export default Home