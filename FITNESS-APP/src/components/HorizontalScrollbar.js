import React, { useRef,useEffect,useContext } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import {BodyPartContext} from '../pages/Home';
import {exerciseOptions,fetchData} from '../utils/FetchData'
const HorizontalScrollbar = ({ bodyPartList }) => {
    const {setSearchedExercise,selectedCard,setSelectedCard} = useContext(BodyPartContext);
    const ref = useRef();
    const RightArrow = () => {
        ref.current.style.transition = "1s all ease-in-out";
        ref.current.scrollBy(250, 0);

    };

    const LeftArrow = () => {
        ref.current.style.transition = "1s all ease-in-out";
        ref.current.scrollBy(-250, 0);

    };

    useEffect(() => {
        getBodyPart();
    },[selectedCard])

    const getBodyPart = async () => {
            if(selectedCard){
                const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPart/"+selectedCard,exerciseOptions);
                if(exerciseData && exerciseData.length > 0){
                    const searched = exerciseData.filter(value => {
                        return (
                            value.bodyPart && value.bodyPart.includes(selectedCard)
                    )})
                    if(searched && searched.length){
                        setSearchedExercise(searched);
                    }
                }
            }
    }
    return (
        <>
            <Box  sx={{margin: {lg:'1em',sm:'1em',xs:'1em'},padding:'1em',background:'rgb(184 191 98 / 17%)', display: 'flex',flexDirection:{lg:'row',sm:'row',xs:'column'} , justifyContent: 'start',alignItems:'center',borderRadius:'30%',boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',position:'relative',scrollBehavior:'smooth',overflow: 'auto'}}>
            <Typography onClick={() => LeftArrow()} className="left-arrow">
                <img src={LeftArrowIcon} alt="right-arrow" loading='lazy'/>
            </Typography>
                <Stack className='horizontalScroll' ref={ref} sx={{display: 'flex', width:'91%',overflow:'auto',flexDirection:'row' , gap: '1em', padding: '1em 0.5em',alignItems:'center',margin:{lg:'1.5em 1.5em 1em 1.5em',sm:'1em',xs:'0.5em'} }}>
                    {
                        bodyPartList.map(bodyPart => (
                            <div onClick={()=>{ setSelectedCard(bodyPart); }} className={bodyPart == selectedCard ? 'selected-card' : 'normal-card'} key={bodyPart}>{bodyPart}</div>
                        ))
                    }
                </Stack>
                <Typography onClick={() => RightArrow()} className="right-arrow">
                <img src={RightArrowIcon} alt="right-arrow" loading='lazy'/>
            </Typography>

            </Box>

        </>
    )
}

export default HorizontalScrollbar