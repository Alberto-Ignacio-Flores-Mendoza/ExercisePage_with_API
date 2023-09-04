import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import HorixontalScrollbar from './HorixontalScrollbar'
import Loader from './Loader'



const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {



  return (
    <Box sx={{mt:{lg:'100px', xs: '0'}}}>
      <Typography varian="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{p:'2', position : 'relative'}} onClick={() => {
      window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
      }}>
        {targetMuscleExercises.length ?
        <HorixontalScrollbar data={targetMuscleExercises}/>
        : <Loader></Loader> 
        }

      </Stack>


      <Typography varian="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>

      <Stack direction="row" sx={{p:'2', position : 'relative'}} onClick={() => {
      window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
      }}>
        {equipmentExercises.length ?
        <HorixontalScrollbar data={equipmentExercises}/>
        : <Loader></Loader> 
        }

      </Stack>

    </Box>
  )
}

export default SimilarExercises