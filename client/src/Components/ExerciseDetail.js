import React, { useEffect , useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Detail } from './Detail';
import { ExerciseVideos } from './ExerciseVideos';
// import { SimilarExercise } from './SimilarExercise';

import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'

export const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const { id } = useParams();
  // console.log(exerciseVideos)

  useEffect(()=> {
    const fetchExercisesData = async () => {
       const exerciseURL = "http://localhost:5000/exercises/exercise";
       const youtubeSearchURL = "https://youtube-search-and-download.p.rapidapi.com"

       const exerciseDetailData = await fetchData(`${exerciseURL}/${id}`, exerciseOptions);
       setExerciseDetail(exerciseDetailData);

       const exerciseVideoData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions);
       setexerciseVideos(exerciseVideoData.contents);
    }
    fetchExercisesData();
  },[id])

  // console.log(exerciseDetail);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/> 
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} /> 
      {/* <SimilarExercise />  */}
    </Box>
  )
}
