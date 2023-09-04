import React from 'react'
import {Stack} from '@mui/material' 
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

//Stack manages layout of immediate children along the vertical OR horizontal axis with optional spacing 
//Basically for a menu

const Navbar = () => {
  return (
  
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link to='/'>
        <img  className='Nav_icon' src={Logo} alt="logo" style={{width: '48px', height: '48px', marin:'0 20px', color:'#3025ff'}}></img>
      </Link>

      <Stack direction='row' gap="40px" alignItems="flex-end"> 
        <Link to="/" style={{textDecoration: 'none' , color: '#3a1212', borderBottom: '3px solid #3025ff'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>

    </Stack>

  )
}

export default Navbar