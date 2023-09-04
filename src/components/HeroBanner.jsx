import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px' ,xs:'100px'}, ml: {sm:'50px'}, mb:{lg: '20rem'} , flexDirection: {lg: "row", sm: "column", xs:"column"}}} position='relative' p='20px' display="flex" >

      <Box>
      <Typography color= '#3025ff' fontWeight='600' fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700} sx={{fontSize: {lg:'44px' , xs:'40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
      </Typography>

       <Typography fontSize='22px' lineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#3025ff', padding: '10px'}}>Explore Exercises</Button>

      <Typography fontWeight={600} color="#3025ff" sx={{ opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px">
        Exercise
      </Typography>

      </Box>
      <Box sx={{ display: { sm: 'flex', xs:'flex'} , justifyContent: {sm:'center', xs:'center'}, alignItems: {sm: 'center', xs:'center'} }}>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
      </Box>
    </Box>

    )
}

export default HeroBanner