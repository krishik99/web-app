import React, { useEffect, useState,useContext, useCallback, useRef } from 'react'
import { Box,Stack,Typography,Button, TextField } from '@mui/material'
import {exerciseOptions,fetchData} from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import {BodyPartContext} from '../pages/Home';
import Exercises from '../components/Exercises'
const SearchExercises = () => {
    console.log(process.env.REACT_APP_RAPID_API_KEY)
    const [exercise,setExercise] = useState('');
    const {searchedExercise,setSearchedExercise,exploreId} = useContext(BodyPartContext);
    const [bodyPartList,setBodyPartList] = useState([]);
    const ref = useRef();
    useEffect(()=>{
            const fetchBodyPartsData = async () => {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
                console.log(bodyPartsData)
                   if(bodyPartsData && bodyPartsData.length){
                    setBodyPartList([...bodyPartsData])
                   }
                }
                fetchBodyPartsData();
        },[])
    const handleSearch = async ()=> {
            if(exercise){
                const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
                if(exerciseData && exerciseData.length > 0){
                    const searched = exerciseData.filter(value => {
                        return (( value.name && value.name.includes(exercise))
                        || ( value.bodyPart && value.bodyPart.includes(exercise) )
                        || ( value.equipment && value.equipment.includes(exercise) )
                        || ( value.target && value.target.includes(exercise) )
                    )})
                    if(searched && searched.length){
                        setSearchedExercise(searched);
                    }else{
                        setSearchedExercise([]);
                    }
                    setExercise('')
                    document.getElementById('exercise').scrollIntoView();
                }
            }
    }
    const ExerciseDetails = useCallback(()=>{
        return (
        <Box sx={{position:'relative',width:'100%',p:{lg:'20px',sm:'20px',xs:'0'}}}>
        {
        searchedExercise.length > 0 && <Exercises/>
        }
    </Box>)
    },[searchedExercise])
  return (
    <Box id="exploreId">
        <Stack p="20px" alignItems="center" justifyContent="center" mt="37px">
            <Typography sx={{fontWeight:"600px",fontSize:{lg:'44px', xs:'30px'},textAlign:"center"}} mb="50px">
                Awesome Exercises you <br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField value={exercise} onChange={(e)=>{setExercise(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text'sx={{height:'72px',width:{lg:'800px',xs:'350px'},fontWeight:'700',borderRadius:'6px',border:'none'}}/>
                <Button className='search-btn' sx={
                    {
                        background:'#FF2625',
                        color:'white',
                        width:{lg:'175px',xs:'80px'},
                        fontSize:{lg:'20px',xs:'14px'},
                        height:"56px",
                        position:'abolute',right:'0px'
                    }
                } onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{position:'relative',width:{lg:'90%',sm:'90%',xs:'100%'},p:{lg:'20px',sm:'20px',xs:'0'}}}>
                <HorizontalScrollbar bodyPartList={bodyPartList}/>
            </Box>
                <div id='exercise' style={{display:'flex',justifyContent:'center',width:'100%'}}>
                {ExerciseDetails()}
                </div>
        </Stack>
    </Box>
  )
}

export default SearchExercises