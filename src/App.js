import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
    
        <Box width="400" sx={{width: {xl:'1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/exercise/:id" element={<ExerciseDetail/>}></Route>

            </Routes>
            <Footer></Footer>
        </Box>

    )
}

export default App