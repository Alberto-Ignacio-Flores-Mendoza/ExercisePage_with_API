import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] =useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] =useState([])

  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData=async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)

      setExerciseDetail(exerciseDetailData);

      //Youtube api Call
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents); //helps when info is nested

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      



    }
    fetchExercisesData();
  }, [id])

  return (
      <Box>
        <Detail exerciseDetail={exerciseDetail}></Detail>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}></ExerciseVideos>
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}></SimilarExercises>
      </Box>
    )
}

export default ExerciseDetail