import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import {exerciseOptions,fetchData,youtubeOptions} from '../utils/FetchData'
import bodypartIcon from '../assets/icons/body-part.png';
import equipment from '../assets/icons/equipment.png';
import target from '../assets/icons/target.png';
import Exercises from '../components/Exercises';
const ExerciseDetails = () => {
  const params = useParams();
  const [exerciseInfo,setExerciseInfo] = useState({});
  const [similarMuscleData,setSimilarMuscleData] = useState({});
  const [similarEquipmentData,setSimilarEquipmentData] = useState({});
  const [similarYoutubeVideos,setSimilarYoutubeVideos] = useState({});

  console.log(params)
  useEffect(()=>{
      if(params.id){
        const fetchExerciseById = async () => {
          const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/exercise/'+params.id,exerciseOptions)
          if(exerciseData){
              setExerciseInfo(exerciseData)
              const muscleData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/target/'+exerciseData.target,exerciseOptions)
              if(muscleData && muscleData.length){
                setSimilarMuscleData(muscleData)
              }
              const equipmentData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/equipment/'+exerciseData.equipment,exerciseOptions)
              if(equipmentData && equipmentData.length){
                setSimilarEquipmentData(equipmentData)
              }
              const youtubeRelatedVideos = await fetchData('https://youtube-search-and-download.p.rapidapi.com/search?query='+exerciseData.name,youtubeOptions)
              if(youtubeRelatedVideos && youtubeRelatedVideos.contents && youtubeRelatedVideos.contents.length){
                setSimilarYoutubeVideos(youtubeRelatedVideos.contents)
              }
              console.log(similarMuscleData,similarEquipmentData,similarYoutubeVideos)
          }
       }
       fetchExerciseById();
      }
},[params.id])
  let style={
    display:'flex',gap:'1em',fontFamily:'sans-serif',color:'grey',fontSize:'20px',textTransform:'capitalize',alignItems:'center'
  }
  let imgStyle={
    width: '50px',
    background: 'white',
    borderRadius: '50%',
    padding: '0.5em'
  }
  return (
    <Box sx={{margin:{lg:'5em',sm:'5em',xs:'1em'}}}>
      <Stack sx={{display:'flex',flexDirection:{lg:'row',sm:'row',xs:'column'},gap:{lg:'5em',xs:'1em'}}}>
        <Stack sx={{width:{lg:'50%',xs:'auto'}}}><img src={exerciseInfo.gifUrl} alt='image' className='individual-exercise-details' style={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              borderRadius: "4%"
        }}/></Stack>
        <Stack justifyContent='space-evenly' sx={{gap:{lg:'0',xs:'1em'}}}>
            <Stack sx={{fontSize:'44px',fontWeight:'600',textTransform:'capitalize',fontFamily:'system-ui'}}>{exerciseInfo.name}</Stack>
            <p style={{fontFamily:'sans-serif',color:'grey',fontSize:'20px'}}>Exercise keeps you strong. <span style={{textTransform:'capitalize'}}> {exerciseInfo.name}</span> 
            is one of the best exercise to strengthen your  {exerciseInfo.secondaryMuscles && exerciseInfo.secondaryMuscles.length && exerciseInfo.secondaryMuscles.slice(0,exerciseInfo.secondaryMuscles.length-1).join(', ')} and {exerciseInfo.secondaryMuscles && exerciseInfo.secondaryMuscles.length && exerciseInfo.secondaryMuscles.slice(exerciseInfo.secondaryMuscles.length-1)}</p>
            <Stack sx={{display:'flex',flexDirection:'column',gap:'1.5em'}}>
                <div style={style}><img src={bodypartIcon} alt='img' style={imgStyle} loading='lazy'/> {exerciseInfo.bodyPart}</div>
                <div style={style}><img src={target} alt='img' style={imgStyle} loading='lazy'/> {exerciseInfo.target}</div>
                <div style={style}><img src={equipment} alt='img' style={imgStyle} loading='lazy'/>{exerciseInfo.equipment}</div>
            </Stack>
        </Stack>
      </Stack>
      <Stack sx={{paddingTop:'2em'}}>
          {
           exerciseInfo && similarYoutubeVideos && similarYoutubeVideos.length && <Exercises similarYoutubeVideos={similarYoutubeVideos} selectedInfo={exerciseInfo.bodyPart}/>
          }
      </Stack>
      <Stack sx={{paddingTop:'2em'}}>
          {
            exerciseInfo && similarMuscleData && similarMuscleData.length && <Exercises similarMuscleData={similarMuscleData} selectedInfo={exerciseInfo.target}/>
          }
      </Stack>
      <Stack sx={{paddingTop:'2em'}}>
          {
           exerciseInfo && similarEquipmentData && similarEquipmentData.length && <Exercises similarEquipmentData={similarEquipmentData} selectedInfo={exerciseInfo.equipment}/>
          }
      </Stack>
    </Box>
  )
}

export default ExerciseDetails