import React,{useContext,useState,useEffect} from 'react'
import { Box, Stack, Typography,Chip } from '@mui/material'
import {BodyPartContext} from '../pages/Home';
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
const Exercises = ({similarEquipmentData,similarMuscleData,similarYoutubeVideos,selectedInfo}) => {
  const {searchedExercise} = useContext(BodyPartContext);
  const [itemsPerPage,setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let indexOfLastExercise = itemsPerPage * currentPage;
  let indexOfFirstExercise = indexOfLastExercise - itemsPerPage;

 useEffect(() => {
        setCurrentPage(1);
        console.log(searchedExercise)
    },
    [searchedExercise,similarEquipmentData,similarMuscleData,similarYoutubeVideos],
  );

  const handleChange = (event, value) => {
    console.log(event)
    setCurrentPage(value);
}
  const promptShown = () => {
    let msg = "Showing Results..."
    if(similarEquipmentData && similarEquipmentData.length > 0){
      msg = "Showing Similar exercises with "
    }
    if(similarMuscleData && similarMuscleData.length > 0){
      msg = "Showing Similar exercises for "
    }
    if(similarYoutubeVideos && similarYoutubeVideos.length > 0){
      msg = "Watch exercise videos for "
    }
    return(<>{msg}<span style={{color:'#FF2625',textTransform:'capitalize'}}>{selectedInfo ? selectedInfo : ''}</span></>);
  }
      const displayData = searchedExercise || similarEquipmentData || similarMuscleData || similarYoutubeVideos;
      if(!displayData || (displayData && !displayData.length)){
        return <h3>NO DATA FOUND</h3>
      }else {
        return (
          <Box sx={{margin:{lg:'2em 2em 2em 3em',sm:'2em 2em 2em 3em' ,xs:'0 0 2em 0'}}}>
            <Typography variant='h5'>
              {promptShown()}
            </Typography>
          <Stack sx={{flexDirection:'row',overflow:'auto',gap:'1em'}}>
            {displayData && displayData.slice(indexOfFirstExercise,indexOfLastExercise).map((exercise,index) =>
            {
              if(!similarYoutubeVideos){
                return(
                  <Link to={`/exercise/${exercise.id}`} key={exercise.id} style={{textDecoration:'none'}} onClick={()=>window.scrollBy(0,-1000)}>
                  <Box sx={{
                        border: "6px solid red",
                        position: "relative",
                        width: "20em",
                        borderTopLeftRadius: "4%",
                        borderTopRightRadius: "4%",
                        borderBottom: "0",
                        borderBottomLeftRadius: "4%",
                        borderBottomRightRadius: "4%",
                        borderRight: "0",
                        borderLeft: "0",
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                        margin: "0.3em",
                        display:'flex',
                        flexDirection:'column'
                  }}>
                      <img src={exercise.gifUrl} style={{width:'15em',alignSelf:'center',borderRadius:'5%',
                      boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}} loading='lazy'/>
                      <Stack sx={{flexDirection:'row',gap:'1em',padding:'1em',flexWrap:'wrap'}}>
                        <Chip label={exercise.bodyPart} sx={{background:'#8fff9f',fontWeight:'600',opacity:'0.8',textTransform:'capitalize'}}/>
                        <Chip label={exercise.target} sx={{background:'violet',fontWeight:'600',opacity:'0.8',textTransform:'capitalize'}} />
                      </Stack>
                  </Box>
                  </Link>
                  )
              }else{
                return (
                  <Box key={index} width="360px" height="200px">
                    {
                    exercise && exercise.video && exercise.video.videoId && exercise.video.thumbnails && exercise.video.thumbnails.length && exercise.video.thumbnails[0] &&
                    <a href={`https://www.youtube.com/watch?v=${exercise.video.videoId}`} target='_blank' rel='noreferrer'>
                      <img src={exercise.video.thumbnails[0].url} width="360px" height="200px"/>
                    </a>
                    }
                  </Box>
                )
              }
  
            }
            )}
          </Stack>
          <Pagination count={Math.ceil(displayData.length / 5)} page={currentPage} onChange={handleChange} />
          </Box>
    )
      }
}

export default Exercises